import React from "react";

function ShuffleButton({ onClick }) {
  return (
    <button onClick={onClick} className="button">
      팀 섞기 🎲
    </button>
  );
}

export default ShuffleButton;
