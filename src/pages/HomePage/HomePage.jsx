import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUp from '../../components/SignUp/SignUp';
import Modal from '../../components/Modal/Modal';
import LogIn from '../../components/LogIn/LogIn';
import Loader from '../../components/Loader/Loader';

class HomePage extends Component {
  state = {};

  render() {
    const { modal, signup, login, loader } = this.props;

    return (
      <div>
        {loader ? (
          <Loader />
        ) : (
          <div>
            <h1>Home page</h1>
          </div>
        )}
        {modal && (
          <Modal>
            {signup && <SignUp />}
            {login && <LogIn />}
          </Modal>
        )}
      </div>
    );
  }
}

HomePage.propTypes = {
  modal: PropTypes.bool.isRequired,
  signup: PropTypes.bool.isRequired,
  login: PropTypes.bool.isRequired,
  loader: PropTypes.bool.isRequired,
};

const mSTP = state => ({
  modal: state.modal.modal,
  signup: state.modal.signup,
  login: state.modal.login,
  loader: state.loader,
});

export default connect(mSTP, null)(HomePage);
