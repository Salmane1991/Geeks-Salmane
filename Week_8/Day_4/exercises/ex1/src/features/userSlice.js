import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    error: null
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  }
});

export const { setUser, setError } = userSlice.actions;
export default userSlice.reducer;