import { useSelector } from "react-redux";
import PollItem from "./PollItem";

const Home = () => {
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
      <div className="home-board">
        <div className="home-title">
          <h2>New Questions</h2>
        </div>
        <div className="home-items">
          {questionIds
            .filter((e) => e.isNew)
            .map((question) => (
              <li key={question.id}>
                <PollItem id={question.id} />
              </li>
            ))}
        </div>
      </div>

      <div className="home-board">
        <div className="home-title">
          <h2>Done</h2>
        </div>
        <div className="home-items">
          {questionIds
            .filter((e) => !e.isNew)
            .map((question) => (
              <li key={question.id}>
                <PollItem id={question.id} />
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
