import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// redux

import { getLoader } from '../../redux/selectors/selectors';

// components

import Loader from '../Loader/Loader';
import LunchCard from '../LunchCard/LunchCard';

// css

import styles from './Lunches.module.css';

const Lunches = ({ lunches, loader }) => (
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

Lunches.propTypes = {
  lunches: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          img: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ),
  loader: PropTypes.bool.isRequired,
};

Lunches.defaultProps = {
  lunches: [],
};

const mSTP = state => ({
  lunches: state.lunches.result,
  loader: getLoader(state),
});

export default connect(mSTP, null)(Lunches);
