import { Steps, StepStore } from "@/types/steps";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStepStore = create<StepStore>()(
  persist(
    (set) => ({
      steps: [],
      addStep: (step) =>
        set((state) => ({
          steps: [...state.steps, step],
        })),
      updateStep: (id, updateField) =>
        set((state) => ({
          steps: state.steps.map((step) =>
            step.id === id ? { ...step, ...updateField } : step
          ),
        })),
      reset: () => set({ steps: [] }),
      setState: (s: Steps[]) => set({ steps: s }),
    }),
    { name: "step-store" }
  )
);
