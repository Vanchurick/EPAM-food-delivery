import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './LogIn.module.css';
import { closeModal } from '../../redux/actions/modalActions';

import Button from '../Button/Button';

class LogIn extends Component {
  state = { email: '', password: '' };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { closeModalWindow } = this.props;

    return (
      <form action="POST" className={styles.form}>
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
          <Button type="submit" text="Login" func={closeModalWindow} />
          {/* <button type="button" onClick={closeModalWindow}>
            Отмена
          </button>
          <button type="submit">Войти</button> */}
        </div>
      </form>
    );
  }
}

LogIn.propTypes = {
  closeModalWindow: PropTypes.func.isRequired,
};

const mDTP = dispatch => ({
  closeModalWindow: () => dispatch(closeModal()),
});

export default connect(null, mDTP)(LogIn);
