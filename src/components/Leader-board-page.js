import { useSelector } from "react-redux";

const LeaderBoardPage = () => {
  // Use useSelector to access Redux state directly
  const { users } = useSelector((state) => ({
    users: state.users,
  }));

  // Map over the users to create a list for the leaderboard
  const listUsers = Object.keys(users)
    .map((userId) => users[userId])
    ?.sort((a, b) => {
      const aLength =
        (a?.questions?.length || 0) + (Object.keys(a?.answers)?.length || 0);
      const bLength =
        (b?.questions?.length || 0) + (Object.keys(b?.answers)?.length || 0);
      return bLength - aLength;
    });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {listUsers.map((e) => (
            <tr key={e.id}>
              <td>
                <div className="user-row">
                  <img className="avatar" alt={e.id} src={e.avatarURL} />
                  {e.name}
                  <span>{e.id}</span>
                </div>
              </td>
              <td>{Object.keys(e.answers).length}</td>
              <td>{e.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoardPage;
