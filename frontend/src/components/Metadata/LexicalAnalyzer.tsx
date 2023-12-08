import React from "react";
import { useCodeEditorContext } from "../../contexts/CodeEditorContext";
import CompResultLine from "../UI/CompResultLine";

function LexicalAnalyzer() {
  const codeEditor = useCodeEditorContext();

  return (
    <div className="px-5 flex flex-col divide-y divide-dotted">
      {codeEditor.compilerResults.map((result) => (
        <CompResultLine
          key={result.line}
          line={result.line}
          tokens={result.tokens}
        />
      ))}
    </div>
  );
}

export default LexicalAnalyzer;
