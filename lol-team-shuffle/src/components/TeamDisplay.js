import React from "react";

function TeamDisplay({ teams, playerScores, onWin, onLose }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "5rem",
        marginTop: "2rem",
      }}
    >
      {["blue", "red"].map((team) => (
        <div key={team}>
          <h2>{team === "blue" ? "블루팀" : "레드팀"}</h2>
          {Object.entries(teams[team]).map(([pos, name]) => (
            <div key={pos}>
              {pos}: {name} ({playerScores[name] ?? 0}점)
            </div>
          ))}
          <div style={{ marginTop: "0.5rem" }}>
            <button onClick={() => onWin(team)}>승리</button>
            <button
              onClick={() => onLose(team)}
              style={{ marginLeft: "0.5rem" }}
            >
              패배
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamDisplay;
