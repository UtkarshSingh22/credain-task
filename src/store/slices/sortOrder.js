import { createSlice } from "@reduxjs/toolkit";

// 0 - not sorted, 1 - asc, 2 - desc
const initialState = {
    transactionDate: 0,
    invoiceNo: 0,
    payer: 0,
    payee: 0,
    amount: 0,
    status: 0,
};

const sortOrderSlice = createSlice({
    name: "sortOrder",
    initialState,
    reducers: {
        updateOrder(state, action) {
            const sortBy = action.payload;
            const currentOrder = state[sortBy];
            const newOrder = currentOrder < 2 ? currentOrder + 1 : 1;
            console.log(sortBy, currentOrder);
            return {
                ...state,
                [sortBy]: newOrder,
            };
        },
        default(state) {
            return state;
        },
    },
});

export const sortOrderSliceActions = sortOrderSlice.actions;

export default sortOrderSlice.reducer;
