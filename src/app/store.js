import { configureStore } from "@reduxjs/toolkit";
import CarReducer from '../features/Car/carSlice'



export const store = configureStore({
    reducer: {
        car : CarReducer
    }
}) 