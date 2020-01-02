export const BusketActionType = {
  ADD_PRODUCT: 'ADD_TO_BASKET',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
};

export const addProduct = product => ({
  type: BusketActionType.ADD_PRODUCT,
  payload: { product },
});
