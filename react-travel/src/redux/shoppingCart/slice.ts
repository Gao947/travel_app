import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ShoppingCartState {
    loading: boolean;
    error: string | null;
    items: any[];
}

const initialState: ShoppingCartState = {
    loading: true,
    error: null,
    items: [],
};

export const getShoppingCart: any = createAsyncThunk(
    "shoppingCart/getShoppingCart",
    async (jwt: string, thunkAPI) => {
        const { data } = await axios.get(
            `http://123.56.149.216:8080/api/shoppingCart`,
            {
                headers : {
                    Authorization: `bearer ${jwt}`
                }
            }
        );
        return data.shoppingCartItems;
    }
);

export const addShoppingCartItem: any = createAsyncThunk(
    "shoppingCart/addShoppingCartItem",
    async (paramaters: {jwt: string, touristRouteId: string}, thunkAPI) => {
        const { data } = await axios.post(
            `http://123.56.149.216:8080/api/shoppingCart/items`,
            {
                touristRouteId: paramaters.touristRouteId
            }
            ,
            {
                headers : {
                    Authorization: `bearer ${paramaters.jwt}`
                }
            }
        );
        return data.shoppingCartItems;
    }
);

export const checkout: any = createAsyncThunk(
    "shoppingCart/checkout",
    async (jwt: string, thunkAPI) => {
        const { data } = await axios.post(
            `http://123.56.149.216:8080/api/shoppingCart/checkout`,
            null,
            {
                headers : {
                    Authorization: `bearer ${jwt}`
                }
            }
        );
        return data;
    }
);

export const clearShoppingCartItem: any = createAsyncThunk(
    "shoppingCart/clearShoppingCartItem",
    async (paramaters: { jwt: string, itemIds: number[] }, thunkAPI) => {
        return await axios.delete(
            `http://123.56.149.216:8080/api/shoppingCart/items/(${paramaters.itemIds.join(',')})`,
            {
                headers : {
                    Authorization: `bearer ${paramaters.jwt}`
                }
            }
        );
    }
);

export const shoppingCartSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: { },
    extraReducers: {
        [getShoppingCart.pending.type]: (state) => {
            //   return { ...state, loading: true }; //???????????????????????????????????????state?????????????????????state?????????????????????loading???
            state.loading = true;
        },
        [getShoppingCart.fulfilled.type]: (state, action) => {
            state.items= action.payload;
            state.error = null;
            state.loading = false;
        },
        [getShoppingCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
            // const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
        [addShoppingCartItem.pending.type]: (state) => {
            //   return { ...state, loading: true }; //???????????????????????????????????????state?????????????????????state?????????????????????loading???
            state.loading = true;
        },
        [addShoppingCartItem.fulfilled.type]: (state, action) => {
            state.items= action.payload;
            state.error = null;
            state.loading = false;
        },
        [addShoppingCartItem.rejected.type]: (state, action: PayloadAction<string | null>) => {
            // const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
        [clearShoppingCartItem.pending.type]: (state) => {
            //   return { ...state, loading: true }; //???????????????????????????????????????state?????????????????????state?????????????????????loading???
            state.loading = true;
        },
        [clearShoppingCartItem.fulfilled.type]: (state) => {
            state.items= [];
            state.error = null;
            state.loading = false;
        },
        [clearShoppingCartItem.rejected.type]: (state, action: PayloadAction<string | null>) => {
            // const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
        [checkout.pending.type]: (state) => {
            //   return { ...state, loading: true }; //???????????????????????????????????????state?????????????????????state?????????????????????loading???
            state.loading = true;
        },
        [checkout.fulfilled.type]: (state, action) => {
            state.items= [];
            state.error = null;
            state.loading = false;
        },
        [checkout.rejected.type]: (state, action: PayloadAction<string | null>) => {
            // const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
    },
},
});