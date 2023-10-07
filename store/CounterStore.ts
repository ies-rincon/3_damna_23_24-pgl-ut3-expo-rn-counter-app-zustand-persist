import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCounterStore = create<CounterStoreType>()(
  persist(
    (set) => ({
      clickCounter: 0,
      handleRefresh: () => set((_) => ({ clickCounter: 0 })),
      handleIncrement: () =>
        set((state) => ({ clickCounter: state.clickCounter + 1 })),
      handleDecrement: () =>
        set((state) => ({ clickCounter: state.clickCounter - 1 })),
    }),
    { name: "counterStore", storage: createJSONStorage(() => AsyncStorage) }
  )
);
