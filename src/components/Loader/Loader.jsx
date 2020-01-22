import React from 'react';
import Spin from 'react-reveal/Spin';

// images

import logo from '../../assets/images/logo.png';

// css

import styles from './Loader.module.css';

const Loader = () => (
  <Spin forever duration={1000}>
    <div className={styles.container}>
      <img src={logo} alt="loader" className={styles.loader} />
    </div>
  </Spin>
);

export default Loader;
