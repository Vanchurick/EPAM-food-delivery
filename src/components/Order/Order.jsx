import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBasket, getUser } from '../../redux/selectors/selectors';
import { removeProduct } from '../../redux/actions/basketActions';
import Basket from '../Basket/Basket';
import CheckUserData from '../CheckUserData/CheckUserData';

import styles from './Order.module.css';

const Order = ({ path }) => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <h2 className={styles.title}>Check and confirm</h2>
      <form className={styles.info}>
        <div className={styles.data}>
          <Basket path={path} />
        </div>
        <div className={styles.data}>
          <CheckUserData />
        </div>
      </form>
    </div>
  </div>
);

Order.propTypes = {
  path: PropTypes.string.isRequired,
};

const mSTP = state => ({
  basket: getBasket(state),
  user: getUser(state),
});

const mDTP = dispatch => ({
  remove: id => dispatch(removeProduct(id)),
});

export default connect(mSTP, mDTP)(Order);
