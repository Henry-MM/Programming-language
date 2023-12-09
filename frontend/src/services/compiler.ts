import { LineOfCode } from "../types/CodeEditor";
import { CompilerResult } from "../types/Compiler";

const url = "http://127.0.0.1:8000";

export const compileOneLine = async function (
  lineOfCode: LineOfCode
): Promise<CompilerResult> {
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        line: lineOfCode.code,
      }),
    });

    const data: CompilerResult = await resp.json();

    if (data) return data;
    else throw new Error("Compiler didnt return data");
  } catch (error) {
    console.log(`Something went wrong on compileOneLine: ${error}`);

    return {
      output: "Compiler error",
      tokens: [],
      tree: [""],
      isSuccess: false,
      line: 0,
    };
  }
};

export const resetCompiler = async function () {
  try {
    const resp = await fetch(url + "/reset");

    const data = await resp.json();

    if (data) return data;
    else throw new Error("Compiler didnt return data");
  } catch (error) {
    console.log(`Something went wrong on resetCompiler: ${error}`);

    return {
      output: "Compiler error",
      tokens: [],
      tree: [""],
      isSuccess: false,
      line: 0,
    };
  }
};
