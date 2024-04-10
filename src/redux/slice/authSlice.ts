import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

interface IAuthState {
  authority: null | string;
}

const initialState: IAuthState = {
  authority: null,
};

/* eslint no-param-reassign: "error" */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const { authority } = action.payload;
      state.authority = authority;
    },
    REMOVE_ACTIVE_USER: (state) => {
      state.authority = null;
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;

export const selectAuthority = (state: RootState) => state.auth.authority;

export default authSlice.reducer;
