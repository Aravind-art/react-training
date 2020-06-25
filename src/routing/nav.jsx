import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {

  render() {

    const newStyle = {
      color: "white",
      textDecoration: "none",
    };
    return (
      <nav>
        <div className="navigation">
          <Link style={newStyle} to="/about">
            <div>About</div>
          </Link>
          <Link style={newStyle} to="/shop">
            <div>Shop</div>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
