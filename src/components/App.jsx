import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function changeColorOnMouseOver() {
    setMouseOver(true);
  }

  function changeColorOnMouseOut() {
    setMouseOver(false);
  }

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  function handleChange(event) {
    //console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={changeColorOnMouseOver}
          onMouseOut={changeColorOnMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
