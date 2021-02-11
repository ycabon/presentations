import { startRendering, jsx, scheduleRender } from "../utils/rendering";
import { onLocaleChange, getLocale } from "../utils/locale";

const availableLocales = new Set<string>(["en", "fr"]);

interface Messages {
  helloWorld: string;
}

class Application {
  constructor(params: Pick<Application, "container">) {
    this.container = params.container;

    // Fetch message bundles a first time
    this.updateMessageBundles().then(() => {
      // Kick off rendering
      startRendering(this.container, this.render.bind(this));

      // Update on each locale change
      onLocaleChange(() =>
        this.updateMessageBundles().then(() => scheduleRender())
      );
    });
  }

  container: Element;

  messages!: Messages;

  private async updateMessageBundles() {
    let language = getLocale().split("-")[0];

    if (!availableLocales.has(language)) {
      language = "en";
    }

    const response = await fetch(`./messages/${language}.json`);
    const json = await response.json();

    this.messages = json;

    scheduleRender();
  }

  render() {
    return (
      <div>
        <p>{this.messages.helloWorld}</p>
      </div>
    );
  }
}

export default Application;
