import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
    loading: boolean;
    error: string | null;
    token: string | null;
}

const initialState: UserState = {
    loading: false,
    error: null,
    token: null
};

export const signIn: any = createAsyncThunk(
    "user/signIn",
    async (paramaters: {
        email: string,
        password: string,
    }, thunkAPI) => {
        const { data } = await axios.post(
            `http://123.56.149.216:8080/auth/login`,{
                email: paramaters.email,
                password: paramaters.password
            }
        );
        return data.token;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state)=>{
            state.token = null;
            state.error = null;
            state.loading = false;
        }
    },
    extraReducers: {
        [signIn.pending.type]: (state) => {
            //   return { ...state, loading: true }; //在函数中通过展开操作符利用state旧数据创建全新state对象，并且更新loading值
            state.loading = true;
        },
        [signIn.fulfilled.type]: (state, action) => {
            state.token = action.payload;
            state.error = null;
            state.loading = false;
        },
        [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
            // const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
    }
})