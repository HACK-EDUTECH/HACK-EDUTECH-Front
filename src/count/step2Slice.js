import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: []
  };
  
export const step2Slice = createSlice({
    name: "step2",
    initialState,
    reducers: {

        setStep2: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const { setStep2 } = step2Slice.actions;
export default step2Slice;