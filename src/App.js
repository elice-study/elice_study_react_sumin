import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <input onChange={onChange} value={text}></input>
      <button className="btn" onClick={onChange}></button>
      <div className="div">값: {text}</div>
    </div>
  );
}

export default App;
