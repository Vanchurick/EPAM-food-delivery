import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// redux

import { closeModal } from '../../redux/actions/modalActions';
import { signUpUser } from '../../redux/operations/userOperations';

// css

import styles from './SignUp.module.scss';

// helpers

import * as notify from '../../helpers/notification';
import { regexpEmail, regexpName } from '../../helpers/helpers';

import Button from '../Button/Button';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { closeModalWindow, signUp } = this.props;
    const { email, password, name } = this.state;

    if (!regexpEmail.test(email)) {
      notify.alert('Incorect email!');
      return;
    }

    if (password.length < 8) {
      notify.alert('Your password less then 8 symbols');
      return;
    }

    if (password.length >= 16) {
      notify.alert('Your password longer then 16 symbols');
      return;
    }

    if (name.length < 3) {
      notify.alert('Enter longer name');
      return;
    }

    if (!regexpName.test(name)) {
      notify.alert('Enter correct name');
      return;
    }

    signUp(this.state);

    closeModalWindow();
  };

  render() {
    const { email, password, name } = this.state;
    const { closeModalWindow } = this.props;

    return (
      <form action="POST" className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor="email">
          <p className={styles.label}> E-mail:</p>
          <input
            type="text"
            onChange={this.handleChange}
            name="email"
            value={email}
            id="email"
            placeholder="exapmle@gmail.com"
            className={styles.input}
            required
          />
        </label>
        <label htmlFor="password">
          <p className={styles.label}>Password:</p>
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={password}
            id="password"
            placeholder="8-16 symbols"
            className={styles.input}
            required
          />
        </label>
        <label htmlFor="name">
          <p className={styles.label}>Name:</p>
          <input
            required
            type="text"
            onChange={this.handleChange}
            name="name"
            value={name}
            id="name"
            placeholder="Jack Sparrow"
            className={styles.input}
          />
        </label>
        <div className={styles.buttons}>
          <Button text="Cancel" type="button" func={closeModalWindow} />
          <Button text="Sign up" type="submit" func={this.handleSubmit} />
        </div>
      </form>
    );
  }
}

SignUp.propTypes = {
  closeModalWindow: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

const mDTP = dispatch => ({
  closeModalWindow: () => dispatch(closeModal()),
  signUp: userData => dispatch(signUpUser(userData)),
});

export default connect(null, mDTP)(SignUp);
