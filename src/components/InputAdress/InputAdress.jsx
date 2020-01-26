import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

// redux

import { setAdress } from '../../redux/actions/userActions';
import { getAdress } from '../../redux/selectors/selectors';

// css

import styles from './InputAdressSCSS.module.scss';

class InputAdress extends Component {
  state = { value: '' };

  componentDidMount() {
    this.sendAdress = debounce(this.sendAdress, 500);
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.sendAdress(e.target.value);
  };

  sendAdress = adress => {
    const { userAdress } = this.props;
    userAdress(adress);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    const { adress } = this.props;

    return (
      <form action="POST" onSubmit={this.handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
            placeholder={
              adress ? `Your adress: ${adress}` : 'Input adress for delivery'
            }
            className={styles.inputAdress}
          />
        </div>
      </form>
    );
  }
}

InputAdress.defaultProps = {
  adress: '',
};

InputAdress.propTypes = {
  userAdress: PropTypes.func.isRequired,
  adress: PropTypes.string,
};

const mSTP = state => ({
  adress: getAdress(state),
});

const mDTP = dispatch => ({
  userAdress: adress => dispatch(setAdress(adress)),
});

export default connect(mSTP, mDTP)(InputAdress);
