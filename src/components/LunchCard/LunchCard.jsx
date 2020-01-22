import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// redux

import { addProduct } from '../../redux/actions/basketActions';

// components

import Button from '../Button/Button';

// css

import styles from './LunchCard.module.css';

const LunchCard = ({ lunch, addProductToBasket }) => {
  const sum = lunch.menu.reduce((acc, el) => acc + el.price, 0);
  const textForButton = `Add to basket ${sum} UAH`;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{lunch.name}</h2>
      <ul className={styles.list}>
        {lunch.menu.map(el => (
          <li key={el.id} className={styles.item}>
            <img src={el.img} alt="" className={styles.image} />
            <div>
              <p className={styles.name}>{el.name}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button
        className={styles.button}
        type="button"
        text={textForButton}
        func={() =>
          addProductToBasket({
            name: lunch.name,
            id: lunch.id,
            amount: 1,
            price: sum,
          })
        }
      />
    </div>
  );
};

LunchCard.propTypes = {
  addProductToBasket: PropTypes.func.isRequired,
  lunch: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const mDTP = dispatch => ({
  addProductToBasket: product => dispatch(addProduct(product)),
});

export default connect(null, mDTP)(LunchCard);
