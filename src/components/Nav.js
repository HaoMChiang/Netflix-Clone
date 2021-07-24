import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styling/Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
