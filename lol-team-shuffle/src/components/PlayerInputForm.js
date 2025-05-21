import React from "react";

function PlayerInputForm({ players, setPlayers }) {
  const positions = ["탑", "정글", "미드", "바텀", "서폿"];

  const handleChange = (position, index, value) => {
    const updated = { ...players };
    updated[position][index] = value;
    setPlayers(updated);
  };

  return (
    <div className="card">
      <h2 style={{ marginBottom: "1rem" }}>플레이어 입력</h2>
      {positions.map((pos) => (
        <div key={pos} className="input-line">
          <label>{pos}</label>
          {[0, 1].map((i) => (
            <input
              key={i}
              className="styled-input"
              value={players[pos][i]}
              onChange={(e) => handleChange(pos, i, e.target.value)}
              placeholder={`${pos} ${i + 1}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default PlayerInputForm;
