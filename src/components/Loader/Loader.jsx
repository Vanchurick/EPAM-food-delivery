import React from 'react';
import Spin from 'react-reveal/Spin';
import logo from '../../assets/images/logo.png';
import styles from './Loader.module.css';

const Loader = () => (
  <Spin forever duration={1000}>
    <div className={styles.container}>
      <img src={logo} alt="loader" className={styles.loader} />
    </div>
  </Spin>
);
export default Loader;
