import { Reducer } from "react";
import { TerminalInput, TerminalOutput } from "react-terminal-ui";
import { TerminalAction, TerminalInputs } from "../types/Terminal";

const terminalReducer: Reducer<TerminalInputs, TerminalAction> = function (
  state,
  action
) {
  switch (action.type) {
    case "write": {
      return [
        ...state,
        <TerminalOutput>{action?.payload?.content}</TerminalOutput>,
      ];
    }

    case "read": {
      return [
        ...state,
        <TerminalInput prompt={action?.payload?.prompt ?? "$"}>
          {action?.payload?.content ?? ""}
        </TerminalInput>,
      ];
    }

    case "clear": {
      return [];
    }

    default:
      return state;
  }
};

export default terminalReducer;
