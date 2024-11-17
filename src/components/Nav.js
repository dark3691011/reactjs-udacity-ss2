import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../actions/authedUser";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // Using useSelector to get the user data from Redux store
  const user = useSelector(({ authedUser, users }) => users[authedUser]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
    navigate("/login");
  };

  return (
    <nav className="nav d-flex justify-space">
      <ul className="ms-2">
        <li className={location.pathname === "/" ? "active-nav" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={location.pathname === "/leaderboard" ? "active-nav" : ""}
        >
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li className={location.pathname === "/add" ? "active-nav" : ""}>
          <Link to="/add">New</Link>
        </li>
      </ul>
      <div className="d-flex justify-center align-items-center me-2">
        <div className="d-flex me-10 justify-center align-items-center">
          <img className="avatar" src={user?.avatarURL} alt={user?.name} />
          <p className="m-0">{user?.name}</p>
        </div>
        <div className="logout-button" onClick={logout}>
          Logout
        </div>
      </div>
    </nav>
  );
};

export default Nav;
