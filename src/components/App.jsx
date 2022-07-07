import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  function changeColorOnMouseOver() {
    setMouseOver(true);
  }

  function changeColorOnMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    //console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
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
