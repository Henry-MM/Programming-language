import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import "./Xterm.css";

const defaultData = "$ ";
const bgColor = "#1E1E1E";

function Xterm() {
  const terminalDomRef = useRef<HTMLDivElement>(null);
  const [terminal, setTerminal] = useState<Terminal | null>(null);

  useEffect(() => {
    const term = new Terminal({
      rows: 9,
      cols: 100,
      fontFamily: 'Consolas, "Courier New", monospace',
      fontSize: 14,
      cursorBlink: true,
      cursorStyle: "block",
      theme: {
        background: bgColor,
        foreground: "#DADADA",
        black: "#000000",
        red: "#E06C75",
        green: "#98C379",
      },
    });

    term.open(terminalDomRef.current!);
    setTerminal(term);

    term.write(defaultData);

    // term.onData((data: string) => {
    //   const cursorPosition = term.buffer.active.cursorX;

    //   if (data === "\r") {
    //     term.writeln("");
    //     term.write(defaultData);
    //   } else {
    //     term.write(data);
    //   }

    //   if (data === "\u007F" && cursorPosition - 1 >= defaultData.length) {
    //     term.write("\b \b");
    //   }
    // });

    term.onKey((e) => {
      const printable =
        !e.domEvent.altKey &&
        !e.domEvent.altGraphKey &&
        !e.domEvent.ctrlKey &&
        !e.domEvent.metaKey;
      if (e.domEvent.keyCode === 13) {
        const command = term?.buffer.active.getLine();

        if (command === "cls" || command === "clear") {
          term?.write("\x1Bc"); // ANSI escape code to clear the terminal
          term?.write("$ "); // Display a new prompt
        } else {
          term?.write("\r\n$ "); // Display a new prompt
        }
      } else if (e.domEvent.keyCode === 8) {
        // Handle the Backspace/Delete key
        term?.write("\b \b"); // Move the cursor back and clear the character
      } else if (printable) {
        term?.write(e.key);
      }
    });

    // showLoader(term);

    return () => {
      term.dispose();
      setTerminal(null);
    };
  }, []);

  function showLoader(term) {
    const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]; // Loading animation frames
    let currentFrame = 0;

    const interval = setInterval(() => {
      term.clear(); // Clear the terminal
      term.write(`Loading ${frames[currentFrame]}`); // Write the current frame
      currentFrame = (currentFrame + 1) % frames.length;
    }, 100);

    // Stop the loader after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      clearInterval(interval);
      term.clear(); // Clear the terminal content after loading
      term.write("Loading complete!\n");
    }, 5000);
  }

  return (
    <div
      id="terminal"
      style={{ backgroundColor: bgColor }}
      className="p-2"
      ref={terminalDomRef}
    ></div>
  );
}

export default Xterm;
