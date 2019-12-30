import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Menu.module.css';
import getMenu from '../../redux/operations/menuOperations';

import SignUp from '../../components/SignUp/SignUp';
import Modal from '../../components/Modal/Modal';
import LogIn from '../../components/LogIn/LogIn';
import Loader from '../../components/Loader/Loader';

class Menu extends Component {
  state = {};

  static propTypes = {
    menuRequest: PropTypes.func.isRequired,
    location: PropTypes.shape({ search: PropTypes.string.isRequired })
      .isRequired,
    modal: PropTypes.bool.isRequired,
    signup: PropTypes.bool.isRequired,
    login: PropTypes.bool.isRequired,
    loader: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const {
      menuRequest,
      location: { search },
    } = this.props;
    menuRequest(search);
  }

  render() {
    const { modal, signup, login, loader } = this.props;

    return (
      <>
        {loader ? (
          <Loader />
        ) : (
          <div className={styles.wrapper}>
            <h1>Menu</h1>
            {modal && (
              <Modal>
                {signup && <SignUp />}
                {login && <LogIn />}
              </Modal>
            )}
          </div>
        )}
      </>
    );
  }
}

const mSTP = state => ({
  modal: state.modal.modal,
  signup: state.modal.signup,
  login: state.modal.login,
  loader: state.loader,
});

const mDTP = dispatch => ({
  menuRequest: category => dispatch(getMenu(category)),
});

export default connect(mSTP, mDTP)(Menu);
