import React from "react";
import "./App.css";
import { Content } from "./componants/content";
import { Navbar } from "./componants/navbar";
const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Content />
    </div>
  );
};
export default App;
