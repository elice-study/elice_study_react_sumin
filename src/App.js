import Main from "./pages/Main/Main";
import Modal from "./pages/Modal/Modal";

import styles from "./App.module.css";

function App() {
  //img data fetch
  // getMovieImg = async () => {
  //   const res = await fetch("./dummy.json");
  //   const data = await res.json();
  //   console.log(data);
  // };

  return (
    <>
      <Main />
      {/* <Modal /> */}
    </>
  );
}

export default App;
