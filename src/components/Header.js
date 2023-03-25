import React from "react";
import Icon from "@mdi/react";
import "../components/CSS/Header.css"
import {
  mdiMenu,
  mdiMagnify,
  mdiYoutube,
  mdiMicrophone,
  mdiDotsVertical,
  mdiAccountCircle,
} from "@mdi/js";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="Navbar-logo">
       
          <Icon path={mdiMenu} size={1.8}  />
         
        <span className="title"><Icon path={mdiYoutube} size={2} color="red" />   YouTube<sup >TM</sup></span>
        
      
        </div>

        <div className="Navbar-search">
          <input placeholder="Search" />
          <button>
            <Icon path={mdiMagnify} size={1} />
          </button>
          <Icon path={mdiMicrophone} size={1} />
        </div>
        <div className="Navbar-account">
          <Icon path={mdiDotsVertical} size={1} />
          <button>
            <Icon path={mdiAccountCircle} size={1} color="RoyalBlue" />
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
