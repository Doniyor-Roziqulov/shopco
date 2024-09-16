import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

export const store = configureStore({
    reducer: {
        // wishlist: wishlistSlice,
        // cart: cartSlice,
        // token,
        // profile,
        [api.reducerPath]: api.reducer, // caching
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
