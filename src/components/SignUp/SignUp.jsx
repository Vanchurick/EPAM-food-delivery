import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './SignUp.module.css';
import { closeModal } from '../../redux/actions/modalActions';
import signUpUser from '../../redux/operations/userOperations';

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
    const { closeModalWindow, signUp } = this.props;

    e.preventDefault();
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
            type="email"
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
            placeholder="8 symbols and more"
            className={styles.input}
            required
            minLength="8"
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
            placeholder="Jack or Jack Sparrow or Captan Jack Sparrow"
            className={styles.input}
            minLength="2"
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
