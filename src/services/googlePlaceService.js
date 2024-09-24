import axios from 'axios';

const GOOGLE_PLACES_API_KEY = 'AIzaSyD-Was5IvkKRhPC3gp_mbpSkxrq13Ngl70';

export const fetchPlaceSuggestions = async (query) => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${GOOGLE_PLACES_API_KEY}`
        );
        return response.data.predictions.map((place) => ({
            description: place.description,
            placeId: place.place_id,
        }));
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        throw new Error('Error fetching suggestions');
    }
};

export const fetchPlaceDetails = async (placeId) => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_PLACES_API_KEY}`
        );
        if (response.data && response.data.result) {
            const location = response.data.result.geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng,
                placeDetails: response.data.result,
            };
        }
    } catch (error) {
        console.error('Error fetching place details:', error);
        throw new Error('Error fetching place details');
    }
};
