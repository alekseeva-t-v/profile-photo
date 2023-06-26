import { createSlice } from '@reduxjs/toolkit';

const initialState = { lastFotoName: '', lastFotoURL: '', fotoList: [] };

const fotoSlice = createSlice({
  name: 'foto',
  initialState: initialState,
  reducers: {
    addLastFotoName(state, action) {
      state.lastFotoName = action.payload;
    },

    addLastFotoURL(state, action) {
      state.lastFotoURL = action.payload;
    },

    addLastFotoItem(state) {
      state.fotoList = [...state.fotoList, { fotoName: state.lastFotoName, fotoURL: state.lastFotoURL}];
    },
  },
});

export const fotoActions = fotoSlice.actions;

export default fotoSlice;
