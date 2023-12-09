import { FaPlay } from "react-icons/fa";
import { compileOneLine, resetCompiler } from "../services/compiler";
import { useTerminalDispatchContext } from "../contexts/TerminalContext";
import {
  useCodeEditorContext,
  useCodeEditorDispatchContext,
} from "../contexts/CodeEditorContext";
import { useState } from "react";
import LoaderSpinner from "./UI/LoaderSpinner";

function CompileButton() {
  const codeEditor = useCodeEditorContext();
  const codeEditorDispatch = useCodeEditorDispatchContext()!;
  const terminalDispatcher = useTerminalDispatchContext()!;
  const [isCompiling, setIsCompiling] = useState(false);

  const onClickHandler = async () => {
    // terminalDispatcher({
    //   type: "write",
    //   payload: { content: "Compiling your code..." },
    // });

    setIsCompiling(true);

    // Reset compiler results
    codeEditorDispatch({
      type: "resetCompilerResult",
      payload: {},
    });

    for (const lineOfCode of codeEditor?.codeByLines ?? []) {
      const result = await compileOneLine(lineOfCode);

      // Save only if there are tokens
      if (result?.tokens.length) {
        codeEditorDispatch({
          type: "saveCompilerResult",
          payload: { compilerResults: [result!] },
        });
      }

      // If error happened,
      if (result?.isSuccess === false) {
        terminalDispatcher({
          type: "writeError",
          payload: {
            content: result.output ?? "Check your code",
            line: result.line,
          },
        });

        break;
      }

      // If output should appear on the terminal
      if (result?.output !== undefined && result?.output !== null) {
        terminalDispatcher({
          type: "read",
          payload: { content: result.output },
        });
      }
    }

    // terminalDispatcher({
    //   type: "write",
    //   payload: { content: "Compilation finish" },
    // });
    setIsCompiling(false);
    resetCompiler();
  };

  return (
    <button
      type="button"
      className="
        flex 
        items-center
        justify-center
        gap-2 
        bg-btn-yellow
        hover:bg-btn-yellow-hover
        text-btn-blue
        font-bold 
        py-2 
        px-4 
        rounded
        disabled:bg-[#FFFDE7]
        disabled:text-[#687597]
        disabled:hover:cursor-wait
      "
      disabled={isCompiling}
      onClick={onClickHandler}
    >
      <span>Run</span>
      {isCompiling ? <LoaderSpinner /> : <FaPlay />}
    </button>
  );
}

export default CompileButton;
