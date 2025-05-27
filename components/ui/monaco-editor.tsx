import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

interface EditorProps {
  value: string;
  language: string;
  onChange: (value: string) => void;
}

export const Editor = ({ value, language, onChange }: EditorProps) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !editorRef.current) {
     
      editorRef.current = monaco.editor.create(containerRef.current, {
        value: value,
        language: language,
        theme: 'vs-dark',
        automaticLayout: false,
      });

      
      editorRef.current.onDidChangeModelContent(() => {
        if (editorRef.current) {
          onChange(editorRef.current.getValue());
        }
      });
    }
  }, []);

 
  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.getValue()) {
      editorRef.current.setValue(value);
    }
  }, [value]);

  
  useEffect(() => {
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, language);
      }
    }
  }, [language]);

  return <div ref={containerRef} style={{height: 820}} className='rounded-br-2xl overflow-hidden'/>;
};