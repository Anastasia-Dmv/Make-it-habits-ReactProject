import React, { Component } from 'react';
import { avatars } from '../../Avatar/dataAvatar';
import { connect } from 'react-redux';
//import leftSideBarOperations from "../../../redux/operations/leftSideBarOperations";
//import avatar from '../../../assests/images/LeftSideBar/avatar.png';
import style from '../UserInfo/UserInfo.module.css';
//import authOperations from "../../../redux/operations/authOperation";
import Axios from 'axios';
// { render } from "@testing-library/react";
import authAction from '../../../redux/actions/authAction';
import { NavLink } from 'react-router-dom';

Axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';
class UserInfo extends Component {
  render() {
    const { name, surname, logout } = this.props;
    return (
      <>
        <section className={style.leftSideBar_userInfo}>
          <NavLink to="/profile" className={style.leftSideBar_userInfo__link}>
            <div className={style.leftSideBar_userInfo__avatar}>
              <img
                src={avatars.find(item => item.id === this.props.avatar)?.image}
                // src={
                //   photo
                //     ? `${photo} `
                //     : `${`http://localhost:3000/static/media/Avatar-10.04be2625.png`}`
                // }
                alt="avatar"
              />
            </div>
            <p className={style.leftSideBar_userInfo__name}>
              {name ? `${name} ${surname}` : 'User'}
            </p>
          </NavLink>
          <button
            type="button"
            onClick={logout}
            className={style.leftSideBar_userInfo__button}
          >
            Выход
          </button>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  avatar: state.user.avatar,
  name: state.user.firstName,
  surname: state.user.lastName,
});

export default connect(mapStateToProps, {
  logout: authAction.logOutSuccess,
})(UserInfo);
