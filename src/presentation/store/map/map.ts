import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Driver, LocationMarker } from "../../../domain";

export interface MapState {
  drivers: Driver[];
  isLoading: boolean;
  selectedLocation: LocationMarker | null;
}

const initialState: MapState = {
  drivers: new Array<Driver>(),
  isLoading: false,
  selectedLocation: null,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setDrivers(state, action: PayloadAction<Array<Driver>>) {
      state.drivers = action.payload;
      state.isLoading = false;
    },
    setSelectedLocation(state, action: PayloadAction<LocationMarker | null>) {
      state.selectedLocation = action.payload;
    },
  },
  selectors: {
    getSelectedLocation(state) {
      return state.selectedLocation;
    },
  },
});

export const { setDrivers, setSelectedLocation } = mapSlice.actions;

export const { getSelectedLocation } = mapSlice.selectors;

export default mapSlice.reducer;
