import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import { useState } from "react";
import Log from "./components/Log/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setGameTurns((preGameturn) => {
      let currentPlayer = "X";
      console.log(`gameTurns -> length : ${gameTurns.length}`);
      console.log(`gameTurns -> length Bool : ${gameTurns.length > 0}`);

      if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preGameturn,
      ];
      return updatedGameTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
