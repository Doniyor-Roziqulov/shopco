import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import wishlist from "./wishlist";
import cart from "./cart";

export const store = configureStore({
    reducer: {
        wishlist,
        cart,
        // token,
        // profile,
        [api.reducerPath]: api.reducer, // caching
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
