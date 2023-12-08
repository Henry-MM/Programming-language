import { useState } from "react";
import TabButton from "../UI/TabButton";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { TbBinaryTree } from "react-icons/tb";
import { HiCode } from "react-icons/hi";
import LexicalAnalyzer from "./LexicalAnalyzer";
import SyntaxAnalyzer from "./SyntaxAnalyzer/SyntaxAnalyzer";
import Raw from "./Raw";

enum TabTypes {
  "LEXICAL",
  "SYNTAX",
  "RAW",
}

function Metadata() {
  const [tabSelected, setTabSelected] = useState(TabTypes.LEXICAL);

  const onClickTabHandler = (selectedBtn: TabTypes) => {
    setTabSelected(selectedBtn);
  };

  return (
    <div id="metadata" className="relative">
      <div className="w-full h-full absolute overflow-auto pb-16">
        {tabSelected === TabTypes.LEXICAL ? (
          <LexicalAnalyzer />
        ) : tabSelected === TabTypes.SYNTAX ? (
          <SyntaxAnalyzer />
        ) : (
          <Raw />
        )}
      </div>

      <div className="w-full absolute bottom-0 flex items-end">
        <TabButton
          onClick={() => onClickTabHandler(TabTypes.LEXICAL)}
          className="grow"
          active={tabSelected === TabTypes.LEXICAL}
          Icon={HiOutlinePuzzlePiece}
        >
          Lexical
        </TabButton>
        <TabButton
          onClick={() => onClickTabHandler(TabTypes.SYNTAX)}
          className="grow"
          active={tabSelected === TabTypes.SYNTAX}
          Icon={TbBinaryTree}
        >
          Syntax
        </TabButton>
        <TabButton
          onClick={() => onClickTabHandler(TabTypes.RAW)}
          className="grow"
          active={tabSelected === TabTypes.RAW}
          Icon={HiCode}
        >
          Raw
        </TabButton>
      </div>
    </div>
  );
}

export default Metadata;
