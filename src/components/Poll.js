import { useParams } from "react-router-dom";
import { handleSaveQuestionAnswer } from "../actions/shared";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Poll = ({ authedUser, users, questions, dispatch }) => {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [user, setUser] = useState({});
  let { optionOne, optionTwo } = question;

  useEffect(() => {
    setQuestion(questions[id]);
    setUser(users[questions[id]?.author]);
  }, []);

  const vote = (answer) => {
    dispatch(
      handleSaveQuestionAnswer({
        authedUser,
        qid: question.id,
        answer,
      })
    );
  };

  return (
    <div className="poll">
      <h2>Poll by {user?.name}</h2>
      <img className="poll-img" src={user?.avatarURL} />
      <h2>Would you rather</h2>
      <div>
        <div className="poll-option">
          <div>{optionOne?.text}</div>
          <div onClick={() => vote("optionOne")}>Click</div>
        </div>

        <div className="poll-option">
          <div>{optionTwo?.text}</div>
          <div onClick={() => vote("optionTwo")}>Click</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    questions,
    users,
  };
};

export default connect(mapStateToProps)(Poll);
