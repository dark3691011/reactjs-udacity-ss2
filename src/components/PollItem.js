import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

const PollItem = (props) => {
  const { author, time } = props.question;

  return (
    <div className="poll-item">
      <p>{author}</p>
      <p>{time}</p>

      <Link to={`poll/${props.id}`}>show</Link>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  question.time = moment(question.timestamp).format("h:mm A | MM/DD/YYYY");

  return {
    authedUser,
    question,
  };
};

export default connect(mapStateToProps)(PollItem);
