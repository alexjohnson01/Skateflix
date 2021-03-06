import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";

export default function SignIn() {
  //Variables
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn, setLoggedIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  //Functions
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      setLoggedIn(true);
      navigate('/home')
    } catch {
      setError("Failed to log In");
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
            <h2>Sign In</h2>
          </div>
          {error && <h3>{error}</h3>}
          <input ref={emailRef} type="text" />
          <input ref={passwordRef} type="text" />
          <button disabled={loading} onClick={handleSubmit}>
            Sign In
          </button>
          <h3>
            New to Skateflix?{" "}
            <Link to="/signup">
              <button className="sign-up">Sign Up Now</button>
            </Link>
            .
          </h3>
        </div>
      </div>
    </div>
  );
}
