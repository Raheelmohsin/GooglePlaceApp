import { createSlice } from '@reduxjs/toolkit';

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    suggestions: [],
    error: null,
  },
  reducers: {
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSuggestions, setError } = placesSlice.actions;
export default placesSlice.reducer;
