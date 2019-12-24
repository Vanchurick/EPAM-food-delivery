import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUp from '../../components/SignUp/SignUp';
import Modal from '../../components/Modal/Modal';
import LogIn from '../../components/LogIn/LogIn';

class HomePage extends Component {
  state = {};

  render() {
    const { modal, signup, login } = this.props;

    return (
      <div>
        <h1>Home page</h1>
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
};

const mSTP = state => ({
  modal: state.modal.modal,
  signup: state.modal.signup,
  login: state.modal.login,
});

export default connect(mSTP, null)(HomePage);
