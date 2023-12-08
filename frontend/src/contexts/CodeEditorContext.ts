import { Dispatch, createContext, useContext } from "react";
import { CodeEditor, CodeEditorAction } from "../types/CodeEditor";

// Context Value
export const CodeEditorContext = createContext<CodeEditor>({
  rawCode: "",
  codeByLines: [],
  compilerResults: [],
});

export const useCodeEditorContext = function () {
  return useContext(CodeEditorContext);
};

// Context actions
export const CodeEditorDispatchContext =
  createContext<Dispatch<CodeEditorAction> | null>(null);

export const useCodeEditorDispatchContext = function () {
  return useContext(CodeEditorDispatchContext);
};
