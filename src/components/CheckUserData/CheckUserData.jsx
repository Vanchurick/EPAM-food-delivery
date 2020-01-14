import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import styles from './CheckUserData.module.css';
import { getUser } from '../../redux/selectors/selectors';
import { setAdress, setName, setEmail } from '../../redux/actions/userActions';

class CheckUserData extends Component {
  state = { name: '', email: '', adress: '' };

  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      adress: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    userAdress: PropTypes.func.isRequired,
    userName: PropTypes.func.isRequired,
    userEmail: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.changeAdress = debounce(this.changeAdress, 500);
    this.changeName = debounce(this.changeName, 500);
    this.changeEmail = debounce(this.changeEmail, 500);

    const { user } = this.props;

    this.setState({ adress: user.adress, name: user.name, email: user.email });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    switch (e.target.name) {
      case 'adress':
        this.changeAdress(e.target.value);
        return;
      case 'name':
        this.changeName(e.target.value);
        return;
      case 'email':
        this.changeEmail(e.target.value);
        return;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  changeAdress = adress => {
    const { userAdress } = this.props;

    userAdress(adress);
  };

  changeName = name => {
    const { userName } = this.props;

    userName(name);
  };

  changeEmail = email => {
    const { userEmail } = this.props;

    userEmail(email);
  };

  render() {
    const { name, email, adress } = this.state;

    return (
      <div className={styles.data}>
        <p className={styles.title}>Your data is:</p>
        <input
          type="text"
          value={name}
          name="name"
          className={styles.input}
          onChange={this.handleChange}
          placeholder="Enter your name..."
        />
        <input
          type="text"
          value={email}
          name="email"
          className={styles.input}
          onChange={this.handleChange}
          placeholder="Enter your email..."
        />
        <input
          type="text"
          value={adress}
          name="adress"
          className={styles.input}
          onChange={this.handleChange}
          placeholder="Enter your adress..."
        />
      </div>
    );
  }
}

const mSTP = state => ({
  user: getUser(state),
});

const mDTP = dispatch => ({
  userAdress: adress => dispatch(setAdress(adress)),
  userName: name => dispatch(setName(name)),
  userEmail: email => dispatch(setEmail(email)),
});

export default connect(mSTP, mDTP)(CheckUserData);
