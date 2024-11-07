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
                <td>
                  <div>
                    <img src={e.avatarURL}/>
                    <div>{e.name}</div>
                    <div>{e.id}</div>
                  </div>
                </td>
                <td>
                  {e.answers?.length}
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

  const listUsers = Object.keys.map(e => {
    return users[e]
  })
  return {
    authedUser,
    listUsers,
  };
};

export default connect(mapStateToProps)(LeaderBoardPage);
