# Google Places Autocomplete with Map

A React Native application that integrates Google Places Autocomplete with Google Maps. 
Users can search for places using an autocomplete input field, and the selected location is displayed on a Google Map.
The application also stores search history in Redux.

### Features

- Autocomplete search for places using the Google Places API.
- Select a place from the autocomplete suggestions.
- Display the selected place on a map.
- Handle errors in fetching suggestions or place details.
- Uses Redux for state management to store suggestions and handle errors.


### Requirements

- Node.js >=18
- Google Places API key
- react" 18.3.1",
- react-native "0.75.3",

### Libraries Used

- `React Native`: A framework that allows you to build natively-rendered mobile apps for iOS and Android.
- `Google Maps API`: For rendering maps and places.
- `Google Places API`: For fetching place autocomplete suggestions.
- `Redux/toolkit`: For store search history

### Installation

- Clone the Github repository
- Navigate to Project directory
- Run `npm install` to install packages

### Run the Application

Once everything is set up, run the application:
For iOS:
- `npx react-native run-ios`

For Android:
- `npx react-native run-android`

### Usage
- Launch the application.
- In the search bar, start typing the name of a place.
- Suggestions will appear as you type.
- Select a place from the list to view its location on the map.
- The map will update to center on the selected place.

  
## Redux Store Setup
The application uses Redux for state management, including actions and reducers to manage the place suggestions and error handling.

### Actions
Actions related to suggestions and errors are defined in redux/actions.js:

`setSuggestions(suggestions)`
`setError(errorMessage)`

### Reducer
The reducer to handle the state is in redux/reducer.js, which manages:

suggestions: An array of place suggestions.
error: Error messages related to the API calls.

### Store
The Redux store is set up in redux/store.js and includes redux-thunk middleware to handle asynchronous API calls.

### Google Places API
This application utilizes the Google Places API for place autocomplete suggestions and fetching place details, such as location (latitude, longitude) for displaying on the map.

### Services
All API-related logic has been abstracted into the services/googlePlacesService.js file. This includes:

`fetchPlaceSuggestions(query)`: Fetches autocomplete suggestions based on the user's input.

`fetchPlaceDetails(placeId)`: Fetches detailed information about a selected place, including its location.
