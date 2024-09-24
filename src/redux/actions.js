import axios from 'axios';

const GOOGLE_PLACES_API_KEY = 'AIzaSyD-Was5IvkKRhPC3gp_mbpSkxrq13Ngl70';

export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_PLACES_ERROR = 'FETCH_PLACES_ERROR';

export const fetchPlaces = (query) => {
  return async (dispatch) => {
    if (query.length > 0) {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${GOOGLE_PLACES_API_KEY}`
        );
        dispatch({ type: FETCH_PLACES_SUCCESS, payload: response.data.predictions });
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        dispatch({ type: FETCH_PLACES_ERROR, payload: error.message });
      }
    }
  };
};
