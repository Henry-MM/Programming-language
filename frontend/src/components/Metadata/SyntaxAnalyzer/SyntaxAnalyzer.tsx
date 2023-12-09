import { useEffect, useState } from "react";
import "./SyntaxAnalyzer.css";
import { useCodeEditorContext } from "../../../contexts/CodeEditorContext";
import { parseTree } from "../../../helpers/SyntaxAnalyzer";
import { TreeNode } from "../../../types/SyntaxTree";
import SytaxTree from "../../UI/SytaxTree";
import DefaultText from "../DefaultText";

function SyntaxAnalyzer() {
  const codeEditor = useCodeEditorContext();
  const [treesData, setTreesData] = useState<TreeNode[]>([]);

  useEffect(() => {
    codeEditor?.compilerResults.forEach(({ tree }) =>
      setTreesData((state: TreeNode[]) => [
        ...state,
        parseTree(tree) as TreeNode,
      ])
    );

    return () => {
      setTreesData([]);
    };
  }, [codeEditor.compilerResults]);

  return (
    <div className="h-full w-full divide-y">
      {treesData.length ? (
        treesData.map((treeData) => (
          <SytaxTree
            data={treeData}
            orientation="vertical"
            pathFunc="straight"
            translate={{ x: 190, y: 40 }}
            rootNodeClassName="node__root"
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"
          />
        ))
      ) : (
        <DefaultText>Tree not found</DefaultText>
      )}
    </div>
  );
}

export default SyntaxAnalyzer;
