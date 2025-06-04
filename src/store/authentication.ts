"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCounterStore = create<STORE.CounterStore>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => {
        set((state) => ({ count: state.count + 1 }));
      },
      incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({ count: state.count + 1 }));
      },
      decrement: () => {
        set((state) => ({ count: state.count - 1 }));
      },
    }),
    {
      name: "auth", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    }
  )
);
