import { useNavigate, Link } from "react-router-dom";

const PollCreationPage = (props) => {
  const navigate = useNavigate();

  const toParent = (e, id) => {
    e.preventDefault();

    navigate(`/tweet/${id}`);
  };

  return (
    <div>
      <h2>Would you rather</h2>
      <p>Create your poll</p>
      <div>
        <div>
          <label>First option</label>
          <input />
        </div>
        
        <div>
          <label>Seconds option</label>
          <input />
        </div>

        <div>Submit</div>
      </div>
    </div>
  );
};

export default PollCreationPage;
