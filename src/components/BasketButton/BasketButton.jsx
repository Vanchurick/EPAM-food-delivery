import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './BasketButton.module.css';
import { getBasket } from '../../redux/selectors/selectors';
import { openModalBasket } from '../../redux/actions/modalActions';

const BasketButton = ({ basket, openBasket }) => (
  <div
    className={styles.wrapper}
    onClick={openBasket}
    onKeyDown={openBasket}
    role="button"
    tabIndex="0"
  >
    <div className={styles.iconContainer}>
      {basket.length !== 0 && (
        <div className={styles.numberContainer}>
          <p className={styles.number}>{basket.length}</p>
        </div>
      )}
      <Icon icon="Basket" className={styles.icon} />
    </div>
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
