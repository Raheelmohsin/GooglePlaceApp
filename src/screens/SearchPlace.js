import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSuggestions, setError } from '../redux/slice';
import SearchInput from '../components/SearchInput';
import PlaceMap from '../components/PlaceMap';
import { fetchPlaceSuggestions, fetchPlaceDetails } from '../services/googlePlaceService';


const GOOGLE_PLACES_API_KEY = 'AIzaSyD-Was5IvkKRhPC3gp_mbpSkxrq13Ngl70';

const SearchPlace = () => {
    const dispatch = useDispatch();
    const suggestions = useSelector((state) => state.places.suggestions);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: 20,
        longitude: 0,
        latitudeDelta: 100,
        longitudeDelta: 100,
    });

    const handleFetchSuggestions = async (query) => {
        if (query.length > 0) {
            try {
                const places = await fetchPlaceSuggestions(query);
                dispatch(setSuggestions(places));
            } catch (error) {
                dispatch(setError(error.message));
            }
        } else {
            dispatch(setSuggestions([]));
        }
    };

    const handleFetchPlaceDetails = async (placeId) => {
        try {
            const { latitude, longitude, placeDetails } = await fetchPlaceDetails(placeId);
            setMapRegion({
                latitude,
                longitude,
                latitudeDelta: 4,
                longitudeDelta: 4,
            });
            setSelectedPlace(placeDetails);
        } catch (error) {
            console.error(error.message);
        }
    };
    const handleSelect = (description, placeId) => {
        setSearchQuery('');
        handleFetchPlaceDetails(placeId);
        dispatch(setSuggestions([]));
    };

    useEffect(() => {
        handleFetchSuggestions(searchQuery);
    }, [searchQuery]);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Google Place with Map</Text>
        <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            suggestions={suggestions}
            handleSelect={handleSelect}
        />
        <PlaceMap
            mapRegion={mapRegion}
            selectedPlace={selectedPlace}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
});

export default SearchPlace;
