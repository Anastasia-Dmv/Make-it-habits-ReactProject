import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import { Formik, Form } from 'formik';
import PasswordForm from './PasswordForm';
import ErrorValidation from './utils/ErrorValidation';
import funcMessage from './utils/funcMessage';
import { avatars } from '../Avatar/dataAvatar';
import Card from '../Card/Card';
import operationsProfile from '../../redux/operations/operationsProfile';
import ModalInterview from '../ModalInterview/ModalInterview.js'; //!modal Marina Melihova
import style from './Profile.module.css';
import { validationSchema } from './utils/validationSchema';

class Profile extends Component {
  state = {
    changePassword: false,
    isShowModal: this.props.isModalInterview === 0,
  };

  renderPasswordForm = () => {
    this.setState(prevState => ({
      changePassword: !prevState.changePassword,
    }));
  };

  changePath = () => {
    //
  };

  // handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  // const { name, value } = e.target;
  // this.setState({ [name]: value });
  // const { firstName, lastName, phone, email, avatar } = this.state;

  // this.props.addDataUserOperation({ ...this.state });
  //   console.log("this.props", this.props);
  //   console.log("this.state", this.state);
  // };
  render() {
    const { changePassword } = this.state;

    // if (!this.props.firstName) {
    //   return null;
    // } //!костыль для formik, чтобы стейт рендерился сразу при переходе на страницу, а не при перезагрузке

    return (
      <>
        <div className={style.container}>
          <div className={style.wrapperHeader}>
            <h2 className={style.title}>Личный кабинет</h2>
          </div>

          <div className={style.wrapperMain}>
            <h3 className={style.titleInfo}>Личная информация</h3>

            <div className={style.wrapperForm}>
              <div className={style.wrapperFirstColumn}>
                <Formik
                  initialValues={{
                    firstName: this.props.firstName,
                    lastName: this.props.lastName,
                    phone: this.props.phone,
                    email: this.props.email,
                    avatar: this.props.avatar,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={values => {
                    this.props.addDataUserOperation({ ...values });
                    // this.changePath();
                  }}
                >
                  {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form className={style.form}>
                      <label className={style.label}>
                        <span className={style.titleInput}>Имя*</span>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            ' ' +
                            (values.firstName.length !== 0 &&
                              touched.firstName &&
                              errors.firstName &&
                              style.inputInvalid)
                            // : style.inputValid
                          }
                        />
                        {(
                          <ErrorValidation
                            touched={touched.firstName}
                            message={errors.firstName}
                          />
                        ) && funcMessage(errors.firstName)}
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>Фамилия</span>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            ' ' +
                            (values.lastName.length !== 0 &&
                              touched.lastName &&
                              errors.lastName &&
                              style.inputInvalid)
                              // : style.inputValid
                          }
                        />
                        {(
                          <ErrorValidation
                            touched={touched.lastName}
                            message={errors.lastName}
                          />
                        ) && funcMessage(errors.lastName)}
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>Телефон</span>
                        <InputMask
                          type="tel"
                          name="phone"
                          defaultValue={values.phone}
                          id="phone"
                          mask="+3\8099 999 99 99"
                          onChange={handleChange}
                          className={style.input}
                          placeholder="+380__ ___ __ __"
                        />
                        {/* {( */}
                        <ErrorValidation
                          touched={touched.phone}
                          message={errors.phone}
                        />
                        {/* // ) && funcMessage(errors.phone)} */}
                      </label>
                      <label className={style.label}>
                        <span className={style.titleInput}>E-mail*</span>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            style.input +
                            ' ' +
                            (values.email.length !== 0 &&
                              touched.email &&
                              errors.email &&
                              style.inputInvalid)
                              // : style.inputValid
                          }
                        />
                        {(
                          <ErrorValidation
                            touched={touched.email}
                            message={errors.email}
                          />
                        ) && funcMessage(errors.email)}
                      </label>
                      {/* <NavLink
                        exact
                        to="/checklist"
                        className={style.linkChenlistSaveChanges}
                      > */}
                      <button
                        type="submit"
                        className={style.btnSaveChange}
                        onClick={() => {
                          console.log('this.props.status', this.props);
                        }}
                      >
                        {this.props.status === 200
                          ? 'СОХРАНЕНО!!!'
                          : 'Сохранить изменения'}
                      </button>
                    </Form>
                  )}
                </Formik>
                <button
                  onClick={this.renderPasswordForm}
                  className={style.buttonChangePassword}
                >
                  Изменить пароль
                </button>
              </div>

              <div className={style.wrapperSecondColumn}>
                <NavLink
                  exact
                  className={style.avatarWrapper}
                  to="/profile/avatar"
                >
                  <img
                    src={
                      avatars.find(item => item.id === this.props.avatar)?.image
                    }
                    alt="avatar"
                    width="108"
                    higth="108"
                    className={style.avatar}
                  />
                </NavLink>
                <NavLink
                  exact
                  className={style.editAvatar}
                  to="/profile/avatar"
                >
                  Выбрать другой аватар
                </NavLink>
                <div className={style.subscription}>
                  <span className={style.subscriptionName}>Basic</span>
                </div>
                <NavLink
                  exact
                  // className={style.avatarWrapper}
                  to="/subscriptions"
                >
                  <button
                    type="button"
                    // onClick={this.onChangeSubscriptions}
                    className={style.button}
                  >
                    Изменить подписку
                  </button>
                </NavLink>
              </div>
            </div>

            {changePassword && <PasswordForm />}
            <Card />
          </div>

          {/* ------------- kris ---------- */}
          {this.props.isModalInterview === 0 && (
            <ModalInterview close={() => null} />
          )}
          {/* ------------------------------ */}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    phone: state.user.phone,
    email: state.user.email,
    avatar: state.user.avatar,
    isModalInterview: state.quizInfo.smokeYears,
  };
};

const mapDispatchToProps = {
  addDataUserOperation: operationsProfile.addDataUserOperation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
