export const OrderActionType = {
  CONFIRM_ORDER_START: 'CONFIRM_ORDER_START',
  CONFIRM_ORDER_SUCCESS: 'CONFIRM_ORDER_SUCCESS',
  CONFIRM_ORDER_ERROR: 'CONFIRM_ORDER_ERROR',
};

export const confirmOrderStart = () => ({
  type: 'CONFIRM_ORDER_START',
});

export const confirmOrderSuccess = response => ({
  type: 'CONFIRM_ORDER_SUCCESS',
  payload: { response },
});

export const confirmOrderError = error => ({
  type: 'CONFIRM_ORDER_ERROR',
  payload: { error },
});
