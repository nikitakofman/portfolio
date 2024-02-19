import { create } from "zustand";

const useStore = create((set) => ({
  language: {
    en: true,
    fr: false,
  },
  //@ts-ignore
  toggleLanguage: (lang) =>
    set((state) => ({
      language: {
        ...state.language,
        en: lang === "en",
        fr: lang === "fr",
      },
    })),
}));

export default useStore;
