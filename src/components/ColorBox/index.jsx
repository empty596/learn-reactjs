import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState("white");
  return (
    <div>
      <p>{color}</p>
      <button onClick={() => setColor("black")}>Click change color black</button>
      <button onClick={() => setColor("white")}>Click change color white</button>
    </div>
  );
}

export default ColorBox;
