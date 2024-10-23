import { useNavigate, Link } from "react-router-dom";

const LeaderBoard = (props) => {
  const navigate = useNavigate();

  const toParent = (e, id) => {
    e.preventDefault();

    navigate(`/tweet/${id}`);
  };

  return (
    <div>
      <table>
        <tr>
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
        <tr>
          <td>
            <div>
              <img/>
              <div>Serah A</div>
              <div>serahedo</div>
            </div>
          </td>
          <td>
            12
          </td>
          <td>
            3
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LeaderBoard;
