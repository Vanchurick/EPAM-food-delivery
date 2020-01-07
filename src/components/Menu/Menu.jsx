import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMenu } from '../../redux/selectors/selectors';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Menu.module.css';
import Icon from '../Icon/Icon';

class Menu extends Component {
  state = {};

  static propTypes = {
    cuisine: PropTypes.string.isRequired,
    menu: PropTypes.shape({
      drinks: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          id: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
        }),
      ),
      mainDishes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          id: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
        }),
      ),
      desserts: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          id: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
        }),
      ),
      sides: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          id: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
        }),
      ),
    }).isRequired,
  };

  render() {
    const {
      menu: { drinks, sides, mainDishes, desserts },
      cuisine,
    } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{cuisine}</h2>
          <Icon icon={`${cuisine}`} className={styles.icon} />
        </div>
        <div className={styles.allProducts}>
          {drinks && (
            <div className={styles.typeOfProducts}>
              <h2 className={styles.productTitle}>Drinks:</h2>
              <div className={styles.productContainer}>
                {drinks.map(el => (
                  <ProductCard key={el.id} product={el} />
                ))}
              </div>
            </div>
          )}
          {sides && (
            <div className={styles.typeOfProducts}>
              <h2>Sides:</h2>
              <div className={styles.productContainer}>
                {sides.map(el => (
                  <ProductCard key={el.id} product={el} />
                ))}
              </div>
            </div>
          )}
          {mainDishes && (
            <div className={styles.typeOfProducts}>
              <h2>Main Dishes:</h2>
              <div className={styles.productContainer}>
                {mainDishes.map(el => (
                  <ProductCard key={el.id} product={el} />
                ))}
              </div>
            </div>
          )}
          {desserts && (
            <div className={styles.typeOfProducts}>
              <h2>Desserts:</h2>
              <div className={styles.productContainer}>
                {desserts.map(el => (
                  <ProductCard key={el.id} product={el} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mSTP = state => ({
  menu: getMenu(state),
});

export default connect(mSTP, null)(Menu);
