import React from "react";

function ShuffleButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ marginTop: "1rem" }}>
      팀 섞기
    </button>
  );
}

export default ShuffleButton;
