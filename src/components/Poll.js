import { useNavigate, Link } from "react-router-dom";

const Poll = ({authedUser,user,
  question,}) => {
  const navigate = useNavigate();

  const {optionOne, optionTwo} = question;

  const toParent = (e, id) => {
    e.preventDefault();

    navigate(`/tweet/${id}`);
  };

  const vote = (answer) =>{
    dispatch(handleSaveQuestionAnswer({
      authedUser, qid: question.id, answer
    }));

  }

  return (
    <div>
      <h2>Poll by {user.name}</h2>
      <img ref={user.avatarURL}/>
      <h3>Would you rather</h3>
      <div>
        <div>
          <div>{optionOne.text}</div>
          <div onClick={() => vote('optionOne')}>Click</div>
        </div>
        
        <div>
          <div>{optionTwo.text}</div>
          <div onClick={() => vote('optionTwo')}>Click</div>
        </div>
        
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  const { id } = useParams();
  const question = questions[id];
  question.time = moment(question.timestamp).format("h:mm A | MM/DD/YYYY");
  user = users[question.author]
  return {
    authedUser,
    user,
    question,
  };
};

export default connect(mapStateToProps)(Poll);
