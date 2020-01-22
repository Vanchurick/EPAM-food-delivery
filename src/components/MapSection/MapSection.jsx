import React from 'react';

// components

import GoogleMap from '../GoogleMap/GoogleMap';

// images

import deliveryman from '../../assets/images/deliverman.png';

// css

import styles from './MapSection.module.css';

const MapSection = () => (
  <section className={styles.mapSection}>
    <h2 className={styles.title}>We are here!</h2>
    <div className={styles.mapDelivery}>
      <div className={styles.mapContainer}>
        <GoogleMap />
      </div>
      <div className={styles.imageContainer}>
        <img src={deliveryman} alt="" className={styles.image} />
      </div>
    </div>
  </section>
);

export default MapSection;
