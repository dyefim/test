import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Auth } from 'services';

const initialState = {
  username: '',
  status: '',
  errorMessage: '',
};

export const signIn = createAsyncThunk(
  'user/signIn',
  async (credentials: Auth.Credentials) => {
    const response = await Auth.signIn(credentials);

    return response;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset(state) {
      state.username = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.username = payload.username;
        state.status = 'success';
      })
      .addCase(signIn.rejected, (state) => {
        state.status = 'error';
        state.errorMessage = 'Wrong password or username, please try again';
      });
  },
});

// export const { signIn } = userSlice.actions;

export default userSlice.reducer;
