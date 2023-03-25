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
        <div>
          <Icon path={mdiMenu} size={1} />
          <Icon path={mdiYoutube} size={1} color="red" />
          YouTube<sup>TM</sup>
        </div>

        <div>
          <input placeholder="Search" />
          <button>
            <Icon path={mdiMagnify} size={1} />
          </button>
          <Icon path={mdiMicrophone} size={1} />
        </div>
        <div>
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
