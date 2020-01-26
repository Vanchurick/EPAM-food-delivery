export const BusketActionType = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
};

export const addProduct = product => ({
  type: BusketActionType.ADD_PRODUCT,
  payload: { product },
});

export const removeProduct = id => ({
  type: BusketActionType.REMOVE_PRODUCT,
  payload: { id },
});
