import React from "react";

function TeamDisplay({ teams, playerScores, onWin, onLose }) {
  return (
    <div className="card team">
      {["blue", "red"].map((team) => (
        <div key={team} className="team-card">
          <div className="team-title">
            {team === "blue" ? "블루팀" : "레드팀"}
          </div>
          {Object.entries(teams[team]).map(([pos, name]) => (
            <div key={pos}>
              {pos}: {name} ({playerScores[name] ?? 0}점)
            </div>
          ))}
          <div>
            <button onClick={() => onWin(team)} className="button win">
              승리
            </button>
            <button onClick={() => onLose(team)} className="button lose">
              패배
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamDisplay;
