export type MonacoEditorProps = {
    value: string;
    language: string;
    onChange: (value: string | undefined) => void;
}