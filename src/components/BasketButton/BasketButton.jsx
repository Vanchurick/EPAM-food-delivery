import React from 'react';
import Icon from '../Icon/Icon';
import styles from './BasketButton.module.css';

const BasketButton = () => (
  <div className={styles.wrapper}>
    <div className={styles.iconContainer}>
      <div className={styles.numberContainer}>
        <p className={styles.number}>5</p>
      </div>
      <Icon icon="Basket" className={styles.icon} />
    </div>
  </div>
);

export default BasketButton;
