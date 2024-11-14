import { connect } from "react-redux";
import { handleLogin } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import login_img from "../assets/login_img.jpg";

const Login = ({ dispatch }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleUserNameChange = (e) => {
    const text = e.target.value;
    setUserName(text);
  };
  const handlePasswordChange = (e) => {
    const text = e.target.value;
    setPassword(text);
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(
      handleLogin({
        userName,
        password,
      })
    ).then((res) => {
      if (res) {
        navigate("/");
      }
      setError(`Invalid username or password`); // Set the error message if login fails
    });
  };

  return (
    <div className="d-flex flex-column justify-center align-items-center ">
      <h1>Employee Polls</h1>
      <img src={login_img} />
      <div className="d-flex flex-column justify-center align-items-center w-100">
        <h3>Login</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Display error message */}
        <div className="d-flex flex-column justify-center align-items-center w-100">
          <label className="p-3">Username</label>
          <input
            value={userName}
            onChange={handleUserNameChange}
            className="w-100 input-login"
            placeholder="Username"
          />
        </div>
        <div className="d-flex flex-column justify-center align-items-center w-100">
          <label className="p-3 ">Password</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            className="w-100 input-login"
            placeholder="Password"
          />
        </div>
        <div className="login-button " onClick={(e) => login(e)}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default connect()(Login);

// export default Login;
