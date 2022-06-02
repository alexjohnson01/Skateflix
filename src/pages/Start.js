import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="container">
      <div className="header">
        <h1>LOGO</h1>
        <Link to="/signin"><button className="signin">Sign In</button></Link>
      </div>
      <div className="main">
        <h1>Unlimited Skate Videos, interviews, and more.</h1>
        <h2>Watch anywhere</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
        <input type="text"></input>
        <button className="getStarted">Get Started</button>
      </div>
    </div>
  );
}
