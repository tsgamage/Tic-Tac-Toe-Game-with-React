export default function GameBoard({ onSelectSquare, board }) {
  // function handleClick(rowIndex, columnIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerRows) => [...innerRows]),
  //     ];
  //     updatedGameBoard[rowIndex][columnIndex] = currentPlayer;
  //     return updatedGameBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, columnIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
