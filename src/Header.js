import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/250px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__center">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Jason Hume"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
}

export default Header;
