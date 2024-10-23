import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav d-flex justify-space">
      <ul className="ms-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Leaderboard</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
      </ul>
      <div className="d-flex justify-center align-items-center me-2">
        <div className="d-flex pe-10">
          <img />
          <p>Name</p>
        </div>
        <div>Logout</div>
      </div>
    </nav>
  );
};

export default Nav;
