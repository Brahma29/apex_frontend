import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";

const initialState = {
    loading: false,
    vehicles: [],
    error: null,
};

const myHeaders = {
    headers: new Headers().append("Content-Type", "application/json"),
};

export const fetchVehicles = createAsyncThunk(
    "vehicles/fetchVehicles",
    async () => {
        const response = await AxiosInstance.get("/vehicles");
        return response.data;
    }
);


export const createNewVehicle = createAsyncThunk(
    "vehicles/createVehicle",
    async ({ name, positionX, positionY, speed, direction, scenario }) => {
        const response = await AxiosInstance.post(
            "/vehicles",
            { name, positionX, positionY, speed, direction, scenario },
            { headers: myHeaders }
        );
        return response.data;
    }
);

export const updateVehicle = createAsyncThunk(
    "vehicles/updateVehicle",
    async ({ id, name, positionX, positionY, speed, direction, scenario }) => {
        const response = await AxiosInstance.put(
            `/vehicles/${id}`,
            { name, positionX, positionY, speed, direction, scenario },
            { headers: myHeaders }
        );
        return response.data;
    }
);

export const deleteVehicle = createAsyncThunk(
    "vehicles/deleteVehicle",
    async ({ id }) => {
        const response = await AxiosInstance.delete(`/vehicles/${id}`);
        return response.data;
    }
);

export const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers: {}, extraReducers: (builder) => {
        builder
            .addCase(createNewVehicle.pending, (state, _action) => {
                return { ...state, loading: true };
            })
            .addCase(createNewVehicle.fulfilled, (state, action) => {
                return { ...state, loading: false, success: action.payload.success };
            })
            .addCase(createNewVehicle.rejected, (state, action) => {
                return { ...state, loading: false, error: action.error.message, success: action.payload.success };
            })
            .addCase(updateVehicle.pending, (state, _action) => {
                return { ...state, loading: true };
            })
            .addCase(updateVehicle.fulfilled, (state, action) => {
                return { ...state, loading: false, success: action.payload.success };
            })
            .addCase(updateVehicle.rejected, (state, action) => {
                return { ...state, loading: false, error: action.error.message, success: action.payload.success };
            })
            .addCase(fetchVehicles.pending, (state, _action) => {
                return { ...state, loading: true };
            })
            .addCase(fetchVehicles.fulfilled, (state, action) => {
                return { ...state, loading: false, vehicles: action.payload.vehicles, success: action.payload.success };
            })
            .addCase(fetchVehicles.rejected, (state, action) => {
                return { ...state, loading: false, error: action.error.message, success: action.payload.success };
            })
            .addCase(deleteVehicle.pending, (state, _action) => {
                return { ...state, loading: true };
            })
            .addCase(deleteVehicle.fulfilled, (state, action) => {
                return { ...state, loading: false, success: action.payload.success };
            })
            .addCase(deleteVehicle.rejected, (state, action) => {
                return { ...state, loading: false, error: action.error.message, success: action.payload.success };
            })
    }
});

export default vehiclesSlice.reducer;
