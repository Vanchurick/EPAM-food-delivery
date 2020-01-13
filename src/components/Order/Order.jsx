import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getBasket,
  getUser,
  getAutorization,
} from '../../redux/selectors/selectors';
import { removeProduct } from '../../redux/actions/basketActions';
import Basket from '../Basket/Basket';
import CheckUserData from '../CheckUserData/CheckUserData';
import Button from '../Button/Button';
import confirmOrder from '../../redux/operations/orderOperations';

import styles from './Order.module.css';

class Order extends Component {
  state = {};

  handleSubmit = async e => {
    e.preventDefault();
    const { user, basket, sendOrder, history } = this.props;
    await sendOrder({ ...user, order: basket });
    history.push('/');
  };

  render() {
    const { path, autorization } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>Check and confirm</h2>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <div className={styles.info}>
              <div className={styles.data}>
                <Basket path={path} />
              </div>
              <div className={styles.data}>
                <CheckUserData />
              </div>
            </div>
            <Button
              text="Confirm"
              type="submit"
              func={this.handleSubmit}
              className={styles.button}
              disabled={!autorization}
            />
          </form>
        </div>
      </div>
    );
  }
}

Order.propTypes = {
  path: PropTypes.string.isRequired,
  autorization: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    adress: PropTypes.string,
    autorization: PropTypes.bool.isRequired,
  }).isRequired,
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  sendOrder: PropTypes.func.isRequired,
};

const mSTP = state => ({
  basket: getBasket(state),
  user: getUser(state),
  autorization: getAutorization(state),
});

const mDTP = dispatch => ({
  remove: id => dispatch(removeProduct(id)),
  sendOrder: data => dispatch(confirmOrder(data)),
});

export default connect(mSTP, mDTP)(Order);
