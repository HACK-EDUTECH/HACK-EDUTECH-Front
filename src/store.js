import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./count/counterSlice";
import step1Slice from "./count/step1Slice";
import step2Slice from "./count/step2Slice";

export default configureStore({
    reducer: {
        word: wordSlice.reducer,
        step1: step1Slice.reducer,
        step2: step2Slice.reducer,
    },
});
