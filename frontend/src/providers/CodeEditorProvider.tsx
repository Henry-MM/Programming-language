import { PropsWithChildren, useReducer } from "react";
import {
  CodeEditorContext,
  CodeEditorDispatchContext,
  useCodeEditorContext,
} from "../contexts/CodeEditorContext";
import codeEditorReducer from "../reducers/CodeEditorReducer";

export const CodeEditorProvider = function ({ children }: PropsWithChildren) {
  const initialState = useCodeEditorContext();
  const [state, dispatch] = useReducer(codeEditorReducer, initialState);

  return (
    <CodeEditorContext.Provider value={state}>
      <CodeEditorDispatchContext.Provider value={dispatch}>
        {children}
      </CodeEditorDispatchContext.Provider>
    </CodeEditorContext.Provider>
  );
};
