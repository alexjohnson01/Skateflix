import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp, setLoggedIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      setLoggedIn(true);
      navigate('/home')
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <div className="big-container">
      <div className="headerSignin">
        <h1 className="logo">LOGO</h1>
      </div>
      <div className="container">
        <div className="SignIn-container">
          <div className="title-container">
            <h2>Sign Up</h2>
          </div>
          {error && <h3>{error}</h3>}
          <input type="text" placeholder="Email" ref={emailRef} />
          <input type="text" placeholder="Password" ref={passwordRef} />
          <input type="text" placeholder="Confirm Password" ref={passwordConfirmRef} />
          <button disabled={loading} onClick={handleSubmit}>Sign Up</button>
          <h3>
            New to Skateflix?{" "}
            <Link to="/signin">
              <button className="sign-up">Sign In</button>
            </Link>
            .
          </h3>
        </div>
      </div>
    </div>
  );
}
