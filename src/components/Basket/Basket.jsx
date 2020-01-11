import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBasket } from '../../redux/selectors/selectors';
import styles from './Basket.module.css';
import Button from '../Button/Button';
import { removeProduct } from '../../redux/actions/basketActions';
import { closeModal } from '../../redux/actions/modalActions';

class Basket extends Component {
  state = {};

  render() {
    const { basket, remove, path, toConfirm } = this.props;

    const totalPrice = basket.reduce((acc, el) => acc + el.price, 0);
    return (
      <div className={styles.basket}>
        {basket.length > 0 ? (
          <div>
            <h2 className={styles.title}>Order</h2>
            <ul className={styles.list}>
              {basket.map(el => (
                <li className={styles.item} key={el.id}>
                  <p className={styles.name}>{el.name}</p>
                  <p className={styles.price}>{el.price}</p>
                  {el.amount && <p>x{el.amount}</p>}
                  <button
                    type="button"
                    className={styles.deleteBtn}
                    onClick={() => remove(el.id)}
                  >
                    -
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles.totalPrice}>
              <p>Total price:</p>
              <p>{totalPrice}</p>
            </div>
            {path !== '/order' && (
              <Link to="/order">
                <Button
                  text="Confirm order"
                  type="click"
                  className={styles.confirmButton}
                  func={toConfirm}
                />
              </Link>
            )}
          </div>
        ) : (
          <div>
            <h2 className={styles.title}>Order</h2>
            <p>You have not added any product to order...</p>
          </div>
        )}
      </div>
    );
  }
}

Basket.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
  path: PropTypes.string,
  toConfirm: PropTypes.func.isRequired,
};

Basket.defaultProps = {
  path: '',
};

const mSTP = state => ({
  basket: getBasket(state),
});

const mDTP = dispatch => ({
  remove: id => dispatch(removeProduct(id)),
  toConfirm: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(Basket);
