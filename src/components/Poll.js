import { useNavigate, Link } from "react-router-dom";

const Poll = (props) => {
  const navigate = useNavigate();

  const toParent = (e, id) => {
    e.preventDefault();

    navigate(`/tweet/${id}`);
  };

  return (
    <div>
      <h2>Poll by cc</h2>
      <img/>
      <h3>Would you rather</h3>
      <div>
        <div>
          <div>Option A</div>
          <div>Click</div>
        </div>
        
        <div>
          <div>Option B</div>
          <div>Click</div>
        </div>
        
      </div>
    </div>
  );
};

export default Poll;
