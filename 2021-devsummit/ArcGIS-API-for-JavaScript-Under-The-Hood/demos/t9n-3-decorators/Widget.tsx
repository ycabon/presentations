import { scheduleRender, startRendering } from "../utils/rendering";
import { getLocale, onLocaleChange } from "../utils/locale";
import { VNode } from "maquette";

const availableLocales = new Set<string>(["en", "fr"]);

export default abstract class Widget {
  constructor(params: Pick<Widget, "container">) {
    this.container = params.container;

    // Add a Promise.resolve() to trigger the loading after
    // subclasses initializes.
    Promise.resolve().then(async () => {
      // Fetch message bundles a first time
      await this.updateMessageBundles();

      // Kick off rendering
      startRendering(this.container, this.render.bind(this));

      // Update on each locale change
      onLocaleChange(() =>
        this.updateMessageBundles().then(() => scheduleRender())
      );
    });
  }

  bundlesInfo!: { property: string; bundleName: string }[];

  container: Element;

  abstract render(): VNode;

  private async updateMessageBundles() {
    let language = getLocale().split("-")[0];

    if (!availableLocales.has(language)) {
      language = "en";
    }

    await Promise.allSettled(
      this.bundlesInfo.map(async ({ property, bundleName }) => {
        const response = await fetch(
          `./messages/${bundleName}-${language}.json`
        );
        const json = await response.json();
        Object.assign(this, {
          [property]: json,
        });
      })
    );

    scheduleRender();
  }
}
