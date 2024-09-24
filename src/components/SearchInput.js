import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const SearchInput = ({ searchQuery, setSearchQuery, suggestions, handleSelect }) => {
    return (
        <View style={styles.autocompleteContainer}>
            <Autocomplete
                data={suggestions}
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
                placeholder="Search for a place"
                inputContainerStyle={styles.inputContainer}
                flatListProps={{
                    keyExtractor: (_, idx) => idx.toString(),
                    renderItem: ({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleSelect(item.description, item.placeId)}
                            style={styles.suggestionItem}
                        >
                            <Text>{item.description}</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    autocompleteContainer: {
        flex: 0.3,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    suggestionItem: {
        padding: 7,
    },
});

export default SearchInput;
