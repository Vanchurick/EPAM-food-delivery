import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// redux

import { getName, getAutorization } from '../../redux/selectors/selectors';
import {
  openModalSignUp,
  openModalLogIn,
} from '../../redux/actions/modalActions';
import { logOut } from '../../redux/actions/userActions';

// components

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

// images

import logo from '../../assets/images/logo.png';

// css

import styles from './HeaderSCSS.module.scss';

const Header = ({
  openSignUpForm,
  openLogInForm,
  autorization,
  name,
  logout,
}) => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
    </div>
    <div className={styles.autorization}>
      {autorization ? (
        <>
          <p className={styles.greeting}>Bon appetit, {name}!</p>
          <div className={styles.logoutContainer}>
            <Icon icon="Logout" className={styles.logout} onClick={logout} />
          </div>
        </>
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
  autorization: getAutorization(state),
  name: getName(state),
});

const mDTP = dispatch => ({
  openSignUpForm: () => dispatch(openModalSignUp()),
  openLogInForm: () => dispatch(openModalLogIn()),
  logout: () => dispatch(logOut()),
});

export default connect(mSTP, mDTP)(Header);
