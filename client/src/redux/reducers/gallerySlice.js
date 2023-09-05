import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialValues = {
  images: [],
  categories: [],
};

export const getAllImages = createAsyncThunk(
  "images/fetchallimages",
  async () => {
    const res = await axios.get("http://localhost:5000/api/v1/get/allimages");
    return res.data;
  }
);

export const getAllCategories = createAsyncThunk(
  "images/fetchallcategories",
  async () => {
    const res = await axios.get(
      "http://localhost:5000/api/v1/get/allcategories"
    );
    return res.data;
  }
);

export const addNewCategory = createAsyncThunk(
  "images/addnewcategory",
  async (payload) => {
    const res = await axios.post(
      "http://localhost:5000/api/v1/add/category",
      payload
    );
    return res.data;
  }
);

export const addNewImage = createAsyncThunk(
  "images/addnewimage",
  async (payload) => {
    const res = await axios.post(
      "http://localhost:5000/api/v1/upload/image",
      payload
    );
    return res.data;
  }
);

export const getSingleImage = createAsyncThunk(
  "images/getsingleimage",
  async (payload) => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/get/singleimage?category=${payload}`,
      payload
    );
    return res.data;
  }
);
const gallerySlice = createSlice({
  name: "galleryslice",
  initialState: initialValues,
  reducers: {},
  extraReducers: {
    [getAllImages.fulfilled]: (state, action) => {
      state.images = action.payload;
    },
    [getAllCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [getSingleImage.fulfilled]: (state, action) => {
      state.images = action.payload;
    },
  },
});

export default gallerySlice.reducer;
