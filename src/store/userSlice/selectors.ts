import { RootState } from 'store';

export const selectUsername = (state: RootState) => state.user.username;

export const selectErrorMessage = (state: RootState) => state.user.errorMessage;
