import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './SignUp.module.css';
import { closeModal } from '../../redux/actions/modalActions';

class SignUp extends Component {
  state = { email: '', password: '', name: '' };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password, name } = this.state;
    const { closeModalWindow } = this.props;

    return (
      <form action="POST" className={styles.form}>
        <label htmlFor="email">
          <p> E-mail:</p>
          <input
            type="email"
            onChange={this.handleChange}
            name="email"
            value={email}
            id="email"
            placeholder="Введите почту"
          />
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={password}
            id="password"
            placeholder="Введите пароль"
          />
        </label>
        <label htmlFor="name">
          <p>Name:</p>
          <input
            type="text"
            onChange={this.handleChange}
            name="name"
            value={name}
            id="name"
            placeholder="Введите имя"
          />
        </label>
        <div>
          <button type="button" onClick={closeModalWindow}>
            Отмена
          </button>
          <button type="submit">Зарегестрироваться</button>
        </div>
      </form>
    );
  }
}

SignUp.propTypes = {
  closeModalWindow: PropTypes.func.isRequired,
};

const mDTP = dispatch => ({
  closeModalWindow: () => dispatch(closeModal()),
});

export default connect(null, mDTP)(SignUp);
