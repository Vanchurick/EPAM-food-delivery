import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import styles from './MapSection.module.css';
import deliveryman from '../../assets/images/deliverman.png';

const MapSection = () => (
  <div className={styles.mapSection}>
    <h2 className={styles.title}>We are here!</h2>
    <div className={styles.mapDelivery}>
      <div className={styles.mapContainer}>
        <GoogleMap />
      </div>
      <div className={styles.imageContainer}>
        <img src={deliveryman} alt="" className={styles.image} />
      </div>
    </div>
  </div>
);

export default MapSection;
