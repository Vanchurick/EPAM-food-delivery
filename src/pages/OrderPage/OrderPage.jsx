import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getLoader,
  getModal,
  getModalSignUp,
  getModalLogIn,
} from '../../redux/selectors/selectors';

import Loader from '../../components/Loader/Loader';
import Order from '../../components/Order/Order';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';

import styles from './OrderPage.module.css';

const OrderPage = ({
  loader,
  modal,
  signup,
  login,
  location: { pathname },
}) => (
  <>
    {loader ? (
      <Loader />
    ) : (
      <div className={styles.wrapper}>
        <Order path={pathname} />
        <Footer />
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

OrderPage.propTypes = {
  loader: PropTypes.bool.isRequired,
};

const mSTP = state => ({
  loader: getLoader(state),
  modal: getModal(state),
  signup: getModalSignUp(state),
  login: getModalLogIn(state),
});

export default connect(mSTP, null)(OrderPage);
