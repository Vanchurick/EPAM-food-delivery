import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { setAdress } from '../../redux/actions/userActions';
import styles from './InputAdress.module.css';
import { getAdress } from '../../redux/selectors/selectors';

class InputAdress extends Component {
  state = { value: '' };

  componentDidMount() {
    const { adress } = this.props;
    this.sendAdress = debounce(this.sendAdress, 500);
    this.setState({ value: adress });
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

    return (
      <form action="POST" onSubmit={this.handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
            placeholder="Input adress for delivery"
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
