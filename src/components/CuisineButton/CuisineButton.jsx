import React from 'react';
import PropTypes from 'prop-types';

// css

import styles from './CuisineButton.module.css';

const CuisineButton = ({ img, alt, title }) => (
  <div className={styles.container}>
    <img src={img} alt={alt} className={styles.image} title={title} />
  </div>
);

CuisineButton.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CuisineButton;
