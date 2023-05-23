import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/startScreen";
import "./App.css";
import "./boardStyle.css";

function App() {

  return (
    <div className="App">
      {/* StartScreen */}
      <Start />
    </div>
  );
}

export default App;
