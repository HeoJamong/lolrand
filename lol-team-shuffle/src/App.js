// App.js
import React, { useState } from "react";
import PlayerInputForm from "./components/PlayerInputForm";
import TeamDisplay from "./components/TeamDisplay";
import ShuffleButton from "./components/ShuffleButton";

const defaultPlayers = {
  탑: ["", ""],
  정글: ["", ""],
  미드: ["", ""],
  바텀: ["", ""],
  서폿: ["", ""],
};

function App() {
  const [players, setPlayers] = useState(defaultPlayers);
  const [teams, setTeams] = useState({ blue: {}, red: {} });
  const [playerScores, setPlayerScores] = useState({});

  const shuffleTeams = () => {
    const newBlue = {};
    const newRed = {};
    const newScores = { ...playerScores };

    Object.entries(players).forEach(([pos, names]) => {
      const shuffled = [...names].sort(() => Math.random() - 0.5);
      newBlue[pos] = shuffled[0];
      newRed[pos] = shuffled[1];

      if (newScores[shuffled[0]] === undefined) newScores[shuffled[0]] = 0;
      if (newScores[shuffled[1]] === undefined) newScores[shuffled[1]] = 0;
    });

    setTeams({ blue: newBlue, red: newRed });
    setPlayerScores(newScores);
  };

  const handleWin = (team) => {
    const updatedScores = { ...playerScores };
    Object.values(teams[team]).forEach((name) => {
      updatedScores[name] = (updatedScores[name] || 0) + 1;
    });
    setPlayerScores(updatedScores);
  };

  const handleLose = (team) => {
    const updatedScores = { ...playerScores };
    Object.values(teams[team]).forEach((name) => {
      updatedScores[name] = (updatedScores[name] || 0) - 1;
    });
    setPlayerScores(updatedScores);
  };

  return (
    <div>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        롤 내전 팀 설정
      </h1>
      <PlayerInputForm players={players} setPlayers={setPlayers} />
      <ShuffleButton onClick={shuffleTeams} />
      <TeamDisplay
        teams={teams}
        playerScores={playerScores}
        onWin={handleWin}
        onLose={handleLose}
      />
    </div>
  );
}

export default App;
