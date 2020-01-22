import React, { Component } from 'react';
import { connect } from 'react-redux';
import lunchesRequest from '../../redux/operations/lunchesOperations';
import {
  getModal,
  getModalSignUp,
  getModalLogIn,
  getModalBasket,
} from '../../redux/selectors/selectors';
import styles from './LunchesPage.module.css';

import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import Lunches from '../../components/Lunches/Lunches';
import Pagination from '../../components/Pagination/Pagination';
import BasketButton from '../../components/BasketButton/BasketButton';
import Basket from '../../components/Basket/Basket';

const SORT = {
  EXPENSIVE: 'expensive',
  CHEAP: 'cheap',
};

class LunchesPage extends Component {
  state = { sort: '', page: 1, category: '' };

  componentDidMount() {
    const { getLunches } = this.props;
    getLunches(this.state);
  }

  getLucnhesFromPage = page => {
    const { getLunches } = this.props;

    this.setState({ page }, () => getLunches(this.state));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { getLunches } = this.props;

    this.setState({ [name]: value }, () => getLunches(this.state));
  };

  render() {
    const { modal, signup, login, basket } = this.props;
    const { sort, category } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <label htmlFor="expensive">
            Expensive
            <input
              type="radio"
              checked={sort === SORT.EXPENSIVE}
              name="sort"
              value={SORT.EXPENSIVE}
              onChange={this.handleChange}
              id="expensive"
            />
          </label>
          <label htmlFor="cheap">
            Cheap
            <input
              type="radio"
              checked={sort === SORT.CHEAP}
              name="sort"
              value={SORT.CHEAP}
              onChange={this.handleChange}
              id="cheap"
            />
          </label>
          <select
            name="category"
            value={category}
            onBlur={this.handleOnBlur}
            onChange={this.handleChange}
          >
            <option value="">all</option>
            <option value="ukraine">Ukraine</option>
            <option value="italy">Italy</option>
            <option value="georgia">Georgia</option>
            <option value="pizza">Pizza</option>
            <option value="japan">Japan</option>
          </select>
          <Lunches />
          <Pagination onClick={this.getLucnhesFromPage} />
        </div>
        <BasketButton />
        <Footer />
        {modal && (
          <Modal>
            {signup && <SignUp />}
            {login && <LogIn />}
            {basket && <Basket />}
          </Modal>
        )}
      </div>
    );
  }
}

const mSTP = state => ({
  state: state.lunches,
  modal: getModal(state),
  signup: getModalSignUp(state),
  login: getModalLogIn(state),
  basket: getModalBasket(state),
});

const mDTP = dispatch => ({
  getLunches: params => dispatch(lunchesRequest(params)),
});

export default connect(mSTP, mDTP)(LunchesPage);
