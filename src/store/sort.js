import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
    name: 'sort',
    initialState: 'alphabetically',
    reducers: {
        setSort: (state, { payload }) => payload,
    }
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
