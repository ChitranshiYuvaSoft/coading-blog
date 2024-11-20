import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./authService.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    userToken: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLoginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.userToken = action.payload.token;
        localStorage.setItem("token", state.userToken);
        // state.userToken = action.payload
        state.isError = false;
      })
      .addCase(getLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export const getLoginUser = createAsyncThunk("GET/USER", async (userData) => {
  try {
    return await userLogin(userData);
  } catch (error) {
    console.log(error);
  }
});

export const getRegisterUser = createAsyncThunk(
  "AUTH/REGISTER",
  async (userData, thunkAPI) => {
    console.log(userData)
    try {
      return await userRegister(userData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default authSlice.reducer;
