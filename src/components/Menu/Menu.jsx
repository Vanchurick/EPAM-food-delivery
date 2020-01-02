import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMenu } from '../../redux/selectors/selectors';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Menu.module.css';

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
      <div>
        <h1 className={styles.title}>{cuisine}</h1>
        {drinks && (
          <div>
            <h2>Drinks:</h2>
            <div className={styles.productContainer}>
              {drinks.map(el => (
                <ProductCard key={el.id} product={el} />
              ))}
            </div>
          </div>
        )}
        {sides && (
          <div>
            <h2>Sides:</h2>
            <div className={styles.productContainer}>
              {sides.map(el => (
                <ProductCard key={el.id} product={el} />
              ))}
            </div>
          </div>
        )}
        {mainDishes && (
          <div>
            <h2>Main Dishes:</h2>
            <div className={styles.productContainer}>
              {mainDishes.map(el => (
                <ProductCard key={el.id} product={el} />
              ))}
            </div>
          </div>
        )}
        {desserts && (
          <div>
            <h2>Desserts:</h2>
            <div className={styles.productContainer}>
              {desserts.map(el => (
                <ProductCard key={el.id} product={el} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mSTP = state => ({
  menu: getMenu(state),
});

export default connect(mSTP, null)(Menu);
