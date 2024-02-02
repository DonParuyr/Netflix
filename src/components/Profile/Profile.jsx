import "./Profile.scss";

export default function Profile() {
  return (
    <div className="container">
      <div className="content-size">
        <h1>Log in</h1>
        <br />
        <div className="login_form">
          <h5>Login</h5>
          <input type="login" placeholder="username" />
          <h5>Password</h5>
          <input type="password" placeholder="password" />
        </div>
        <div className="rememberMe">
          <input type="checkbox" />
        </div>
        <div className="sign">
          <button>Sign in</button>
        </div>
        <div className="forgot">
            <a href="/">Forgot password</a>
            <a href="/">Registration</a>
        </div>
      </div>
    </div>
  );
}
