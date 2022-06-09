import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Header({val, setVal, className}) {
  const {logOut, setLoggedIn} = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function handleLogout() {
     setError('')

     try {
       await logOut()
       setLoggedIn(false);
       navigate('/signin')
     } catch {
       setError('failed to log out')
     }
    };
    const typeHandler = (e) => {
      setVal(e.target.value);
    };
return (
  <div className={className}>
    <h1 className="logo">LOGO</h1>
    <div className="header-container">
      <input
        className={"searchTrue"}
        type="text"
        value={val}
        onInput={typeHandler}
      />
      <button className="signin" onClick={handleLogout}>
        Log out
      </button>
      {error && <h3>{error}</h3>}
    </div>
  </div>
);
}