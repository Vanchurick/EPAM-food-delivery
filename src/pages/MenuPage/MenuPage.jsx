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
  getBasket,
} from '../../redux/selectors/selectors';

import SignUp from '../../components/SignUp/SignUp';
import Modal from '../../components/Modal/Modal';
import LogIn from '../../components/LogIn/LogIn';
import Loader from '../../components/Loader/Loader';
import Menu from '../../components/Menu/Menu';
import Basket from '../../components/Basket/Basket';

import { getCategoryFromUrl } from '../../helpers/helpers';

import ukraine from '../../assets/images/slider/ukrainian-cuisine.jpg';
import italia from '../../assets/images/slider/italian-cuisine.jpg';
import georgia from '../../assets/images/slider/georgian-cuisine.jpg';
import japan from '../../assets/images/slider/japanese-cuisine.jpeg';
import pizza from '../../assets/images/slider/pizza-cuisine.jpg';

const images = { ukraine, italia, georgia, japan, pizza };

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
    basket: PropTypes.arrayOf(PropTypes.object).isRequired,
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
      basket,
    } = this.props;

    return (
      <>
        {loader ? (
          <Loader />
        ) : (
          <div className={styles.wrapper}>
            <div>
              <img
                src={images[getCategoryFromUrl(search)]}
                alt=""
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <Menu cuisine={getCategoryFromUrl(search)} />
              {basket.length > 0 && (
                <div className={styles.busketContainer}>
                  <Basket />
                </div>
              )}
            </div>
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
  basket: getBasket(state),
});

const mDTP = dispatch => ({
  menuRequest: category => dispatch(getMenu(category)),
});

export default connect(mSTP, mDTP)(MenuPage);
