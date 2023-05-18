// allows players to name themselves (with default Player1/2)
// button-click starts the game after players are named

import { useState } from "react";

function Players({player1}, {player2}) {
    return (
        <div>
        <span>{player1}</span>
        <span>{player2}</span>
        </div>
    )
}

export default function Start() {
    const [player1, setplayer1] = useState("");
    const [player2, setplayer2] = useState("");

    function handlePlayer () {
        
    }

    return (
        <div>
        <form >
            <label htmlFor="player1"></label>
            <input type="text" name="player1" placeholder="Player 1" />
            <button type="submit" id="player1" onClick={handlePlayer}>Enter</button>
            <label htmlFor="player2"></label>
            <button type="submit" id="player2" onClick={handlePlayer}>Enter</button>
            <input type="text" name="player2" placeholder="Player 2"/>
        </form>
        <div>
            <Players />
        </div>
        </div>

    )
}