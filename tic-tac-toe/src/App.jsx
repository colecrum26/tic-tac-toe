// import { useState } from "react";
// import Board from "./components/gameBoard";
import "./App.css";
import "./components/board.css";

function App() {
  let [p1Score, setp1Score] = useState(0);
  let [p2Score, setp2Score] = useState(0);
  let [draws, setDraws] = useState(0);

  function handleScore(winner) {
    if (p1 == winner) {
      setp1Score(p1Score + 1);
    } else if (p2 == winner) {
      setp2Score(p2Score + 1);
    } else {
      setDraws(draws + 1);
    }
  }

  return (
    <div className="App">
      <div id="vert">vert</div>
      <div id="zont">zont</div>
    </div>
  );
}

export default App;
