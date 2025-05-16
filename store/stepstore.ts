import { Steps, StepStore } from "@/types/steps";
import { create } from "zustand";

export const useStepStore = create<StepStore>((set) => ({
    steps: [],
    addStep: (step) => set((state) => ({
        steps: [...state.steps, step]
    })),
    updateStep: (id, updateField) => set((state) => ({
        steps: state.steps.map((step) => step.id === id ? {...step, ...updateField } : step)
    })),
    reset: () => set({steps: []}),
    setState: (s: Steps[]) => set({steps: s})
})) 