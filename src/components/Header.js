import React from "react";
import Icon from "@mdi/react";
import "../components/CSS/Header.css"
import {
  mdiMagnify,
  mdiYoutube,
  mdiMicrophone,
  mdiDotsVertical,
  mdiAccountCircle,
} from "@mdi/js";
import { signInWithRedirect ,GoogleAuthProvider,getAuth} from "@firebase/auth";
import { app } from "../Firebase";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const Header = () => {

    const handleSignIn = ()=>{
        signInWithRedirect(auth, provider).then((res)=>{
            console.log('sign in success')
        }).catch((err)=>{
            console.log('signin failed');
        })
    }
  return (
    <>
      <div className="navbar">
        <div className="Navbar-logo">
       
         
        <span className="title"><Icon path={mdiYoutube} size={1.5} color="red" /> FunMonger<sup >TM</sup></span>
        
      
        </div>

        <div className="Navbar-search">
          <input placeholder="Search" className="searchInput" />
          <button className="searchBtn">
            <Icon path={mdiMagnify} size={1} />
          </button>
          <Icon path={mdiMicrophone} size={1} className="microphone"/>
        </div>
        <div className="Navbar-account">
          <Icon path={mdiDotsVertical} size={1} className="options" />
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
