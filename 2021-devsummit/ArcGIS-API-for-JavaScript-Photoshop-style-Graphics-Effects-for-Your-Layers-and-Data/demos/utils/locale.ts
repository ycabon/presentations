let currentLocale = "en-US";

export function getLocale(): string {
  return currentLocale;
}

export function setLocale(locale: string) {
  if (currentLocale !== locale) {
    currentLocale = locale;
    for (const handler of localeChangeHandlers) {
      handler();
    }
  }
}

const localeChangeHandlers = new Set<() => void>();

export function onLocaleChange(callback: () => void): { remove: () => void } {
  localeChangeHandlers.add(callback);
  return {
    remove() {
      localeChangeHandlers.delete(callback);
    },
  };
}
