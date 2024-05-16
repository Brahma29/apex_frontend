import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../API/AxiosInstance";

const initialState = {
    loading: false,
    scenarios: [],
    error: null,
    success: false
};

const myHeaders = {
    headers: new Headers().append("Content-Type", "application/json"),
}

export const fetchScenarios = createAsyncThunk(
    "scenarios/fetchScenarios",
    async () => {
        const response = await AxiosInstance.get("/scenarios");
        return response.data;
    }
);

export const createNewScenario = createAsyncThunk(
    "scenarios/createScenario",
    async ({ name, time }) => {
        const response = await AxiosInstance.post(
            "/scenarios",
            { name, time },
            { headers: myHeaders }
        );
        return response.data;
    }
);

export const updateScenario = createAsyncThunk('scenarios/updateScenario', async ({ id, name, time }) => {
    const response = await AxiosInstance.put(`/scenarios/${id}`, { name, time }, { headers: myHeaders })
    return response.data;
})

export const deleteScenario = createAsyncThunk('scenarios', async ({ id }) => {
    const response = await AxiosInstance.delete(`/scenarios/${id}`)
    return response.data;
})

export const scenarioSlice = createSlice({
    name: "scenarios",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchScenarios.pending, (state, _action) => {
                return { ...state, loading: true };
            })
            .addCase(fetchScenarios.fulfilled, (state, action) => {
                return { ...state, loading: false, scenarios: action.payload.scenarios, success: action.payload.success };
            })
            .addCase(fetchScenarios.rejected, (state, action) => {
                return { ...state, loading: false, error: action.error.message, success: action.payload.success };
            }).addCase(createNewScenario.pending, (state, _action) => {
                return { ...state, loading: true };
            })
            .addCase(createNewScenario.fulfilled, (state, action) => {
                return { ...state, loading: false, success: action.payload.success };
            })
            .addCase(createNewScenario.rejected, (state, action) => {
                return { ...state, loading: false, error: action.error.message, success: false };
            })
            .addCase(updateScenario.pending, (state, _action) => {
                return { ...state, loading: true };
            })
            .addCase(updateScenario.fulfilled, (state, action) => {
                return { ...state, loading: false, success: action.payload.success };
            })
            .addCase(updateScenario.rejected, (state, action) => {
                return { ...state, loading: false, error: action.error.message, success: action.payload.success };
            })
            .addCase(deleteScenario.pending, (state, _action) => {
                return { ...state, loading: true };
            })
            .addCase(deleteScenario.fulfilled, (state, action) => {
                return { ...state, loading: false, success: action.payload.success };
            })
            .addCase(deleteScenario.rejected, (state, action) => {
                return { ...state, loading: false, error: action.error.message, success: action.payload.success };
            })
    },
});


export default scenarioSlice.reducer;
