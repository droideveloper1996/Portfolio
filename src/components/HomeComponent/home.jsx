import React, { Component } from "react";
import HeaderComponent from "../common/_header";
import _ProfileHeader from "./profile/profile";
class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <_ProfileHeader />
      </React.Fragment>
    );
  }
}

export default HomeComponent;
