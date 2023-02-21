import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { checkout } from "../shoppingCart/slice";

interface OrderState {
    loading: boolean;
    error: string | null;
    currentOrder: any;
}

const initialState: OrderState = {
    loading: false,
    error: null,
    currentOrder: null
};

export const placeOrder: any = createAsyncThunk(
    "order/placeOrder",
    async (paramaters : { jwt: string, orderId: string }, thunkAPI) => {
        const { data } = await axios.post(
            `http://123.56.149.216:8080/api/orders/${paramaters.orderId}/placeOrder`
        , null,{
            headers: {
                Authorization: `bearer ${paramaters.jwt}`
            },
        });
        return data;
    }
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        [placeOrder.pending.type]: (state) => {
            //   return { ...state, loading: true }; //在函数中通过展开操作符利用state旧数据创建全新state对象，并且更新loading值
            state.loading = true;
        },
        [placeOrder.fulfilled.type]: (state, action) => {
            state.currentOrder = action.payload;
            state.error = null;
            state.loading = false;
        },
        [placeOrder.rejected.type]: (state, action: PayloadAction<string | null>) => {
            // const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
        [checkout.pending.type]: (state) => {
            //   return { ...state, loading: true }; //在函数中通过展开操作符利用state旧数据创建全新state对象，并且更新loading值
            state.loading = true;
        },
        [checkout.fulfilled.type]: (state, action) => {
            state.currentOrder = action.payload;
            state.error = null;
            state.loading = false;
        },
        [checkout.rejected.type]: (state, action: PayloadAction<string | null>) => {
            // const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
    }
})