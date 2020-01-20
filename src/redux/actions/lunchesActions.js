export const LunchesActionType = {
  GET_LUNCHES_START: 'GET_LUNCHES_START',
  GET_LUNCHES_SUCCESS: 'GET_LUNCHES_SUCCESS',
  GET_LUNCHES_ERROR: 'GET_LUNCHES_ERROR',
};

export const getLunchesStart = () => ({
  type: LunchesActionType.GET_LUNCHES_START,
});

export const getLunchesSuccess = data => ({
  type: LunchesActionType.GET_LUNCHES_SUCCESS,
  payload: { data },
});

export const getLunchesError = error => ({
  type: LunchesActionType.GET_LUNCHES_ERROR,
  payload: { error },
});
