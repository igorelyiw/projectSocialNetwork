import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { commentsAPI, postsAPI } from '../api/api'

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (id) => {
    return postsAPI.getPosts(id);
  }
)
export const createPost = createAsyncThunk(
  'posts/createPost',
  async (values) => {
    return postsAPI.createPost(values)
  }
)
export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId) => {
    return commentsAPI.deletePost(postId);
  }
)
export const getPost = createAsyncThunk(
  'posts/getPost',
  async (postId) => {
    return commentsAPI.getPost(postId);
  }
)
export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (postId, values) => {
    return postsAPI.updatePost(postId, values);
  }
)
export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isFetching: false,
    selectPost: []
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isFetching = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload
      state.isFetching = false
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload)
    },
    [getPost.fulfilled]: (state, action) => {
      state.selectPost = action.payload
    },
    [deletePost.pending]: (state, action) => {
      state.selectPost = []
    },
    [updatePost.fulfilled]: (state, action) => {
      state.selectPost = action.payload
    }
  }
})

export default postsSlice.reducer