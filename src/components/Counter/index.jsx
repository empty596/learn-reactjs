import React, { useState } from "react";
import PropTypes from "prop-types";

Counter.propTypes = {};

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>số lần bạn đã click :{count}</p>
      <button onClick={() => setCount((x) => x + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
