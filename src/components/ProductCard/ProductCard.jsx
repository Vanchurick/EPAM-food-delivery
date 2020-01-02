import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import styles from './ProductCard.module.css';
import Button from '../Button/Button';
import { addProduct } from '../../redux/actions/basketActions.';

const ProductCard = ({ product, addProductToBasket }) => (
  <div className={styles.productCard}>
    <img src={logo} alt="" className={styles.image} />
    <p className={styles.name}>{product.name}</p>
    <p className={styles.price}>{product.price} UAH</p>
    <Button
      className={styles.button}
      type="button"
      text="Add to basket"
      func={() => addProductToBasket(product)}
    />
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
  }).isRequired,
  addProductToBasket: PropTypes.func.isRequired,
};

const mDTP = dispatch => ({
  addProductToBasket: product => dispatch(addProduct(product)),
});

export default connect(null, mDTP)(ProductCard);
