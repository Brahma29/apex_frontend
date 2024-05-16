import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        addVehicle(state, action) {
            const { name, positionX, positionY, speed, direction } = action.payload;
            state.push({ id: Math.ceil(Math.random()), name, positionX, positionY, speed, direction })
        },
    }
})

export const { addVehicle } = vehiclesSlice.actions

export default vehiclesSlice.reducer