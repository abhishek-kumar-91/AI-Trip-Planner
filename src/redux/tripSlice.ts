import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a single Trip type
export interface Trip {
  location: string;
  destination: string;
  mode: "train" | "flight" | "";
  trainFrom: string;
  trainTo: string;
  trainDate: string;
  trainPNR: string;
  trainTicketDetails: string;
  flightFrom: string;
  flightTo: string;
  flightDate: string;
  flightTicketNumber: string;
  flightDetails: string;
  budget: number;
  packaging: string[];
  createdAt: string;
}

// State holds an array of trips and a current trip being edited
interface TripState {
  trips: Trip[];
  currentTrip: Trip;
}

const emptyTrip: Trip = {
  location: "",
  destination: "",
  mode: "",
  trainFrom: "",
  trainTo: "",
  trainDate: "",
  trainPNR: "",
  trainTicketDetails: "",
  flightFrom: "",
  flightTo: "",
  flightDate: "",
  flightTicketNumber: "",
  flightDetails: "",
  budget: 0,
  packaging: [""],
  createdAt: "",
};

const initialState: TripState = {
  trips: [],
  currentTrip: { ...emptyTrip },
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setField: (
      state,
      action: PayloadAction<{ field: keyof Trip; value: any }>
    ) => {
      const { field, value } = action.payload;
      if (field === "mode" && ["train", "flight", ""].includes(value)) {
        state.currentTrip.mode = value as "train" | "flight" | "";
      } else {
        (state.currentTrip as any)[field] = value;
      }
    },

    addPackagingItem: (state) => {
      state.currentTrip.packaging.push("");
    },

    updatePackagingItem: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.currentTrip.packaging[action.payload.index] = action.payload.value;
    },

    saveTrip: (state) => {
      state.trips.push({ ...state.currentTrip, createdAt: new Date().toISOString() });
      state.currentTrip = { ...emptyTrip }; // reset after saving
    },

    resetCurrentTrip: (state) => {
      state.currentTrip = { ...emptyTrip };
    },
  },
});

export const {
  setField,
  addPackagingItem,
  updatePackagingItem,
  saveTrip,
  resetCurrentTrip,
} = tripSlice.actions;

export default tripSlice.reducer;
