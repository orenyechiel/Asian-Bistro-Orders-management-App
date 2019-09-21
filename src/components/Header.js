import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

class Header extends Component {
  render() {
    const { headline } = this.props;
    return (
      <header>
        <div className="header">
          <h1>{headline}<span>Order Management</span></h1>
          
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  headline: ""
};

Header.propTypes = {
  headline: PropTypes.string.isRequired
};

export default Header;
