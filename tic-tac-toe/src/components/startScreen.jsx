import { useState } from "react";
import handleStart from "../helpers/start.helper";
// allows players to name themselves (with default Player1/2) and be used during game
// button-click starts the game after players are named

function Players({ player1, player2 }) {
  return (
    <div>
        <>
          <span>{player1}</span>
          <span>{player2}</span>
        </>
    </div>
  );
}

export default function Start() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [players, setPlayers] = useState([]);

  function handlePlayer(event) { 
    console.log(event);
    event.preventDefault();
    setPlayers([...players, event.target.value]);
    console.log(players);
  }

  return (
    <div>
      <form>
        <input type="text" name="player1" placeholder="Player 1" onChange={event => setPlayer1(event.target.value)} />
        <button type="submit" id="player1" onClick={handlePlayer}>
          Enter
        </button>
        <input type="text" name="player2" placeholder="Player 2" onChange={event => setPlayer2(event.target.value)} />
        <button type="submit" id="player2" onClick={handlePlayer}>
          Enter
        </button>
      </form>
      <div>
        <Players player1={player1}/>
        <Players player2={player2}/>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  );
}
