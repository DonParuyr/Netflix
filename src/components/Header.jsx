import "./Header.scss";

import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            height="50"
            alt="/"
          />
        </div>
        <button className="menu-buttons">
          <Icon icon="material-symbols:menu" className="icon_menu"/>
          <div className="navigationMenu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/tv_shows">TV Shows</NavLink>
            <NavLink to="/originals">Originals</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/recently_added">Recently Added</NavLink>
            <NavLink to="/my_list">My List</NavLink>
          </div>
        </button>
        <div className="header-buttons">
          <button className="search-button">
            <Icon icon="material-symbols:search" />
          </button>
          <button className="bell-button">
            <Icon icon="mdi:bell-outline" />
          </button>
          <button className="profile-button">
            <NavLink to="/profile">
              <Icon icon="gg:profile" />
            </NavLink>
          </button>
        </div>
      </div>
    </header>
  );
}
