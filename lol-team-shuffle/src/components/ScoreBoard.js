import React from "react";

function ScoreBoard({ score, setScore }) {
  return (
    <div>
      <h3>승점</h3>
      <div>
        블루팀: {score.blue}
        <button onClick={() => setScore((s) => ({ ...s, blue: s.blue + 1 }))}>
          승리
        </button>
        <button onClick={() => setScore((s) => ({ ...s, blue: s.blue - 1 }))}>
          패배
        </button>
      </div>
      <div>
        레드팀: {score.red}
        <button onClick={() => setScore((s) => ({ ...s, red: s.red + 1 }))}>
          승리
        </button>
        <button onClick={() => setScore((s) => ({ ...s, red: s.red - 1 }))}>
          패배
        </button>
      </div>
    </div>
  );
}

export default ScoreBoard;
