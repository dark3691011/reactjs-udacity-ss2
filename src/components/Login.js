const Login = () => {
  return (
    <div className="d-flex flex-column justify-center align-items-center ">
      <h1>Employee Polls</h1>
      <img src="src\assets\login_img.jpg" />
      <div className="d-flex flex-column justify-center align-items-center w-100">
        <h3>Login</h3>
        <div className="d-flex flex-column justify-center align-items-center w-100">
          <label className="p-3">Username</label>
          <input className="w-100 input-login" placeholder="Username" />
        </div>
        <div className="d-flex flex-column justify-center align-items-center w-100">
          <label className="p-3 ">Password</label>
          <input className="w-100 input-login" placeholder="Password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
