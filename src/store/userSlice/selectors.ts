import { RootState } from 'store';

export const selectErrorMessage = (state: RootState) => state.user.errorMessage;
