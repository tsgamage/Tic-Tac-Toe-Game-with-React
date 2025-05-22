export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, turnIndex) => (
        <li
          key={`${turn.square.row}${turn.square.col}`}
          className={turnIndex === 0 ? "highlighted" : undefined}
        >
          {turn.player} clicked on square ({turn.square.col + 1},
          {turn.square.row + 1})
        </li>
      ))}
    </ol>
  );
}
