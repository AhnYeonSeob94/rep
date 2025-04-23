import { create } from 'zustand';

const useLanguageStore = create((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLanguageStore;