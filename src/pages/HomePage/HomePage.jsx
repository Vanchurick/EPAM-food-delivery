import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getLoader,
  getModal,
  getModalSignUp,
  getModalLogIn,
  getModalBasket,
} from '../../redux/selectors/selectors';

import SignUp from '../../components/SignUp/SignUp';
import Modal from '../../components/Modal/Modal';
import LogIn from '../../components/LogIn/LogIn';
import Loader from '../../components/Loader/Loader';
import Slider from '../../components/Gallery/Gallery';
import InputAdress from '../../components/InputAdress/InputAdress';
import SelectCuisine from '../../components/SelectCuisine/SelectCuisine';
import BasketButton from '../../components/BasketButton/BasketButton';
import Basket from '../../components/Basket/Basket';
import MapSection from '../../components/MapSection/MapSection';
import Footer from '../../components/Footer/Footer';

import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {};

  static propTypes = {
    modal: PropTypes.bool.isRequired,
    signup: PropTypes.bool.isRequired,
    login: PropTypes.bool.isRequired,
    loader: PropTypes.bool.isRequired,
    basket: PropTypes.bool.isRequired,
  };

  render() {
    const { modal, signup, login, loader, basket } = this.props;

    return (
      <div className={styles.wrapper}>
        {loader ? (
          <Loader />
        ) : (
          <div>
            <div className={styles.sLiderContainer}>
              <Slider />
              <InputAdress />
            </div>
            <BasketButton />
            <SelectCuisine />
            <MapSection />
            <Footer />
          </div>
        )}
        {modal && (
          <Modal>
            {signup && <SignUp />}
            {login && <LogIn />}
            {basket && <Basket />}
          </Modal>
        )}
      </div>
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

export default connect(mSTP, null)(HomePage);
