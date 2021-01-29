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
  history,
}) => (
  <>
    {loader ? (
      <Loader />
    ) : (
      <div className={styles.wrapper}>
        <Order path={pathname} history={history} />
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
  modal: PropTypes.bool.isRequired,
  signup: PropTypes.bool.isRequired,
  login: PropTypes.bool.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

const mSTP = state => ({
  loader: getLoader(state),
  modal: getModal(state),
  signup: getModalSignUp(state),
  login: getModalLogIn(state),
});

export default connect(mSTP, null)(OrderPage);
