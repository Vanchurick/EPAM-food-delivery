import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import styles from './BackButton.module.css';

class BackButton extends Component {
  state = {};

  render() {
    return (
      <Link to="/">
        <div className={styles.iconContainer}>
          <Icon icon="Back" className={styles.icon} />
        </div>
      </Link>
    );
  }
}

export default BackButton;
