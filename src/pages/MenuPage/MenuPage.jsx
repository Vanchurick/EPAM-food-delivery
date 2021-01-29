import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// css

import styles from './MenuPage.module.css';

// redux

import getMenu from '../../redux/operations/menuOperations';
import {
  getLoader,
  getModal,
  getModalSignUp,
  getModalLogIn,
  getModalBasket,
} from '../../redux/selectors/selectors';

// components

import SignUp from '../../components/SignUp/SignUp';
import Modal from '../../components/Modal/Modal';
import LogIn from '../../components/LogIn/LogIn';
import Loader from '../../components/Loader/Loader';
import Menu from '../../components/Menu/Menu';
import Basket from '../../components/Basket/Basket';
import SwimButtons from '../../components/SwimButtons/SwimButtons';

// helpers

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
    basket: PropTypes.bool.isRequired,
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
      basket,
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
            <div className={styles.swimButtons}>
              <SwimButtons />
            </div>
            <div className={styles.content}>
              <Menu cuisine={getCategoryFromUrl(search)} />
              <div className={styles.busketContainer}>
                <Basket />
              </div>
            </div>
            {modal && (
              <Modal>
                {signup && <SignUp />}
                {login && <LogIn />}
                {basket && <Basket />}
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
  basket: getModalBasket(state),
});

const mDTP = dispatch => ({
  menuRequest: category => dispatch(getMenu(category)),
});

export default connect(mSTP, mDTP)(MenuPage);
