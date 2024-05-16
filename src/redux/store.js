import { configureStore } from '@reduxjs/toolkit'
import scenariosSlice from './scenariosSlice'
import vehiclesSlice from './vehiclesSlice'

export const store = configureStore({
    reducer: {
        scenarios: scenariosSlice,
        vehicles: vehiclesSlice
    }
})