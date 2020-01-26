import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// redux

import { getMenu } from '../../redux/selectors/selectors';

// components

import ProductCard from '../ProductCard/ProductCard';
import Icon from '../Icon/Icon';

// css

import styles from './Menu.module.scss';

class Menu extends Component {
  state = {
    menu: this.props.menu,
    items: Object.keys(this.props.menu),
    filter: '',
  };

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

  handleChange = e => {
    const { menu } = this.props;

    if (e.target.value === 'all') {
      this.setState({ menu, filter: e.target.value, items: Object.keys(menu) });
      return;
    }

    this.setState({
      menu: { [e.target.value]: menu[e.target.value] },
      items: [e.target.value],
      filter: e.target.value,
    });
  };

  handleOnBlur = () => {};

  render() {
    const { cuisine } = this.props;

    const keys = Object.keys(this.props.menu);

    const { menu, items, filter } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{cuisine}</h2>
          <Icon icon={`${cuisine}`} className={styles.icon} />
          <select
            className={styles.select}
            name="type"
            value={filter}
            onBlur={this.handleOnBlur}
            onChange={this.handleChange}
          >
            <option value="all" className={styles.select}>
              Select category
            </option>
            {keys.map(el => (
              <option key={el} value={el} className={styles.select}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.allProducts}>
          {items.map(key => (
            <div key={key} className={styles.typeOfProducts}>
              <h2 className={styles.productTitle}>{key}:</h2>
              <div className={styles.productContainer}>
                {menu[key].map(el => (
                  <ProductCard key={el.id} product={el} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mSTP = state => ({
  menu: getMenu(state),
});

export default connect(mSTP, null)(Menu);
