import React from "react";
import Icon from "@mdi/react";
import "../CSS/Header.css";
import logo from "../IMAGES/movix-logo.png";
import { mdiMagnify, mdiAccountCircle } from "@mdi/js";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  getAuth,
} from "@firebase/auth";
import { app } from "../../Firebase";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const Header = () => {
  const handleSignIn = () => {
    signInWithRedirect(auth, provider)
      .then((res) => {
        console.log("sign in success");
      })
      .catch((err) => {
        console.log("signin failed");
      });
  };
  return (
    <>
      <div className="navbar">
        <div className="Navbar-logo">
          <span className="title">
            <img src={logo} alt="" className="logo" />
            MOVIX
          </span>
        </div>

        <div className="Navbar-search">
          <input placeholder="Search Here For Movie..." className="searchInput" />
          <button className="searchBtn">
            <Icon path={mdiMagnify} size={1} />
          </button>
        </div>
        <div className="Navbar-account">

          <button className="signInBtn" onClick={handleSignIn}>
            <Icon path={mdiAccountCircle} size={1} color="RoyalBlue" />
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
