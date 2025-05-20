import React from "react";

function PlayerInputForm({ players, setPlayers }) {
  const positions = ["탑", "정글", "미드", "바텀", "서폿"];

  const handleChange = (position, index, value) => {
    const updated = { ...players };
    updated[position][index] = value;
    setPlayers(updated);
  };

  return (
    <div>
      {positions.map((pos) => (
        <div key={pos}>
          <strong>{pos}</strong>{" "}
          {[0, 1].map((i) => (
            <input
              key={i}
              value={players[pos][i]}
              onChange={(e) => handleChange(pos, i, e.target.value)}
              placeholder={`${pos} ${i + 1}`}
              style={{ margin: "0.2rem" }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default PlayerInputForm;
