import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Logo from "../Logo";
import { PLAYLIST_ID } from "../../constants";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <Logo />
          <Link to={`/playlists/${PLAYLIST_ID}`}>My Playlist</Link>
        </div>
      </div>
    );
  }
}
