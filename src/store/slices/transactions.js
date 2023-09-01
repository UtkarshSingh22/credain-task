import { createSlice } from "@reduxjs/toolkit";
import sortTransactions from "../../utils/sortItems";

const transactionData = [
    {
        transactionDate: "15/08/2023",
        invoiceNo: "ILC3XQ",
        payer: "Green Kaya Limited",
        payerCountry: "India",
        payee: "Green Kaya Limited",
        payeeCountry: "Canada",
        amount: 245000,
        status: 1,
    },
    {
        transactionDate: "23/07/2023",
        invoiceNo: "ILC3XQ",
        payer: "Green Kaya Limited",
        payerCountry: "Canada",
        payee: "Tiositiz Public Joint",
        payeeCountry: "USA",
        amount: 210000,
        status: 2,
    },
    {
        transactionDate: "10/09/2023",
        invoiceNo: "ILC3XQ",
        payer: "Green Kaya Limited",
        payerCountry: "USA",
        payee: "Green Kaya Limited",
        payeeCountry: "India",
        amount: 445000,
        status: 3,
    },
    {
        transactionDate: "05/06/2023",
        invoiceNo: "ILC3XQ",
        payer: "Sun Pharma Limited",
        payerCountry: "USA",
        payee: "Green Kaya Limited",
        payeeCountry: "Canada",
        amount: 215000,
        status: 1,
    },
    {
        transactionDate: "18/04/2023",
        invoiceNo: "ILC3XQ",
        payer: "Sun Pharma Limited",
        payerCountry: "India",
        payee: "Sun Pharma Limited",
        payeeCountry: "USA",
        amount: 205000,
        status: 2,
    },
    {
        transactionDate: "30/03/2023",
        invoiceNo: "ILC3XQ",
        payer: "Sun Pharma Limited",
        payerCountry: "India",
        payee: "Green Kaya Limited",
        payeeCountry: "Canada",
        amount: 800000,
        status: 3,
    },
];

// Creating a transactions slice
const transactionSlice = createSlice({
    name: "transactions",
    initialState: transactionData,
    reducers: {
        updateTransactions(state, action) {
            const { sortBy, order } = action.payload;
            const newTransactions = sortTransactions(state, sortBy, order);
            return newTransactions;
        },
        editTransaction(state, action) {
            const newTransaction = action.payload;
            return state.forEach((item, index) => {
                if (
                    item.transactionDate === newTransaction.transactionDate &&
                    item.invoiceNo === newTransaction.invoiceNo
                ) {
                    const updatedTransaction = newTransaction;
                    updatedTransaction.amount = +updatedTransaction.amount;
                    updatedTransaction.status = +updatedTransaction.status;
                    state[index] = updatedTransaction;
                }
            });
        },
        default(state) {
            return state;
        },
    },
});

export const transactionSliceActions = transactionSlice.actions;

export default transactionSlice.reducer;
