import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);

  function onChange(e) {
    setText(e.target.value);
  }
  function onSave(e) {
    e.preventDefault();
    console.log(text);
    const newList = text;
    setList([...list, newList]);
  }
  return (
    <div className="App">
      <input id="input" onChange={onChange}></input>
      <button className="btn" onClick={onSave}>
        저장!
      </button>
      {list.map((el) => (
        <ul>
          <li>{el}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
