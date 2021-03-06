export const getCategoryFromUrl = search => {
  return search.split('=')[1];
};

export const isProductExistInBasket = (state, product) => {
  return state.find(el => el.id === product.id);
};

export const getCountOfProducts = basket => {
  return basket.reduce((acc, el) => acc + el.amount, 0);
};

export const regexpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const regexpName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
