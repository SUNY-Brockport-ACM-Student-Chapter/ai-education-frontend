import React from "react";
import "./component-style.css";

const qcardCompletionF = "—";
const qcardCompletionT = "✔";

const QuestionList = () => {
  return (
    <div className="question-list-box">
      <h2>Question List</h2>
      <div className="qlist-card-box">
        <div className="qcard">
          1<div className="qcardCompletionbox">{qcardCompletionT}</div>
        </div>
        <div className="qcard">
          2<div className="qcardCompletionbox">{qcardCompletionT}</div>
        </div>
        <div className="qcard">
          3<div className="qcardCompletionbox">{qcardCompletionT}</div>
        </div>
        <div className="qcard">
          4<div className="qcardCompletionbox">{qcardCompletionT}</div>
        </div>
        <div className="qcard">
          5<div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>
        <div className="qcard">
          6<div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>
        <div className="qcard">
          7<div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>
        <div className="qcard">
          8<div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>
        <div className="qcard">
          9<div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>
        <div className="qcard">
          10
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>
        <div className="qcard">
          11
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>
        <div className="qcard">
          12
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>
        <div className="qcard">
          13
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>
        <div className="qcard">
          13
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>{" "}
        <div className="qcard">
          13
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>{" "}
        <div className="qcard">
          13
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>{" "}
        <div className="qcard">
          13
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>{" "}
        <div className="qcard">
          13
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>{" "}
        <div className="qcard">
          13
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>{" "}
        <div className="qcard">
          13
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>{" "}
        <div className="qcard">
          13
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>{" "}
        <div className="qcard">
          13
          <div className="qcardCompletionbox">{qcardCompletionF}</div>
        </div>
      </div>
      <div className="qlist-progressbar" />
      <h3>4/13 Complete</h3>
    </div>
  );
};

export default QuestionList;
