import { configureStore } from "@reduxjs/toolkit";
import { mobileReducer } from "./MobileReducer";


//Store
export const store = configureStore({ reducer: mobileReducer })