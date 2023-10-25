import React from "react";
import { useState, useEffect } from "react";

function PlayerCard({ playerNumber, value, setName }) {
  return (
    <div className="playercard">
      <h5>Player {playerNumber}</h5>
      <input
        value={value}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default PlayerCard;
