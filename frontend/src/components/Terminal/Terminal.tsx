import Terminal, { ColorMode } from "react-terminal-ui";
import {
  useTerminalContext,
  useTerminalDispatchContext,
} from "../../contexts/TerminalContext";

import "./Terminal.css";

function Term() {
  const terminaCtx = useTerminalContext();
  const terminalDispatcher = useTerminalDispatchContext()!;

  const onInputHandler = (input: string) => {
    terminalDispatcher({ type: "read", payload: { content: input } });

    if (input == "clear" || input == "cls")
      terminalDispatcher({ type: "clear" });
  };

  return (
    <div id="terminal" className="h-full p-4 bg-[#252a33] text-[#eee]">
      <Terminal colorMode={ColorMode.Dark} prompt="$" onInput={onInputHandler}>
        {terminaCtx}
      </Terminal>
    </div>
  );
}

export default Term;
