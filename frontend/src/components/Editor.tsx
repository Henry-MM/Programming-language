import ReactCodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import {
  useCodeEditorContext,
  useCodeEditorDispatchContext,
} from "../contexts/CodeEditorContext";
import { LineOfCode } from "../types/CodeEditor";
import { useEffect } from "react";

const defaultaPayload = {
  codeByLines: [
    {
      line: 1,
      code: "# Here you have a good looking editor to try our Pumita language, have fun ^-^$",
    },
    {
      line: 2,
      code: "",
    },
    {
      line: 3,
      code: "# ==== Supported operators ===$",
    },
    {
      line: 4,
      code: "# Asignation: =$",
    },
    {
      line: 5,
      code: "# Addition: +$",
    },
    {
      line: 6,
      code: "# Subtraction: -$",
    },
    {
      line: 7,
      code: "# Multiplication: *$",
    },
    {
      line: 8,
      code: "# Division: /$",
    },
    {
      line: 9,
      code: "# Concatenation: .$",
    },
    {
      line: 10,
      code: "# Repetition (for strings): *$",
    },
    {
      line: 11,
      code: "# Print in console: print$",
    },
    {
      line: 12,
      code: "# clear or cls (just in console)$",
    },
    {
      line: 13,
      code: "# =============================$",
    },
  ],
  rawCode:
    "# Here you have a good looking editor to try our Pumita language, have fun ^-^\n\n# ==== Supported operators ===\n# Asignation: =\n# Addition: +\n# Subtraction: -\n# Multiplication: *\n# Division: /\n# Concatenation: .\n# Repetition (for strings): *\n# Print in console: print\n# clear or cls (just in console)\n# =============================",
};

function Editor() {
  const codeEditor = useCodeEditorContext();
  const codeEditorDispatch = useCodeEditorDispatchContext();

  const onChange = (value: string) => {
    const codeArray = value.split("\n");
    const linesOfCode: LineOfCode[] = codeArray.map((value, i) => ({
      line: i + 1,
      code: value.trim() ? value.trim() + "$" : "",
    }));

    if (codeEditorDispatch)
      codeEditorDispatch({
        type: "saveCode",
        payload: {
          codeByLines: linesOfCode,
          rawCode: value,
        },
      });
  };

  useEffect(() => {
    if (codeEditorDispatch && defaultaPayload.rawCode)
      codeEditorDispatch({
        type: "saveCode",
        payload: defaultaPayload,
      });
  }, []);

  return (
    <div id="editor" className="p-2 overflow-auto text-base">
      <ReactCodeMirror
        height="100%"
        width="100%"
        className="h-full"
        value={codeEditor.rawCode}
        extensions={[python()]}
        onChange={onChange}
        theme={"dark"}
        placeholder={
          "Type some code in this good looking editor, click the run button and see the magic ✨"
        }
      />
    </div>
  );
}

export default Editor;
