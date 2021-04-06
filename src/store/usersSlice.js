import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { usersAPI } from '../api/api'

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    return usersAPI.getUsers();
  }
)
export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isFetching: false,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isFetching = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload
      state.isFetching = false
    }
  }
})

export default usersSlice.reducer