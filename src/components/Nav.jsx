import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const { handleLogOut, auth } = props;
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      {" | "}
      {auth.isAuthenticated ? (
        <button onClick={() => handleLogOut}>Logout</button>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          {" | "}
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
