import Tree from "react-d3-tree";
import { TreeNode } from "../../types/SyntaxTree";

type Props = {
  data: TreeNode;
  orientation?: "vertical" | "horizontal";
  pathFunc?: "diagonal" | "elbow" | "straight" | "step";
  translate?: { x: number; y: number };
  rootNodeClassName?: string;
  branchNodeClassName?: string;
  leafNodeClassName?: string;
};

function SytaxTree({ data, ...props }: Props) {
  return (
    <div className="h-full">
      <Tree data={data} {...props} />
    </div>
  );
}

export default SytaxTree;
