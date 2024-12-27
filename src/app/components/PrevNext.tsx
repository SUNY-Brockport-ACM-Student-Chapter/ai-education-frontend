import React from "react";
import "./component-style.css";

const PrevNext = () => {
  return (
    <div className="prevnext-buttonbox">
      <button className="previous">
        <p>❮ Prev</p>
      </button>
      <button className="next button-hide">
        <p>Next ❯</p>
      </button>
      <button className="finish button">
        <p>Finish</p>
      </button>
      <button className="end-review button-hide">
        <p>End Review</p>
      </button>
    </div>
  );
};

export default PrevNext;
