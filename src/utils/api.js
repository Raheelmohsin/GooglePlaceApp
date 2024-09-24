import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';

export const fetchPlaceAutocomplete = async (query) => {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.predictions;
};
