import { Link } from "react-router-dom";

export default function SignIn() {
    return (
      <div className="big-container">
        <div className="container">
          <div className="header">
            <h1>LOGO</h1>
          </div>
          <div className="SignIn-container">
            <div className="title-container">
              <h2>Sign In</h2>
            </div>
            <input type="text" />
            <input type="text" />
            <button>Sign In</button>
            <h3>New to Skateflix? <Link to="/"><button className="sign-up">Sign Up Now</button></Link>.</h3>
          </div>
        </div>
      </div>
    );
  }
  