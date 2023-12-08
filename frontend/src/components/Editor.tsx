import ReactCodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { useCodeEditorDispatchContext } from "../contexts/CodeEditorContext";
import { LineOfCode } from "../types/CodeEditor";

function Editor() {
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

  return (
    <div id="editor" className="p-2 overflow-auto">
      <ReactCodeMirror
        height="100%"
        width="100%"
        className="h-full"
        extensions={[python()]}
        onChange={onChange}
        theme={"dark"}
        placeholder={
          "Here you have a good looking editor to try our super language, have fun ^-^"
        }
      />
    </div>
  );
}

export default Editor;
