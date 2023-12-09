import { useCodeEditorContext } from "../../contexts/CodeEditorContext";
import CompResultLine from "../UI/CompResultLine";
import DefaultText from "./DefaultText";

function LexicalAnalyzer() {
  const codeEditor = useCodeEditorContext();

  return (
    <div className="px-5 flex flex-col divide-y divide-dotted">
      {codeEditor.compilerResults.length ? (
        codeEditor.compilerResults.map((result) => (
          <CompResultLine
            key={result.line}
            line={result.line}
            tokens={result.tokens}
          />
        ))
      ) : (
        <DefaultText className="px-0">Tokens not found</DefaultText>
      )}
    </div>
  );
}

export default LexicalAnalyzer;
