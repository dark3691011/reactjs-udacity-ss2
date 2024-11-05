import { connect } from "react-redux";

const PollCreationPage = ({dispatch}) => {
  const navigate = useNavigate();
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
      <h2>Would you rather</h2>
      <p>Create your poll</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First option</label>
          <input value={firstText}  
          onChange={handleFirstTextChange}/>
        </div>
        
        <div>
          <label>Seconds option</label>
          <input value={secondText}  
          onChange={handleSecondTextChange}/>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default connect()(PollCreationPage);
