// Store is like a mini temporary in-middle database
import { configureStore } from "@reduxjs/toolkit";
import reducer  from "./slices/RootSlice";

export const store = configureStore({
   reducer: {
      
   },
   devTools: true, 
}) 
