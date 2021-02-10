import { createProjector } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "./events";

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

const date = Date.UTC(2021, 0, 6, 12, 0, 0, 0);

let formatLocale: string = "en-US";

let formatOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "numeric",
};

function updateFormatOptions(options: Partial<Intl.DateTimeFormatOptions>) {
  Object.assign(formatOptions, options);
  projector.scheduleRender();
}

function getFormattedDate(locale: string, options: Partial<Intl.DateTimeFormatOptions>) {
  try {
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch {
    return "";
  }
}

function render() {
  const renderedFormatOptions: Intl.DateTimeFormatOptions = {
    ...formatOptions,
  };

  for (const key of Object.keys(formatOptions)) {
    if (formatOptions[key as keyof Intl.DateTimeFormatOptions] === "none") {
      delete renderedFormatOptions[key as keyof Intl.DateTimeFormatOptions];
    }
  }

  return (
    <div style="width: 100%; height: 100%; display: flex; flex-direction: row; justify-content: space-around; align-items: center">
      <div style="padding: 12px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3)">
        {renderLocaleSelect()}
        {renderRadioButtonGroup(
          "day",
          ["none", "numeric", "2-digit"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "month",
          ["none", "numeric", "2-digit", "long", "short", "narrow"],
          renderedFormatOptions
        )}
        {renderRadioButtonGroup(
          "year",
          ["none", "numeric", "2-digit"],
          renderedFormatOptions
        )}
      </div>
      <div style="padding: 12px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">
        <p style="font-size: xxx-large;">{getFormattedDate(formatLocale, renderedFormatOptions)}</p>
      </div>
    </div>
  );
}

function renderLocaleSelect() {
  return (
    <calcite-select
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
      <calcite-radio-group afterCreate={radioHandler(property)}>
        {values.map((value) => {
          return (
            <calcite-radio-group-item
              value={value}
              checked={formatOptions[property] === value}
            >
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

const projector = createProjector();
projector.append(document.body, render);
