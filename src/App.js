import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  //test1
  // const [text, setText] = useState();
  // const [list, setList] = useState([]);

  // function onChange(e) {
  //   setText(e.target.value);
  // }
  // function onSave(e) {
  //   e.preventDefault();
  //   console.log(text);
  //   const newList = text;
  //   setList([...list, newList]);
  // }

  //test2
  const [text, setText] = useState();
  const [list, setList] = useState([]);

  function onChange(e) {
    setText(e.target.value);
  }
  function onSave(e) {
    e.preventDefault();
    console.log(text);
    const newList = text;

    if (newList !== "") setList([...list, newList]);
  }
  return (
    <div className="App">
      {/* <div className="test_1">
        TEST-1
        <input onChange={onChange}></input>
        <button className="btn" onClick={onSave}>
          저장!
        </button>
        {list.map((el) => (
          <ul>
            <li>{el}</li>
          </ul>
        ))}
      </div> */}
      <div className="test_2">
        TEST-2
        <input onChange={onChange}></input>
        <button className="btn" onClick={onSave}>
          저장!
        </button>
        {list.map((el) => (
          <ul>
            <li>{el}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
