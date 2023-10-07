import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useLanguageStore = create<LanguageStoreType>()(
  persist(
    (set, get) => ({
      languageApp: "es",
      changeLanguageApp: () => {
        const { languageApp } = get();
        if (languageApp === "es") {
          set({ languageApp: "en" });
        } else {
          set({ languageApp: "es" });
        }
      },
    }),
    { name: "languageStore", storage: createJSONStorage(() => AsyncStorage) }
  )
);
