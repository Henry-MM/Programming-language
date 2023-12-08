import React from "react";
import Tree from "react-d3-tree";
import "./SyntaxAnalyzer.css";
import { useCodeEditorContext } from "../../../contexts/CodeEditorContext";

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

  console.log(codeEditor?.compilerResults);

  // console.log(
  //   codeEditor?.compilerResults?.[0]?.tree?.flatMap((value) => {
  //     console.log(value);
  //     return value;
  //   })
  // );

  // console.log("h", codeEditor?.compilerResults?.[0]?.tree?.flat(2));

  // console.log("wat", parseDataToTree(codeEditor?.compilerResults?.[0]?.tree));

  return (
    <div className="h-full w-full divide-y">
      <div className="h-full">
        <Tree
          data={orgChart}
          orientation="vertical"
          pathFunc="straight"
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
        />
      </div>
    </div>
  );
}

export default SyntaxAnalyzer;
