import { JSX } from "react";

export type TerminalInputs = JSX.Element[];

export interface TerminalAction {
  type: "write" | "read" | "clear" | "writeError";
  payload?: {
    prompt?: string;
    content: string | JSX.Element;
    line?: number;
  };
}
