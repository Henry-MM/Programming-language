export interface Token {
  type: string;
  value: string;
}

export type CompilerTreeFormat =
  | [string | number]
  | [string, string | number | CompilerTreeFormat[]];

export interface CompilerResult {
  output: string | null;
  tokens: Token[];
  tree: CompilerTreeFormat;
  isSuccess: boolean;
  line: number;
}
