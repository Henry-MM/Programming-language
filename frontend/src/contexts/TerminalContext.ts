import { Dispatch, createContext, useContext } from "react";
import { TerminalAction, TerminalInputs } from "../types/Terminal";

// Context Value
export const TerminalContext = createContext<TerminalInputs>([]);

export const useTerminalContext = function () {
  return useContext(TerminalContext);
};

// Content Dispatch/Actions
export const TerminalDispatchContext =
  createContext<Dispatch<TerminalAction> | null>(null);

export const useTerminalDispatchContext = function () {
  return useContext(TerminalDispatchContext);
};
