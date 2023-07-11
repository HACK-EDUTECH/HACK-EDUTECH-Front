import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./count/counterSlice";
import step1Slice from "./count/step1Slice";

export default configureStore({
    reducer: {
        word: wordSlice.reducer,
        step1: step1Slice.reducer,
    },
});
