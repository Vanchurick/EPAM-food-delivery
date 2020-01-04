import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBasket } from '../../redux/selectors/selectors';
import styles from './Basket.module.css';
import Button from '../Button/Button';

class Basket extends Component {
  state = {};

  render() {
    const { basket } = this.props;

    const totalPrice = basket.reduce((acc, el) => acc + el.price, 0);

    return (
      <div className={styles.basket}>
        <h2 className={styles.title}>Order</h2>
        <ul className={styles.list}>
          {basket.map(el => (
            <li className={styles.item} key={el.id}>
              <p className={styles.name}>{el.name}</p>
              <p className={styles.price}>{el.price}</p>
              {el.amount && <p>x{el.amount}</p>}
              <button type="button" className={styles.Delete}>
                -
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.totalPrice}>
          <p>Total price:</p>
          <p>{totalPrice}</p>
        </div>
        <Button
          text="Confirm order"
          type="click"
          className={styles.confirmButton}
        />
      </div>
    );
  }
}

Basket.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mSTP = state => ({
  basket: getBasket(state),
});

const mDTP = dispatch => ({
  func: () => dispatch(),
});

export default connect(mSTP, mDTP)(Basket);
