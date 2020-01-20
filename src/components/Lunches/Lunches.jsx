import React from 'react';
import { connect } from 'react-redux';
import { getLoader } from '../../redux/selectors/selectors';
import Loader from '../Loader/Loader';
import styles from './Lunches.module.css';
import LunchCard from '../LunchCard/LunchCard';

const Lunches = ({ lunches = [], loader }) => (
  <div className={styles.container}>
    {loader ? (
      <Loader />
    ) : (
      <div className={styles.lunchesContainer}>
        {lunches.map(el => (
          <LunchCard key={el.id} lunch={el} />
        ))}
      </div>
    )}
  </div>
);

const mSTP = state => ({
  lunches: state.lunches.result,
  loader: getLoader(state),
});

export default connect(mSTP, null)(Lunches);
