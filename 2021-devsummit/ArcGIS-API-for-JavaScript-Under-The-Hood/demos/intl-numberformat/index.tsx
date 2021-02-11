import { createProjector } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";
import { highlight } from "../utils/highlight";
import currencies from "./currency";
import units from "./unit";

// locales exposed through the UI
const locales = new Set<string>([
  "en",
  "en-US",
  "en-GB",
  "fr-FR",
  "fr-CA",
  "es",
  "es-ES",
  "es-MX",
]);

const numberToFormat = -12345.6789;

// Initial selected locale
let formatLocale: string = "en-US";

// Initial selected options
let formatOptions: Intl.NumberFormatOptions = {
  style: "decimal",
  minimumIntegerDigits: 1,
  // minimumFractionDigits: 0,
  // maximumFractionDigits: 3,
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 21,
  currency: "USD",
  currencyDisplay: "symbol",
  currencySign: "standard",
  unit: "meter",
  unitDisplay: "short",
};

//Renders the application content
function render() {
  const renderedFormatOptions: Intl.NumberFormatOptions = {
    ...formatOptions,
  };

  const keys = Object.keys(formatOptions) as (keyof Intl.NumberFormatOptions)[];

  for (const key of keys) {
    if (formatOptions[key] === "none" || formatOptions[key] === "auto") {
      delete renderedFormatOptions[key as keyof Intl.NumberFormatOptions];
    }
  }

  if (formatOptions.style !== "currency") {
    delete renderedFormatOptions.currency;
    delete renderedFormatOptions.currencyDisplay;
    delete renderedFormatOptions.currencySign;
  }

  if (formatOptions.style !== "unit") {
    delete renderedFormatOptions.unit;
    delete renderedFormatOptions.unitDisplay;
  }

  const formattedSnippet = getFormatSnippet(
    formatLocale,
    renderedFormatOptions
  );
  const formattedDate = getFormattedDate(formatLocale, renderedFormatOptions);

  return (
    <calcite-shell dir="ltr" theme="light">
      <header slot="shell-header">
        <h2 style="margin-left: 30px">Intl.NumberFormat</h2>
      </header>
      <div style="background-color: #f0f0f0; width: 100%; height: 100%; display: flex; flex-direction: row; justify-content: center;">
        <calcite-tip
          style="display: flex; flex-direction: column; width: 380px; align-self: stretch"
          heading="Options"
          nonDismissible
        >
          {renderLocaleSelect()}
          {renderRadioButtonGroup(
            "notation",
            ["standard", "scientific", "engineering", "compact"],
            renderedFormatOptions
          )}
          {renderNumberInput(
            "minimumIntegerDigits",
            1,
            21,
            renderedFormatOptions
          )}
          {/* {renderRangeInput(
            "fraction digits",
            "minimumFractionDigits",
            "maximumFractionDigits",
            0,
            20,
            renderedFormatOptions
          )} */}
          {renderRangeInput(
            "significant digits",
            "minimumSignificantDigits",
            "maximumSignificantDigits",
            1,
            21,
            renderedFormatOptions
          )}
          {renderRadioButtonGroup(
            "style",
            ["decimal", "percent", "currency", "unit"],
            renderedFormatOptions
          )}
          {renderCurrencyOptions(renderedFormatOptions)}
          {renderUnitOptions(renderedFormatOptions)}
        </calcite-tip>
        <div style="display: flex; flex-direction: column; width: 500px;">
          <calcite-tip heading="Code" nonDismissible>
            {highlight("javascript", formattedSnippet)}
            <calcite-button
              appearance="outline"
              icon-start="copyToClipboard"
              color="light"
              scale="s"
              onclick={() => copyToClipboard(formattedSnippet)}
            >
              Copy to clipboard
            </calcite-button>
          </calcite-tip>
          <calcite-tip dir="ltr" heading="Result" nonDismissible>
            <p style="font-size: xx-large;">{formattedDate}</p>
          </calcite-tip>
          <calcite-tip dir="ltr" heading="Learn More" nonDismissible>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat"
            >
              <code>Intl.NumberFormat</code> on MDN
            </a>
          </calcite-tip>
        </div>
      </div>
    </calcite-shell>
  );
}

function renderLocaleSelect() {
  return (
    <calcite-label key="locale">
      Locale
      <calcite-select
        scale="s"
        afterCreate={afterCreateEventHandler(
          "calciteSelectChange",
          (event: any) => {
            formatLocale = event.target.selectedOption.value;
            projector.scheduleRender();
          }
        )}
      >
        {Array.from(locales, (locale) => (
          <calcite-option
            label={locale}
            value={locale}
            selected={formatLocale === locale}
          ></calcite-option>
        ))}
      </calcite-select>
    </calcite-label>
  );
}

function renderNumberInput<K extends keyof Intl.NumberFormatOptions>(
  property: K,
  min: number,
  max: number,
  options: Intl.NumberFormatOptions
) {
  return (
    <calcite-label key={property}>
      {property}
      <calcite-slider
        afterCreate={afterCreateEventHandler("calciteSliderUpdate", (e) => {
          updateFormatOptions({
            [property]: (e.target as HTMLInputElement).value,
          });
        })}
        min={min}
        max={max}
        value={"" + options[property]}
        page-step="1"
        step="1"
        snap
      ></calcite-slider>
    </calcite-label>
  );
}

function renderRangeInput<
  K1 extends keyof Intl.NumberFormatOptions,
  K2 extends keyof Intl.NumberFormatOptions
>(
  label: string,
  minProperty: K1,
  maxProperty: K2,
  min: number,
  max: number,
  options: Intl.NumberFormatOptions
) {
  return (
    <calcite-label key={label}>
      {label}
      <calcite-slider
        afterCreate={afterCreateEventHandler("calciteSliderUpdate", (e) => {
          updateFormatOptions({
            [minProperty]: (e.target as any).minValue,
            [maxProperty]: (e.target as any).maxValue,
          });
        })}
        min={min}
        max={max}
        min-value={"" + options[minProperty]}
        max-value={"" + options[maxProperty]}
        page-step="1"
        step="1"
        snap
      ></calcite-slider>
    </calcite-label>
  );
}

function renderCurrencyOptions(options: Intl.NumberFormatOptions) {
  if (options.style !== "currency") {
    return <div key="currency" style="display: none"></div>;
  }

  return (
    <div
      key="currency"
      style="display: flex; flex-direction: column; padding: 12px; border: 1px solid var(--calcite-ui-border-2)"
    >
      <calcite-label>
        currency
        <calcite-select
          scale="s"
          afterCreate={afterCreateEventHandler(
            "calciteSelectChange",
            (event: any) => {
              updateFormatOptions({
                currency: event.target.selectedOption.value,
              });
            }
          )}
        >
          {currencies.map(({ code, name }) => (
            <calcite-option
              label={`${code} - ${name}`}
              value={code}
              selected={formatOptions.currency === code}
            ></calcite-option>
          ))}
        </calcite-select>
      </calcite-label>
      {renderRadioButtonGroup(
        "currencyDisplay",
        ["symbol", "narrowSymbol", "code", "name"],
        options
      )}
      {renderRadioButtonGroup(
        "currencySign",
        ["standard", "accounting"],
        options
      )}
    </div>
  );
}

function renderUnitOptions(options: Intl.NumberFormatOptions) {
  if (options.style !== "unit") {
    return <div key="unit" style="display: none"></div>;
  }

  return (
    <div
      key="unit"
      style="display: block; padding: 12px; border: 1px solid var(--calcite-ui-border-2)"
    >
      <calcite-label>
        Unit
        <calcite-select
          scale="s"
          afterCreate={afterCreateEventHandler(
            "calciteSelectChange",
            (event: any) => {
              updateFormatOptions({
                unit: event.target.selectedOption.value,
              });
            }
          )}
        >
          {units.map((unit) => (
            <calcite-option
              label={unit}
              value={unit}
              selected={formatOptions.unit === unit}
            ></calcite-option>
          ))}
        </calcite-select>
      </calcite-label>
      {renderRadioButtonGroup(
        "unitDisplay",
        ["long", "short", "narrow"],
        options
      )}
    </div>
  );
}

function renderRadioButtonGroup<K extends keyof Intl.NumberFormatOptions>(
  property: K,
  values: string[],
  formatOptions: Intl.NumberFormatOptions
) {
  return (
    <calcite-label key={property}>
      {property}
      <calcite-radio-group afterCreate={radioHandler(property)} scale="s">
        {values.map((value) => {
          const checked =
            formatOptions[property] ===
            (value === "none" || value === "auto" ? undefined : value);
          return (
            <calcite-radio-group-item value={value} checked={checked}>
              {value}
            </calcite-radio-group-item>
          );
        })}
      </calcite-radio-group>
    </calcite-label>
  );
}

function radioHandler<K extends keyof Intl.NumberFormatOptions>(prop: K) {
  return afterCreateEventHandler("calciteRadioGroupChange", (event: any) => {
    updateFormatOptions({
      [prop]: event.detail,
    });
  });
}

function updateFormatOptions(options: Partial<Intl.NumberFormatOptions>) {
  Object.assign(formatOptions, options);
  projector.scheduleRender();
}

function getFormatSnippet(
  locale: string,
  options: Partial<Intl.NumberFormatOptions>
) {
  return `new Intl.NumberFormat('${locale}', {
${Object.keys(options)
  .map((key) => {
    if (typeof options[key as keyof Intl.NumberFormatOptions] === "string") {
      return `  ${key}: '${options[key as keyof Intl.NumberFormatOptions]}'`;
    } else {
      return `  ${key}: ${options[key as keyof Intl.NumberFormatOptions]}`;
    }
  })
  .join(",\n")}
})`;
}

function copyToClipboard(newClip: string) {
  const input = document.createElement("textarea");
  input.innerText = newClip;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

function getFormattedDate(
  locale: string,
  options: Partial<Intl.NumberFormatOptions>
) {
  try {
    return new Intl.NumberFormat(locale, options).format(numberToFormat);
  } catch {
    return "";
  }
}

const projector = createProjector();
projector.append(document.body, render);
