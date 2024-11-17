import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser"; // Action to handle login
import login_img from "../assets/login_img.jpg";

const Login = () => {
  const dispatch = useDispatch(); // Use useDispatch to dispatch actions
  const navigate = useNavigate();
  const { state } = useLocation();

  // Local state for managing form inputs
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for storing error message

  // Handle username change
  const handleUserNameChange = (e) => {
    const text = e.target.value;
    setUserName(text);
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    const text = e.target.value;
    setPassword(text);
  };

  // Handle login on form submit
  const login = (e) => {
    e.preventDefault();

    // Dispatch login action
    dispatch(
      handleLogin({
        userName,
        password,
      })
    ).then((res) => {
      if (res) {
        // On successful login, navigate to the previous page or home
        navigate(state?.path || "/");
      } else {
        // If login fails, display error message
        setError("Invalid username or password");
      }
    });
  };

  return (
    <div className="d-flex flex-column justify-center align-items-center">
      <h1>Employee Polls</h1>
      <img src={login_img} alt="login-img" />
      <div className="d-flex flex-column justify-center align-items-center w-100">
        <h3>Login</h3>
        {error && (
          <p data-testid="error-message" style={{ color: "red" }}>
            {error}
          </p>
        )}
        {/* Username Input */}
        <div className="d-flex flex-column justify-center align-items-center w-100">
          <label className="p-3">Username</label>
          <input
            value={userName}
            onChange={handleUserNameChange}
            className="w-100 input-login"
            placeholder="Username"
            data-testid="username"
          />
        </div>
        {/* Password Input */}
        <div className="d-flex flex-column justify-center align-items-center w-100">
          <label className="p-3">Password</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            className="w-100 input-login"
            placeholder="Password"
            data-testid="password"
          />
        </div>
        {/* Submit Button */}
        <div
          data-testid="submit-button"
          className="login-button"
          onClick={(e) => login(e)}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default Login;
