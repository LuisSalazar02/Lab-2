import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <Link to="/" className="Logo">
        Music Search
      </Link>
    );
  }
}
