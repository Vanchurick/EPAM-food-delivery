import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  openModalSignUp,
  openModalLogIn,
} from '../../redux/actions/modalActions';
import Button from '../Button/Button';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = ({ openSignUpForm, openLogInForm }) => (
  <header className={styles.header}>
    <div>
      <Link to="/">
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
      </Link>
    </div>
    <div>
      <Button text="Sign Up" type="button" func={openSignUpForm} />
      <Button text="login" type="button" func={openLogInForm} />
    </div>
  </header>
);

Header.propTypes = {
  openSignUpForm: PropTypes.func.isRequired,
  openLogInForm: PropTypes.func.isRequired,
};

const mDTP = dispatch => ({
  openSignUpForm: () => dispatch(openModalSignUp()),
  openLogInForm: () => dispatch(openModalLogIn()),
});

export default connect(null, mDTP)(Header);
