import { connect } from "react-redux";

const LeaderBoardPage = (props) => {

  return (
    <div>
      <table>
        <tr>
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
        {
          props.listUsers?.map(e => {
            return (
              <tr>
                <td >
                  <div className="user-row">
                    <img className="avatar" src={e.avatarURL}/>
                   {e.name}
                    <span>{e.id}</span>

                  </div>
                </td>
                <td>
                  {Object.keys(e.answers)?.length}
                </td>
                <td>
                {e.questions?.length}
                </td>
              </tr>
            )
          })
        }
      </table>

      
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {

  const listUsers = Object.keys(users).map(e => {
    return users[e]
  })
  return {
    authedUser,
    listUsers,
  };
};

export default connect(mapStateToProps)(LeaderBoardPage);
