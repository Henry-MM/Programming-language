import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CodeEditorProvider } from "./providers/CodeEditorProvider.tsx";
import { TerminalProvider } from "./providers/TerminalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CodeEditorProvider>
      <TerminalProvider>
        <App />
      </TerminalProvider>
    </CodeEditorProvider>
  </React.StrictMode>
);
