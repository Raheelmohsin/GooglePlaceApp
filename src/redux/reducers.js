import { FETCH_PLACES_SUCCESS, FETCH_PLACES_ERROR } from './actions';

const initialState = {
  suggestions: [],
  error: null,
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        suggestions: action.payload,
        error: null,
      };
    case FETCH_PLACES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default placeReducer;
