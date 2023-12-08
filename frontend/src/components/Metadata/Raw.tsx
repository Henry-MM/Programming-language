import React from "react";
import { useCodeEditorContext } from "../../contexts/CodeEditorContext";

function Raw() {
  const codeEditor = useCodeEditorContext();

  return (
    <div>
      {codeEditor.rawCode ? (
        <pre>
          <code>{JSON.stringify(codeEditor.compilerResults, null, 3)}</code>
        </pre>
      ) : (
        ""
      )}
    </div>
  );
}

export default Raw;
