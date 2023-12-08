import { PropsWithChildren, useReducer } from "react";
import {
  TerminalContext,
  TerminalDispatchContext,
  useTerminalContext,
} from "../contexts/TerminalContext";
import terminalReducer from "../reducers/TerminalReducer";

export const TerminalProvider = function ({ children }: PropsWithChildren) {
  const initialValue = useTerminalContext();
  const [value, dispatcher] = useReducer(terminalReducer, initialValue);

  return (
    <TerminalContext.Provider value={value}>
      <TerminalDispatchContext.Provider value={dispatcher}>
        {children}
      </TerminalDispatchContext.Provider>
    </TerminalContext.Provider>
  );
};
