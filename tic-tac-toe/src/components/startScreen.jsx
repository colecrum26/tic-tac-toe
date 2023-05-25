import { useState } from "react";
import GameBoard from "./gameBoard";
// allows players to name themselves (with default Player1/2) and be used during game
// button-click starts the game after players are named

// let player1 = window.prompt("Enter Player 1");
// let player2 = window.prompt("Enter Player 2");

// setPlayers([player1, player2]);

function Players({ player1 }) {
  return (
    <div>
      {player1 && (
        <>
          <span>{player1}</span>

        </>
      )}
    </div>
  );
}

// function StartBtn(props) {
//     return (
//         <button id="startBtn" onClick={onStartClick}>
//             Start Game
//         </button>
//     )
// }

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

  // function handleStart() {
  //     return (
  //         <div>
  //             <GameBoard />
  //         </div>
  //     )
  // }

  return (
    <div>
      <form>
        <input type="text" name="player1" placeholder="Player 1" onChange={event => setPlayer1(event.target.value)} />
        <button type="submit" id="player1" onClick={handlePlayer}>
          Enter
        </button>
        <input type="text" name="player2" placeholder="Player 2" />
        <button type="submit" id="player2" onClick={handlePlayer}>
          Enter
        </button>
      </form>
      <div>
        <Players player1={player1}/>
      </div>
      <div>{/* <StartBtn onStartClick={() => handleStart()}/> */}</div>
    </div>
  );
}
