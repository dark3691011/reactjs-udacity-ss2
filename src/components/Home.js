import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import PollItem from "./PollItem";

const Home = (props) => {
  const navigate = useNavigate();

  const toParent = (e, id) => {
    e.preventDefault();

    navigate(`/tweet/${id}`);
  };

  return (
    <div>
      <div className="home-board">
        <div className="home-title">
          <h2>New Questions</h2>
        </div>
        <div className="home-items">
          {props.questionIds
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
          {props.questionIds
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

const mapStateToProps = ({ questions, users, authedUser }) => {
  const user = users[authedUser];
  const listQuestion = Object.keys(questions)
    .map((key) => questions[key])
    ?.sort((a, b) => a.timestamp - b.timestamp)
    ?.map((e) => ({ ...e, isNew: !user?.answers[e.id] }));
  return {
    questionIds: listQuestion.map((e) => {
      return {
        id: e.id,
        isNew: !user?.answers[e.id],
      };
    }),
  };
};

export default connect(mapStateToProps)(Home);
