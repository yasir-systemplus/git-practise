import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CountersPage from "./components/CountersPage";
import Foo from "./components/Foo";

function App() {
  const [visible, setVisible] = useState(true);

  // <span>
  //     <button onClick={() => setVisible((state) => !state)}>Toggle</button>
  //     {visible && <Foo />}
  //   </span>
  return <CountersPage />;
}

export default App;
