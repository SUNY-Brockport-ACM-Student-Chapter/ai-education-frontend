import React from "react";
import "./exam-components.css";

const PrevNext = () => {
  return (
    <div className="prevnext-buttonbox">
      <button className="previous green">
        <p>❮ Prev</p>
      </button>
      <button className="next green">
        <p>Next ❯</p>
      </button>
      <button className="finish button gold">
        <p>Finish</p>
      </button>
      <button className="end-review button-hide">
        <p>End Review</p>
      </button>
    </div>
  );
};

export default PrevNext;
