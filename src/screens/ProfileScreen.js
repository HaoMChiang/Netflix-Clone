import React from "react";
import "../styling/ProfileScreen.css";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
