import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogDetails: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducer: {
    getSingleBlog: (state, action) => {
        console.log(action.payload)
      return {
        blogDetails: action.payload,
      };
    },
  },
  extraReducers: (builder) => {},
});
export const {getSingleBlog} = blogSlice.actions
export default blogSlice.reducer;
