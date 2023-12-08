import { CompilerTreeFormat } from "../types/Compiler";
import { TreeNode } from "../types/SyntaxTree";

const sample = {
  print: ["print", "holis ♥"],
  asignation: ["=", "a", "hola"],
  printID: ["print", ["id", "a"]],
  concatenation: ["=", "a", [".", "hola", " adios"]],
  printAritmetic: ["print", ["+", 1, ["-", 1, ["*", 2, 5]]]],
};

const result = {
  printAritmetic: {
    name: "print",
    children: [
      {
        name: "*",
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
  },
};

export const parseTree = function (
  treeRawFormat: CompilerTreeFormat | string | number
) {
  // If is a primitive type,
  if (!Array.isArray(treeRawFormat)) return { name: treeRawFormat };

  // If is an empty array
  if (Array.isArray(treeRawFormat) && !treeRawFormat.length) return [];

  // If only have one item
  if (Array.isArray(treeRawFormat) && treeRawFormat.length == 1)
    return { name: treeRawFormat[0] };

  // If have more than one item on the array
  const node: TreeNode = {
    name: treeRawFormat[0],
  };

  return node;
};
