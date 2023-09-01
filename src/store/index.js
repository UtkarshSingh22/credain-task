import { configureStore } from "@reduxjs/toolkit";

import transactionReducer from "./slices/transactions";
import sortOrderReducer from "./slices/sortOrder";

// Configuring a redux store
const store = configureStore({
    reducer: { transactions: transactionReducer, sortOrder: sortOrderReducer },
});

export default store;
