import React from 'react';
import { Link } from 'react-router-dom';

// components

import Icon from '../Icon/Icon';

// css

import styles from './BackButton.module.scss';

const BackButton = () => (
  <Link to="/">
    <div className={styles.iconContainer}>
      <Icon icon="Back" className={styles.icon} />
    </div>
  </Link>
);

export default BackButton;
