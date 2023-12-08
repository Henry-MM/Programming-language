import { FaPlay } from "react-icons/fa";
import { compileOneLine, resetCompiler } from "../services/compiler";
import { useTerminalDispatchContext } from "../contexts/TerminalContext";
import {
  useCodeEditorContext,
  useCodeEditorDispatchContext,
} from "../contexts/CodeEditorContext";

function CompileButton() {
  const codeEditor = useCodeEditorContext();
  const codeEditorDispatch = useCodeEditorDispatchContext()!;
  const terminalDispatcher = useTerminalDispatchContext()!;

  const onClickHandler = async () => {
    // terminalDispatcher({
    //   type: "write",
    //   payload: { content: "Compiling your code..." },
    // });

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
          type: "read",
          payload: {
            content: result.output ?? "Compiler Error",
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

    resetCompiler();
  };

  return (
    <button
      type="button"
      className="flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClickHandler}
    >
      <span>Run</span>
      <FaPlay />
    </button>
  );
}

export default CompileButton;
