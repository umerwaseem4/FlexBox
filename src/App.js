import React from "react";
import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader";
import Tabs from "./components/Tabs/Tabs";
import MidHeader from "./components/MidHeader/MidHeader";

function App() {
  return (
    <div className="App">
      <TopHeader
        title="My Registration"
        div1="2 Division"
        div2="1 Division"
        div3="3 Division"
      />
      <MidHeader />
      <Tabs />
    </div>
  );
}

export default App;
