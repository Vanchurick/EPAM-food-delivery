import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  openModalSignUp,
  openModalLogIn,
} from '../../redux/actions/modalActions';

const Header = ({ openSignUpForm, openLogInForm }) => (
  <header>
    <div>
      <NavLink exact to="/">
        FD
      </NavLink>
    </div>
    <div>
      <button type="button" onClick={openSignUpForm}>
        Sign Up
      </button>
      <button type="button" onClick={openLogInForm}>
        Log In
      </button>
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
