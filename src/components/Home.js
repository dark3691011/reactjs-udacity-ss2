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
        <div>
        <div className="home-title">
          <h2>New Questions</h2>
        </div>
        <div className="home-items">
          {props.questionIds.filter(e => e.isNew).map((id) => (
            <li key={id}>
              <PollItem id={id} />
            </li>
          ))}
        </div>

        </div>
        <div>
        <div className="home-title">
          <h2>Done</h2>
        </div>
        <div className="home-items">
          {props.questionIds.filter(e => !e.isNew).map((id) => (
            <li key={id}>
              <PollItem id={id} />
            </li>
          ))}
        </div>

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users,authedUser }) => {
  console.log(questions);
  const user = users[authedUser];
  const cc = Object.keys(questions)
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ).map(e => {
      return {
        ...e,
        isNew: !user?.answers[e.id]
      }
    })
  };
};

export default connect(mapStateToProps)(Home);
