import { configureStore } from "@reduxjs/toolkit";
import  paragraphSlice  from "./Slices/getParagraph";

export const store = configureStore({
  reducer: {
    // add reducers here
    paragraph:paragraphSlice,
  },
});
