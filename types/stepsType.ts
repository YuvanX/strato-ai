export type Steps = {
    id: number;
    title: string;
    content: string;
    type: StepType;
    status: Status;
}

export type StepStore = {
    steps: Steps[],
    addStep: (step: Steps) => void;
    updateStep: (id: number, updateFeild: Partial<Steps>) => void,
    reset: () => void 
    setState: (s: Steps[]) => void
}

export enum StepType  {
    CreateFile,
    EditFile,
    DeleteFile,
    CreateFolder,
    RunScript
}

export enum Status {
    Pending,
    Processing,
    Completed
}