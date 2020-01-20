import React from 'react';
import styles from './LunchCard.module.css';

const LunchCard = ({ lunch }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{lunch.name}</h2>
    <ul className={styles.list}>
      {lunch.menu.map(el => (
        <li key={el.id} className={styles.item}>
          <img src={el.img} alt="" className={styles.image} />
          <div>
            <p className={styles.name}>{el.name}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default LunchCard;
