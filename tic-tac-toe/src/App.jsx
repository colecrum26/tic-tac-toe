import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameBoard from "./components/gameBoard";
import "./App.css";
import "./boardStyle.css";
import Start from "./components/startScreen";

function App() {

  return (
    <div className="App">
      {/* StartScreen */}
      <Start />
      <GameBoard />
    </div>
  );
}

export default App;
