import React, { Component } from "react";
import AuthNav from "./AuthNav";
import UserAuthNav from "./UserAuthNav";
import UserNavigation from "./UserNavigation";
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    let authNav;
    let nav;
    // if (this.props.user.email === "") {
    //   authNav = <AuthNav />;
    //   nav = <UserNavigation />;
    // } else {
    authNav = <UserAuthNav />;
    nav = <UserNavigation />;
    // }
    return (
      <div className="container section__menu">
        {authNav}
        {nav}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loggedUser,
  };
};

export default connect(mapStateToProps)(Menu);
