import React from "react";
import { useState } from "react";
function Player({ initalName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);
  const handleEditButton = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {!isEditing ? (
          <>
            <span className="player-name">{playerName}</span>
          </>
        ) : (
          <>
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
            />
          </>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
