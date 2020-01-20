import React, { Component } from 'react';
import { connect } from 'react-redux';
import lunchesRequest from '../../redux/operations/lunchesOperations';
import {
  getModal,
  getModalSignUp,
  getModalLogIn,
} from '../../redux/selectors/selectors';
import styles from './LunchesPage.module.css';

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import Lunches from '../../components/Lunches/Lunches';
import Pagination from '../../components/Pagination/Pagination';

class LunchesPage extends Component {
  state = {};

  componentDidMount() {
    const { getLunches } = this.props;
    getLunches();
  }

  getLucnhesFromPage = page => {
    const { getLunches } = this.props;
    getLunches({ page });
  };

  render() {
    const { modal, signup, login } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Lunches />
          <Pagination onClick={this.getLucnhesFromPage} />
        </div>
        <Footer />
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

const mSTP = state => ({
  state: state.lunches,
  modal: getModal(state),
  signup: getModalSignUp(state),
  login: getModalLogIn(state),
});

const mDTP = dispatch => ({
  getLunches: params => dispatch(lunchesRequest(params)),
});

export default connect(mSTP, mDTP)(LunchesPage);
