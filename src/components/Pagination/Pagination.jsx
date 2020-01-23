import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// css

import styles from './Pagination.module.css';

const Pagination = ({ page, items, onClick, previousPage, nextPage }) => (
  <div className={styles.container}>
    <button
      className={styles.btn}
      type="button"
      onClick={() => onClick(page - 1)}
      disabled={!previousPage}
    >
      -
    </button>
    <p className={styles.page}>
      {page}/{Math.ceil(items / 3)}
    </p>
    <button
      className={styles.btn}
      type="button"
      onClick={() => onClick(page + 1)}
      disabled={!nextPage}
    >
      +
    </button>
  </div>
);

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number,
  items: PropTypes.number,
  previousPage: PropTypes.shape({
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
  }),
  nextPage: PropTypes.shape({
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
  }),
};

Pagination.defaultProps = {
  previousPage: null,
  nextPage: null,
  page: 1,
  items: 0,
};

const mSTP = state => ({
  page: state.lunches.currentPage,
  items: state.lunches.amount,
  nextPage: state.lunches.next,
  previousPage: state.lunches.previous,
});

export default connect(mSTP, null)(Pagination);
