import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="container1">
      <div className="image"></div>
      <div className="bg">
        <div className="header1">
          <h1>LOGO</h1>
          <Link to="/signin">
            <button className="signin">Sign In</button>
          </Link>
        </div>
        <div className="main">
          <h1 className="startTitle">Unlimited Videos, interviews,</h1>
          <h1 className="startTitle"> and much more.</h1>
          <h2 className="startText">Watch anywhere. Cancel anytime.</h2>
          <h3 className="startP">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="emailSignUp">
            <input className="emailSubmit" type="text"></input>
            <button className="getStarted">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
