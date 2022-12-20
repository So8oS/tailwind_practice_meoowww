import React from "react";
import "./App.css";
import { Content } from "./componants/content";
import { Navbar } from "./componants/navbar";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
};
export default App;
