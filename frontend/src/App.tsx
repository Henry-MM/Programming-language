import AppLayout from "./layouts/AppLayout";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Metadata from "./components/Metadata/Metadata";
// import Xterm from "./components/Xterm";
import Terminal from "./components/Terminal/Terminal";

function App() {
  return (
    <AppLayout>
      <Header></Header>
      <Editor></Editor>
      <Metadata></Metadata>
      {/* <Xterm></Xterm> */}
      <Terminal />
    </AppLayout>
  );
}

export default App;
