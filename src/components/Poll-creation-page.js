import { useDispatch } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PollCreationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [error, setError] = useState(""); // State to store error messages

  const handleFirstTextChange = (e) => {
    setFirstText(e.target.value);
    if (error) setError(""); // Clear error when the user starts typing
  };

  const handleSecondTextChange = (e) => {
    setSecondText(e.target.value);
    if (error) setError(""); // Clear error when the user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!firstText.trim() || !secondText.trim()) {
      setError("Both options are required.");
      return;
    }

    dispatch(handleAddQuestion(firstText, secondText));

    // Clear fields and navigate back to the home page
    setFirstText("");
    setSecondText("");
    navigate("/");
  };

  return (
    <div>
      <div className="poll-container">
        <h1>Would you rather</h1>
        <p>Create your poll</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>First option</label>
            <input
              type="text"
              id="option-one"
              placeholder="Option One"
              value={firstText}
              onChange={handleFirstTextChange}
            />
          </div>
          <div className="input-group">
            <label>Second option</label>
            <input
              type="text"
              id="option-two"
              placeholder="Option Two"
              value={secondText}
              onChange={handleSecondTextChange}
            />
          </div>
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Display error if present */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PollCreationPage;
