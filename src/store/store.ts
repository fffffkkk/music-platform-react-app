import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import {userReducer} from "@/store/user/user.slice";

export const rootReducer = combineReducers({
	user: userReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => {
	// 	getDefaultMiddleware().concat()
	// }
})

setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>;
