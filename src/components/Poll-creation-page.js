import { useDispatch } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PollCreationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Sử dụng useDispatch để lấy dispatch function từ Redux
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");

  const handleFirstTextChange = (e) => {
    const text = e.target.value;
    setFirstText(text);
  };

  const handleSecondTextChange = (e) => {
    const text = e.target.value;
    setSecondText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(firstText, secondText));

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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PollCreationPage;
