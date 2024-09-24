// PlaceMap.js
import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const PlaceMap = ({ mapRegion, selectedPlace }) => {
    return (
        <MapView region={mapRegion} style={styles.mapContainer}>
            {selectedPlace && (
                <Marker
                    coordinate={{
                        latitude: mapRegion.latitude,
                        longitude: mapRegion.longitude,
                    }}
                    title={selectedPlace.name}
                    description={selectedPlace.formatted_address}
                />
            )}
        </MapView>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        flex: 0.7,
        marginTop: 10,
    },
});

export default PlaceMap;
