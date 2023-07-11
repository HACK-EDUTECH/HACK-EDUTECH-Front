import { createSlice } from '@reduxjs/toolkit';

export const step1Slice = createSlice({
    name: "step1",
    initialState: { value: []},
    reducers: {
        setStep1: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setStep1 } = step1Slice.actions;
export default step1Slice;