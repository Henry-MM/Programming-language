import { useCodeEditorContext } from "../../contexts/CodeEditorContext";
import DefaultText from "./DefaultText";

function Raw() {
  const codeEditor = useCodeEditorContext();

  return (
    <div>
      {codeEditor.compilerResults.length ? (
        <pre>
          <code>{JSON.stringify(codeEditor.compilerResults, null, 3)}</code>
        </pre>
      ) : (
        <DefaultText>Data no found</DefaultText>
      )}
    </div>
  );
}

export default Raw;
