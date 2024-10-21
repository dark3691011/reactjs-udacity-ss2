import { useNavigate, Link } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const toParent = (e, id) => {
    e.preventDefault();

    navigate(`/tweet/${id}`);
  };

  return (
    <div>
      <div>
        <h2>New Questions</h2>
        <div>
          <div>
            <p>mtsamis</p>
            <p>
              4:11:PM | 11/23/2011
            </p>
            <div>
              show
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
