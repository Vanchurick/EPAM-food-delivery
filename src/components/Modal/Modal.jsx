import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// redux

import { closeModal } from '../../redux/actions/modalActions';

// css

import styles from './Modal.module.css';

class Modal extends Component {
  state = {};

  backdropeRef = createRef();

  static propTypes = {
    children: PropTypes.arrayOf(propValue => {
      propValue.forEach(el => {
        if (typeof el !== 'boolean' || typeof el !== 'object') {
          return new Error('Проп имеет неправильное значение');
        }
        return el;
      });
    }).isRequired,
    closeModalWindow: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    const { closeModalWindow } = this.props;

    if (e.code !== 'Escape') return;
    closeModalWindow();
  };

  handleBackDropClick = e => {
    const { closeModalWindow } = this.props;

    const { current } = this.backdropeRef;
    if (current && e.target !== current) return;
    closeModalWindow();
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className={styles.overlay}
        onClick={this.handleBackDropClick}
        onKeyDown={this.handleBackDropClick}
        ref={this.backdropeRef}
        role="button"
        tabIndex={0}
      >
        {children}
      </div>
    );
  }
}

// Modal.propTypes = {
//   children: PropTypes.arrayOf(propValue => {
//     propValue.forEach(el => {
//       if (typeof el !== 'boolean' || typeof el !== 'object') {
//         return new Error('Проп имеет неправильное значение');
//       }
//       return el;
//     });
//   }).isRequired,
//   closeModalWindow: PropTypes.func.isRequired,
// };

const mDTP = dispatch => ({
  closeModalWindow: () => dispatch(closeModal()),
});

export default connect(null, mDTP)(Modal);
