import React from "react";
import "./component-style.css";

interface ExamFeedbackProps {
  questionFeedback: string;
  agreementToggle: boolean;
}

const ExamAIFeedback: React.FC<ExamFeedbackProps> = ({ questionFeedback }) => {
  return (
    <div className="exam-aifeedback">
      <h3>AI Feedback</h3>
      <form className="feedback-textbox">
        <textarea id="feedbackText" value={questionFeedback}></textarea>
        <br />
        <input type="checkbox" id="agreement-toggle" name="agreement"></input>
        <label htmlFor="agreement-toggle">Disagree with AI Response</label>
      </form>
    </div>
  );
};

export default ExamAIFeedback;
