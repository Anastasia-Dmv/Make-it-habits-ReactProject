import React, { Component } from "react";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Regictration from "../components/Registration/Registration";

class HomePage extends Component {
  state = {
    openLogin: false,
    openRegistration: false,
  };

  loginFunk = () => {
    this.setState((prevState) => {
      return { openLogin: !prevState.openLogin };
    });
  };

  registrationFunk = () => {
    this.setState((prevState) => {
      return { openRegistration: !prevState.openRegistration };
    });
  };

  render() {
    const { openLogin, openRegistration } = this.state;
    return (
      <>
        {openLogin && <Login />}
        <Home onLogin={this.loginFunk} onRegistration={this.registrationFunk} />
        ;{openRegistration && <Regictration />}
      </>
    );
  }
}

export default HomePage;
