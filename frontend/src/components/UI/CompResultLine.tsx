import React from "react";
import { Token } from "../../types/Compiler";

type Props = {
  line: number;
  tokens: Token[];
};

function CompResultLine({ line, tokens }: Props) {
  return (
    <div className="py-5 text-sm">
      <h3 className="text-base pb-2">Line: {line}</h3>
      <ul className="pl-5 flex flex-col gap-1">
        {tokens.map((token) => (
          <li>
            <p className="inline-block w-1/2 max-w-[180px] mr-1">
              Type: {token.type}
            </p>
            <p className="inline-block">Value: {token.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompResultLine;
