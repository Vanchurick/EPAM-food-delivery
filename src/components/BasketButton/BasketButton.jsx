import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// redux

import { getBasket } from '../../redux/selectors/selectors';
import { openModalBasket } from '../../redux/actions/modalActions';

// helpers

import { getCountOfProducts } from '../../helpers/helpers';

// components

import Icon from '../Icon/Icon';

// css

import styles from './BasketButtonSCSS.module.scss';

const BasketButton = ({ basket, openBasket }) => (
  <div
    className={styles.iconContainer}
    onClick={openBasket}
    onKeyDown={openBasket}
    role="button"
    tabIndex="0"
  >
    {basket.length !== 0 && (
      <div className={styles.numberContainer}>
        <p className={styles.number}>{getCountOfProducts(basket)}</p>
      </div>
    )}
    <Icon icon="Basket" className={styles.icon} />
  </div>
);

BasketButton.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
  openBasket: PropTypes.func.isRequired,
};

const mSTP = state => ({
  basket: getBasket(state),
});

const mDTP = dispatch => ({
  openBasket: () => dispatch(openModalBasket()),
});

export default connect(mSTP, mDTP)(BasketButton);
