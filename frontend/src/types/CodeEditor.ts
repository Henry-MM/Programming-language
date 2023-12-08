import { CompilerResult } from "./Compiler";

export interface LineOfCode {
  line: number;
  code: string;
}

export interface CodeEditor {
  rawCode: string;
  codeByLines: LineOfCode[];
  compilerResults: CompilerResult[];
}

export interface CodeEditorAction {
  type: "saveCode" | "saveCompilerResult" | "resetCompilerResult";
  payload: Partial<CodeEditor>;
}
