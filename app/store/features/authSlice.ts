import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface LoginPayload {
  email: string;
  password: string;
}

interface AuthState {
  user: {
    email?: string;
    userid?: string;
    username?: string;
    phone?: string;
    isverified?: boolean;
    ispartner?: boolean;
    iscustomer?: boolean;
    issuperadmin?: boolean;
    isadmin?: boolean;
    licensenumber?: string;
    action?: {
      isactive: boolean;
      ismodify: boolean;
      isdelete: boolean;
    };
  };
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  companies: any[];
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  companies: [],
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginPayload) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!data.status) {
      throw new Error(data.message || 'Login failed');
    }
    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = {
          email: action.payload.email,
          userid: action.payload.userid,
          username: action.payload.username,
          action: action.payload.action
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;