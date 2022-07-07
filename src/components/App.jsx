import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);

  function changeColorOnMouseOver() {
    setMouseOver(true);
  }

  function changeColorOnMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={changeColorOnMouseOver}
        onMouseOut={changeColorOnMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
