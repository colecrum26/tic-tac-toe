// allows players to name themselves (with default Player1/2)
// button-click starts the game after players are named

{/* <Square value={squares[0]} onSquareClick={() => handleClick(0)}/> */}

import { useState } from "react";
import GameBoard from "./gameBoard";


function Players({player1}, {player2}) {
    return (
        <div>
        <span>{player1}</span>
        <span>{player2}</span>
        </div>
    )
}

function StartBtn(props) {
    return (
        <button id="startBtn" onClick={onStartClick}>
            Start Game
        </button>
    )
}

export default function Start() {
    const [player1, setplayer1] = useState("");
    const [player2, setplayer2] = useState("");

    function handlePlayer () {
        
    }

    function handleStart() {
        return (
            <div>
                <GameBoard />
            </div>
        )
    }

    return (
        <div>
        <form >
            <input type="text" name="player1" placeholder="Player 1" />
            <button type="submit" id="player1" onClick={handlePlayer}>Enter</button>
            <input type="text" name="player2" placeholder="Player 2"/>
            <button type="submit" id="player2" onClick={handlePlayer}>Enter</button>
        </form>
        <div>
            <Players />
        </div>
        <div>
            <StartBtn onStartClick={() => handleStart()}/>
        </div>
        </div>

    )
}