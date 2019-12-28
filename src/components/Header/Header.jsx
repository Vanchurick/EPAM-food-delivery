import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// redux

import {
  openModalSignUp,
  openModalLogIn,
} from '../../redux/actions/modalActions';
import { logOut } from '../../redux/actions/userActions';

// components

import Button from '../Button/Button';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import Icon from '../Icon/Icon';

const Header = ({
  openSignUpForm,
  openLogInForm,
  autorization,
  name,
  logout,
}) => (
  <header className={styles.header}>
    <div>
      <Link to="/">
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
      </Link>
    </div>
    <div>
      {autorization ? (
        <div className={styles.greetingContainer}>
          <p className={styles.greeting}>Bon appetit, {name}!</p>
          <Icon icon="Logout" className={styles.logout} onClick={logout} />
        </div>
      ) : (
        <>
          <Button text="Sign Up" type="button" func={openSignUpForm} />
          <Button text="login" type="button" func={openLogInForm} />
        </>
      )}
    </div>
  </header>
);

Header.propTypes = {
  openSignUpForm: PropTypes.func.isRequired,
  openLogInForm: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  autorization: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

const mSTP = state => ({
  autorization: state.user.autorization,
  name: state.user.name,
});

const mDTP = dispatch => ({
  openSignUpForm: () => dispatch(openModalSignUp()),
  openLogInForm: () => dispatch(openModalLogIn()),
  logout: () => dispatch(logOut()),
});

export default connect(mSTP, mDTP)(Header);
