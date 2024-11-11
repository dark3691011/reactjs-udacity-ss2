import { Link } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const Nav = ({user}) => {
  const location = useLocation();
  return (
    <nav className="nav d-flex justify-space">
      <ul className="ms-2">
        <li className={location.pathname === "/" ? "active-nav" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/board" ? "active-nav" : ""}>
          <Link to="/board">Leaderboard</Link>
        </li>
        <li className={location.pathname === "/new" ? "active-nav" : ""}>
          <Link to="/new">New</Link>
        </li>
      </ul>
      <div className="d-flex justify-center align-items-center me-2">
        <div className="d-flex me-10 justify-center align-items-center">
          <img className="avatar" src={user?.avatarURL} />
          <p className="">{user?.name}</p>
        </div>
        <div>Logout</div>
      </div>
    </nav>
  );
};


const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser];
  console.log('ccc', user);
  console.log(user)
  console.log('cá', authedUser)
  return {
    user
  };
};

export default connect(mapStateToProps)(Nav);
