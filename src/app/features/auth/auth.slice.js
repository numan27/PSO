import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";

// Get user from localStorage
const pprUser = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: pprUser || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  isLoggedIn: false,
};

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await authService.login(data);
      // if (response.succeeded === true) {
      //   if (notifyToaster) {
      //     notifyToaster();
      //   }
      // } else {
      //   notifyToaster(response.message, "error");
      // }
      return response
    } catch (error) {
      // notifyToaster(error.message, "error");
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isSuccess = false;
    },
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
