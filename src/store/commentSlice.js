import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { commentsAPI } from '../api/api'

export const getComments = createAsyncThunk(
  'comment/getComments',
  async (postId) => {
    return commentsAPI.getComments(postId);
  }
)
export const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: [],
    isFetching: false,
  },
  extraReducers: {
    [getComments.pending]: (state) => {
      state.isFetching = true;
    },
    [getComments.fulfilled]: (state, action) => {
      state.comments = action.payload
      state.isFetching = false
    },
  }
})

export default commentSlice.reducer