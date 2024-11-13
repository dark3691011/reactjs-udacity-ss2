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
    const tmpQuestion = questions[id];
    const isVoted = !!users[authedUser]?.answers[id];
    if (isVoted) {
      tmpQuestion.optionOne.voted =
        tmpQuestion?.optionOne?.votes?.includes(authedUser);
      tmpQuestion.optionTwo.voted =
        tmpQuestion?.optionTwo?.votes?.includes(authedUser);
    }
    tmpQuestion.isVoted = isVoted;

    setQuestion(tmpQuestion);
    setUser(users[questions[id]?.author]);
  }, []);

  const vote = (answer) => {
    dispatch(
      handleSaveQuestionAnswer({
        authedUser,
        qid: question.id,
        answer,
      })
    ).then((e) => {
      const tmpQuestion = { ...question, isVoted: true };
      tmpQuestion[answer].voted = true;
      setQuestion(tmpQuestion);
    });
  };

  return (
    <div className="poll">
      <h2>Poll by {user?.name}</h2>
      <img className="poll-img" src={user?.avatarURL} />
      <h2>Would you rather</h2>
      <div>
        <div className={optionOne?.voted ? "poll-option voted" : "poll-option"}>
          <div>{optionOne?.text}</div>
          <button
            className={question?.isVoted ? `d-none` : ``}
            disabled={question?.isVoted}
            onClick={() => vote("optionOne")}
          >
            Click
          </button>
        </div>

        <div className={optionTwo?.voted ? "poll-option voted" : "poll-option"}>
          <div>{optionTwo?.text}</div>
          <button
            className={question?.isVoted ? `d-none` : ``}
            disabled={question?.isVoted}
            onClick={() => vote("optionTwo")}
          >
            Click
          </button>
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
