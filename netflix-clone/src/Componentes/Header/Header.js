import React from 'react'
import "./Heade.css"
// import Netflix from "../../assets/image/Netflix.jpeg"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div>
          <div className="logo">
          <p>NETFLIX</p>
        </div>
        <div className="header-left">
          <ul>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browser by Languges</li>
          </ul>
        </div>
        </div>
        <div className="headr_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>kids</li>

            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header