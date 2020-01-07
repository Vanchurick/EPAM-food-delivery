import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './MenuPage.module.css';
import getMenu from '../../redux/operations/menuOperations';
import {
  getLoader,
  getModal,
  getModalSignUp,
  getModalLogIn,
} from '../../redux/selectors/selectors';

import SignUp from '../../components/SignUp/SignUp';
import Modal from '../../components/Modal/Modal';
import LogIn from '../../components/LogIn/LogIn';
import Loader from '../../components/Loader/Loader';
import Menu from '../../components/Menu/Menu';
import Basket from '../../components/Basket/Basket';
import Footer from '../../components/Footer/Footer';
import BackButton from '../../components/BackButton/BackButton';

import { getCategoryFromUrl } from '../../helpers/helpers';

const backgrounds = {
  ukraine: styles.backgroundUkraine,
  italia: styles.backgroundItaly,
  georgia: styles.backgroundGeorgia,
  japan: styles.backgroundJapan,
  pizza: styles.backgroundPizza,
};

class MenuPage extends Component {
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
    const {
      modal,
      signup,
      login,
      loader,
      location: { search },
    } = this.props;

    const wrapperStyles = [
      styles.wrapper,
      backgrounds[getCategoryFromUrl(search)],
    ];

    return (
      <>
        {loader ? (
          <Loader />
        ) : (
          <div className={wrapperStyles.join(' ')}>
            <BackButton />
            <div className={styles.content}>
              <Menu cuisine={getCategoryFromUrl(search)} />
              <div className={styles.busketContainer}>
                <Basket />
              </div>
            </div>
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
  }
}

const mSTP = state => ({
  modal: getModal(state),
  signup: getModalSignUp(state),
  login: getModalLogIn(state),
  loader: getLoader(state),
});

const mDTP = dispatch => ({
  menuRequest: category => dispatch(getMenu(category)),
});

export default connect(mSTP, mDTP)(MenuPage);
