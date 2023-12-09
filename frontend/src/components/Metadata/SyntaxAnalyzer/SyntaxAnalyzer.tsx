import React, { useEffect, useState } from "react";
import "./SyntaxAnalyzer.css";
import { useCodeEditorContext } from "../../../contexts/CodeEditorContext";
import { parseTree } from "../../../helpers/SyntaxAnalyzer";
import { TreeNode } from "../../../types/SyntaxTree";
import SytaxTree from "../../UI/SytaxTree";

const orgChart = {
  name: "print",
  children: [
    {
      name: "+",
      children: [
        {
          name: "1",
        },
        {
          name: "-",
          children: [
            {
              name: "1",
            },
            {
              name: "*",
              children: [{ name: "2" }, { name: "5" }],
            },
          ],
        },
      ],
    },
  ],
};

function SyntaxAnalyzer() {
  const codeEditor = useCodeEditorContext();
  const [treesData, setTreesData] = useState<TreeNode[]>([]);

  console.log(codeEditor?.compilerResults);

  if (codeEditor?.compilerResults?.[0]?.tree)
    console.log(":0", parseTree(codeEditor?.compilerResults?.[0].tree));

  // console.log(
  //   codeEditor?.compilerResults?.[0]?.tree?.flatMap((value) => {
  //     console.log(value);
  //     return value;
  //   })
  // );

  // console.log("h", codeEditor?.compilerResults?.[0]?.tree?.flat(2));

  // console.log("wat", parseDataToTree(codeEditor?.compilerResults?.[0]?.tree));

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

  // useEffect(() => {
  //   const ID = setTimeout(() => {
  //     setSecond((state) => ({ ...state, pao: "cosita hermosa" }));
  //   }, 5000);

  //   return () => {
  //     clearTimeout(ID);
  //   };
  // }, []);

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
        <h3 className="p-4">Tree not available</h3>
      )}
    </div>
  );
}

export default SyntaxAnalyzer;
