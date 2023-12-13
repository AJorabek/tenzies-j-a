import "./App.css";
import React, { useEffect, useState } from "react";

const TenziGame = () => {
  const [liId, setliId] = useState(1);
  const [dice, setDice] = useState(
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1)
  );

  function handleClick(e) {
    setliId(2);
    let log = document.getElementById("log");
    let li = document.createElement("li");
    let targetEl = e.target.textContent;
    li.textContent = targetEl;
    if (targetEl === e.target.textContent) {
      log.append(li);
    } else {
      log.append("Error");
    }
  }
  const rollDice = () => {
    const newDice = dice.map(() => Math.floor(Math.random() * 6) + 1);
    setDice(newDice);
  };

  return (
    <div>
      <h1>Tenzi Game</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div style={{ display: "flex", cursor: "pointer" }}>
        {dice.map((value, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              margin: "5px",
              border: "2px solid black",
            }}
            onClick={handleClick}
          >
            {value}
          </div>
        ))}
      </div>
      <button onClick={rollDice}>Roll Dice</button>
      <ul id="log">
        <h3>Console log:</h3>
      </ul>
    </div>
  );
};

export default TenziGame;
