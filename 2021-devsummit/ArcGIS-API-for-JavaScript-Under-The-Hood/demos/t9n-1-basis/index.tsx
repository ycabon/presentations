import { afterCreateEventHandler } from "../utils/events";
import { startRendering, jsx } from "../utils/rendering";
import Application from "./Application";
import { getLocale, setLocale } from "../utils/locale";

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

setLocale("en-US");

//Renders the application content
function render() {
  return (
    <calcite-shell dir="ltr" theme="light">
      <header slot="shell-header">
        <h2 style="margin-left: 30px">Translation</h2>
      </header>
      <div style="background-color: #f0f0f0; width: 100%; height: 100%; display: flex; flex-direction: row; justify-content: center; align-items: flex-start">
        <calcite-tip
          style="display: flex; flex-direction: column; width: 380px;"
          heading="Options"
          nonDismissible
        >
          {renderLocaleSelect()}
        </calcite-tip>
        <div style="display: flex; flex-direction: column; width: 500px;">
          <calcite-tip heading="Result" nonDismissible>
            <div afterCreate={(el) => new Application({ container: el })}></div>
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
            setLocale(event.target.selectedOption.value);
          }
        )}
      >
        {Array.from(locales, (locale) => (
          <calcite-option
            label={locale}
            value={locale}
            selected={getLocale() === locale}
          ></calcite-option>
        ))}
      </calcite-select>
    </calcite-label>
  );
}

startRendering(document.body, render);
