import { legacy_createStore as createStore, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { productSearchSlice } from "./productSearch/slice"; 
import { userSlice } from "./user/slice";

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: userSlice.reducer
})

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog], //以列表形式返回所有中间件
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;

//export type AppDispatch = typeof store.dispatch;

export default store;