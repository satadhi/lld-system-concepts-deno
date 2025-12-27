type SupportedLocale = "en" | "es" | "de";
const translations: Record<SupportedLocale, string> = {
  en: "Settings",
  es: "Configuración",
  de: "Einstellungen",
};

console.log(translations.en);
