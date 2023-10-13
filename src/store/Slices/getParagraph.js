import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getParagraph = createAsyncThunk(
  "paragraph/getParagraph",
  async ({ paragraphs, includeHTML }) => {
    const response = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&start-with-lorem=1&format=${includeHTML}}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
);

export const paragraphSlice = createSlice({
  name: "paragraph",
  initialState: {
    paragraphs: "",
    includeHTML: "text",
  },
  reducers: {
    // add reducers here
    changeIncludeHTML: (state,{payload}) => {
      state.includeHTML = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getParagraph.fulfilled, (state, action) => {
      state.paragraphs = action.payload;
    });
  },
});

export const { changeIncludeHTML } = paragraphSlice.actions;

export default paragraphSlice.reducer;
