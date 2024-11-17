import { useSelector } from "react-redux";
import { useState } from "react";
import PollItem from "./PollItem";

const Home = () => {
  const [showNewQuestions, setShowNewQuestions] = useState(true);
  const [showDone, setShowDone] = useState(true);

  const { questionIds } = useSelector(({ questions, users, authedUser }) => {
    const user = users[authedUser];
    const listQuestion = Object.keys(questions)
      .map((key) => questions[key])
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((e) => ({ ...e, isNew: !user?.answers[e.id] }));

    return {
      questionIds: listQuestion.map((e) => ({
        id: e.id,
        isNew: !user?.answers[e.id],
      })),
    };
  });

  return (
    <div>
      {/* Toggle for New Questions */}
      <div className="home-board">
        <div className="home-title">
          <h2>New Questions</h2>
          <button
            className="toggle-button"
            onClick={() => setShowNewQuestions((prev) => !prev)}
          >
            {showNewQuestions ? "▲ Hide" : "▼ Show"}
          </button>
        </div>
        {showNewQuestions && (
          <div className="home-items">
            {questionIds
              .filter((e) => e.isNew)
              .map((question) => (
                <li key={question.id}>
                  <PollItem id={question.id} />
                </li>
              ))}
          </div>
        )}
      </div>

      {/* Toggle for Done */}
      <div className="home-board">
        <div className="home-title">
          <h2>Done</h2>
          <button
            className="toggle-button"
            onClick={() => setShowDone((prev) => !prev)}
          >
            {showDone ? "▲ Hide" : "▼ Show"}
          </button>
        </div>
        {showDone && (
          <div className="home-items">
            {questionIds
              .filter((e) => !e.isNew)
              .map((question) => (
                <li key={question.id}>
                  <PollItem id={question.id} />
                </li>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
