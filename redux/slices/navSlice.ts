import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface NavState {
  isShowNavbar: boolean;
}

// Define the initial state using that type
const initialState: NavState = {
  isShowNavbar: false,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setIsShowNavbar: (state, action: PayloadAction<boolean>) => {
      state.isShowNavbar = action.payload;
    },
  },
});

export const { setIsShowNavbar } = navSlice.actions;
export default navSlice.reducer;
