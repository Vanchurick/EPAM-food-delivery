import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../redux/operations/userOperations';
import styles from './LogIn.module.css';
import { closeModal } from '../../redux/actions/modalActions';
import * as notify from '../../helpers/notification';
import { regexpEmail } from '../../helpers/helpers';

import Button from '../Button/Button';

class LogIn extends Component {
  state = { email: '', password: '' };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { logIn, closeModalWindow } = this.props;
    const { email, password } = this.state;

    e.preventDefault();

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

    logIn(this.state);

    closeModalWindow();
  };

  render() {
    const { email, password } = this.state;
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
            placeholder="example@gmail.com"
            className={styles.input}
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
            placeholder="password"
            className={styles.input}
          />
        </label>

        <div className={styles.buttons}>
          <Button type="button" text="Cancel" func={closeModalWindow} />
          <Button type="submit" text="Login" func={this.handleSubmit} />
        </div>
      </form>
    );
  }
}

LogIn.propTypes = {
  closeModalWindow: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
};

const mDTP = dispatch => ({
  closeModalWindow: () => dispatch(closeModal()),
  logIn: data => dispatch(loginUser(data)),
});

export default connect(null, mDTP)(LogIn);
