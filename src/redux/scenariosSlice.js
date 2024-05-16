import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const scenarioSlice = createSlice({
    name: 'scenarios',
    initialState,
    reducers: {
        addScenario(state, action) {
            const { name, time } = action.payload;
            state.push({ id: Math.ceil(Math.random()), name, time, noOfVehicles: 0 })
        },
        deleteScenario(state, action) {
            const { id } = action.payload;
            return state.filter(s => s.id !== id);
        },
        updateScenario(state, action) {
            const { name, time, noOfVehicles, id } = action.payload;

            const index = state.findIndex(scenario => scenario.id === id);

            if (index !== -1) {
                const updatedScenario = {
                    ...state[index],
                    name,
                    time,
                    noOfVehicles: noOfVehicles || 0,
                };

                return [
                    ...state.slice(0, index),
                    updatedScenario,
                    ...state.slice(index + 1),
                ];
            } else {
                console.error(`Scenario with ID ${id} not found for update`);
                return state;
            }
        }
    }
})

export const { addScenario, deleteScenario } = scenarioSlice.actions

export default scenarioSlice.reducer