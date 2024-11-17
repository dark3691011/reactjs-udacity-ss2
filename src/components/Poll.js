import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/shared";
import img_404 from "../assets/img_404.jpg";
import { useEffect, useState } from "react";

const Poll = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Lấy dữ liệu từ Redux store
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);

  const [question, setQuestion] = useState({});
  const [user, setUser] = useState({});
  let { optionOne, optionTwo } = question;

  useEffect(() => {
    const tmpQuestion = questions[id];
    if (!tmpQuestion) {
      setQuestion({
        notFound: true,
      });
      return;
    }

    const isVoted = !!users[authedUser]?.answers[id];
    if (isVoted) {
      tmpQuestion.optionOne.voted =
        tmpQuestion?.optionOne?.votes?.includes(authedUser);
      tmpQuestion.optionTwo.voted =
        tmpQuestion?.optionTwo?.votes?.includes(authedUser);
    }
    tmpQuestion.isVoted = isVoted;

    setQuestion(tmpQuestion);
    setUser(users[tmpQuestion?.author]);
  }, [id, authedUser, questions, users]);

  const vote = (answer) => {
    dispatch(
      handleSaveQuestionAnswer({
        authedUser,
        qid: question.id,
        answer,
      })
    ).then(() => {
      const tmpQuestion = { ...question, isVoted: true };
      tmpQuestion[answer].voted = true;
      tmpQuestion[answer].votes.push(authedUser);
      setQuestion(tmpQuestion);
    });
  };

  return question?.notFound ? (
    <div className="poll">
      <h1>Question not found</h1>
      <img alt="404" src={img_404} />
    </div>
  ) : (
    <div className="poll">
      <h2>Poll by {user?.name}</h2>
      <img
        className="poll-img"
        src={user?.avatarURL}
        alt={`${user?.name}'s avatar`}
      />
      <h2>Would you rather</h2>
      <div>
        <div className={optionOne?.voted ? "poll-option voted" : "poll-option"}>
          <div>
            <div>Number of people who voted: {optionOne?.votes?.length}</div>
            <div>
              Percentage:
              {Math.round(
                (optionOne?.votes?.length /
                  (optionOne?.votes?.length +
                    question?.optionTwo?.votes?.length)) *
                  100 || 0
              )}
              %
            </div>
          </div>
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
          <div>
            <div>Number of people who voted: {optionTwo?.votes?.length}</div>
            <div>
              Percentage:
              {Math.round(
                (optionTwo?.votes?.length /
                  (optionOne?.votes?.length + optionTwo?.votes?.length)) *
                  100 || 0
              )}
              %
            </div>
          </div>
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

export default Poll;
