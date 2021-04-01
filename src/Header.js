import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Header() {
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.teayudocongoogle.com/wp-content/uploads/2018/11/que-es-gmail-1280x720.png"
          alt="gmail icon"
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeHolder="Search email" type="text" />
        <ArrowDropDownIcon className="" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
