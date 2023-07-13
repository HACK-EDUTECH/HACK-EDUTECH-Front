import { createSlice } from '@reduxjs/toolkit';

export const wordSlice = createSlice({
    name: "word",
    initialState: { value: {}},
    reducers: {
        setWord: (state, action) => {
            state.value = action.payload
        },

    },
});

export const { setWord } = wordSlice.actions;
export default wordSlice;