import { Reducer } from "react";
import { CodeEditor, CodeEditorAction } from "../types/CodeEditor";

const codeEditorReducer: Reducer<CodeEditor, CodeEditorAction> = function (
  state,
  actions
) {
  switch (actions.type) {
    case "saveCode": {
      return {
        ...state,
        rawCode: actions.payload.rawCode ?? state.rawCode,
        codeByLines: actions.payload.codeByLines ?? state.codeByLines,
      };
    }

    case "saveCompilerResult": {
      return {
        ...state,
        compilerResults: [
          ...state.compilerResults,
          ...actions.payload.compilerResults!,
        ],
      };
    }

    case "resetCompilerResult": {
      return {
        ...state,
        compilerResults: [],
      };
    }

    default:
      return state;
  }
};

export default codeEditorReducer;
