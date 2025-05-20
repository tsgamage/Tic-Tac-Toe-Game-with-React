import Player from "./assets/components/Player/Player";

function App() {
  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="O" />
          <Player name="Player 2" symbol="X" />
        </ol>
      </div>
    </main>
  );
}

export default App;
