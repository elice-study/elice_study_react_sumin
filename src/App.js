import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

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
  // const [text, setText] = useState();
  // const [list, setList] = useState([]);

  // function onChange(e) {
  //   setText(e.target.value);
  // }
  // function onSave(e) {
  //   console.log(text);
  //   const newList = text;

  //   if (newList !== "") setList([...list, newList]);
  // }

  //test3
  //getData 첫 랜더링시 한번만 실행
  useEffect(() => {
    getData();
  }, []);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  function getData() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
      setLoad(true);
    }, 2000);
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
      {/* <div className="test_2">
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
      </div> */}

      <div>
        {load ? (
          <div>
            {data.map((item) => (
              <div key={item.id}>
                <h4>`TITLE : {item.title}`</h4>
                <img src={item.url} alt="" />
              </div>
            ))}
          </div>
        ) : (
          <span>로딩중...</span>
        )}
      </div>
    </div>
  );
}

export default App;
