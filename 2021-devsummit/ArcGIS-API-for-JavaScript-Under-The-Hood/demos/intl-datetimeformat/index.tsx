import { createProjector } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";
import { highlight } from "../utils/highlight";

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

// Date to format
const date = Date.UTC(2020, 2, 2, 22, 0, 0, 0);

// Initial selected locale
let formatLocale: string = "en-US";

// Initial selected options
let formatOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

//Renders the application content
function render() {
  const renderedFormatOptions: Intl.DateTimeFormatOptions = {
    ...formatOptions,
  };

  const keys = Object.keys(
    formatOptions
  ) as (keyof Intl.DateTimeFormatOptions)[];

  for (const key of keys) {
    if (formatOptions[key] === "none" || formatOptions[key] === "auto") {
      delete renderedFormatOptions[key as keyof Intl.DateTimeFormatOptions];
    }
  }

  const formattedSnippet = getFormatSnippet(
    formatLocale,
    renderedFormatOptions
  );
  const formattedDate = getFormattedDate(formatLocale, renderedFormatOptions);

  return (
    <div style="width: 100%; height: 100%; display: flex; flex-direction: row; justify-content: space-around; align-items: center">
      <calcite-tip heading="Intl.DateTimeFormat" theme="light" nonDismissible>
        {/* <div style="background: white; padding: 12px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3)"> */}
        {renderLocaleSelect()}
        {renderRadioButtonGroup(
          "weekday",
          ["none", "long", "short", "narrow"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "era",
          ["none", "long", "short", "narrow"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "year",
          ["none", "numeric", "2-digit"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "month",
          ["none", "numeric", "2-digit", "long", "short", "narrow"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "day",
          ["none", "numeric", "2-digit"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "hour",
          ["none", "numeric", "2-digit"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "minute",
          ["none", "numeric", "2-digit"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "second",
          ["none", "numeric", "2-digit"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "timeZoneName",
          ["none", "long", "short"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "hour12",
          ["auto", "true", "false"],
          renderedFormatOptions
        )}
      </calcite-tip>
      <div style="display: flex; flex-direction: column;">
        <calcite-tip heading="Code" theme="light" nonDismissible>
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
        <calcite-tip dir="ltr" heading="Result" theme="light" nonDismissible>
          <p style="font-size: xxx-large;">{formattedDate}</p>
        </calcite-tip>
        <calcite-tip
          dir="ltr"
          heading="Learn More"
          theme="light"
          nonDismissible
        >
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat"
          >
            <code>Intl.DateTimeFormat</code> on MDN
          </a>
        </calcite-tip>
      </div>
    </div>
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

function renderRadioButtonGroup<K extends keyof Intl.DateTimeFormatOptions>(
  property: K,
  values: string[],
  formatOptions: Intl.DateTimeFormatOptions
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

function radioHandler<K extends keyof Intl.DateTimeFormatOptions>(prop: K) {
  return afterCreateEventHandler("calciteRadioGroupChange", (event: any) => {
    updateFormatOptions({
      [prop]: event.detail,
    });
  });
}

function updateFormatOptions(options: Partial<Intl.DateTimeFormatOptions>) {
  Object.assign(formatOptions, options);
  projector.scheduleRender();
}

function getFormatSnippet(
  locale: string,
  options: Partial<Intl.DateTimeFormatOptions>
) {
  return `new Intl.DateTimeFormat('${locale}', {
${Object.keys(options)
  .map(
    (key) => `  ${key}: '${options[key as keyof Intl.DateTimeFormatOptions]}'`
  )
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
  options: Partial<Intl.DateTimeFormatOptions>
) {
  try {
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch {
    return "";
  }
}

const projector = createProjector();
projector.append(document.body, render);
