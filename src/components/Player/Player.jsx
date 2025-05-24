import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEdition] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let editablePlayerName = (
    <span className="player-name">{playerName ? playerName : initialName}</span>
  );

  function handleClick() {
    setIsEdition((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        className="player-name"
        value={playerName}
        onChange={handleInputChange}
        placeholder={initialName}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
