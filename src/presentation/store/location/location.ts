import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { LocationMarker } from "../../../domain";
import { RootState } from "../index";

const locationsAdapter = createEntityAdapter({
  selectId: (location: LocationMarker) => location.id,
});

const locationSlice = createSlice({
  name: "location",
  initialState: locationsAdapter.getInitialState(),
  reducers: {
    locationUpdated: locationsAdapter.updateOne,
    locationsReceived(state, action: PayloadAction<LocationMarker[]>) {
      locationsAdapter.setAll(state, action.payload);
    },
    setLocationActive(state, action: PayloadAction<{ locationId: number }>) {
      const { locationId } = action.payload;
      const locations = locationsAdapter.getSelectors().selectAll(state);
      const locationsFormatted = locations.map((location) => ({
        id: location.id,
        changes: { isActive: locationId === location.id },
      }));

      locationsAdapter.updateMany(state, locationsFormatted);
    },
    setLocationsActive(
      state,
      action: PayloadAction<{ driverId: number | null }>,
    ) {
      const { driverId } = action.payload;
      const locations = locationsAdapter.getSelectors().selectAll(state);
      const locationsFormatted = locations.map((location) => ({
        id: location.id,
        changes: { isActive: driverId === location.driverIdAssigned },
      }));

      locationsAdapter.updateMany(state, locationsFormatted);
    },
  },
});

export const {
  selectAll: selectAllLocations,
  selectById: selectLocationById,
  selectIds: selectLocationIds,
} = locationsAdapter.getSelectors<RootState>((state) => state.location);

export const {
  locationsReceived,
  locationUpdated,
  setLocationActive,
  setLocationsActive,
} = locationSlice.actions;

export default locationSlice.reducer;
