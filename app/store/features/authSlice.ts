
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface LoginPayload {
  identifier: string;
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

export const getUserByEmail = createAsyncThunk(
  'auth/getUserByEmail',
  async (email: string) => {
    const response = await fetch(`https://host.mraix.com/api/v2/auth/getUserByEmail/${email}`);
    const data = await response.json();
    return data.data;
  }
);

export const getAllCompanies = createAsyncThunk(
  'auth/getAllCompanies',
  async (email: string) => {
    const response = await fetch(`https://host.mraix.com/api/v2/company/getAllCompaniesByEmail?email=${email}`);
    const data = await response.json();
    return data.companies;
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginPayload) => {
    const response = await fetch('https://host.mraix.com/api/v2/auth/login', {
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
          action: action.payload.action,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(getUserByEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserByEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          ...state.user,
          username: action.payload?.username || '',
          userid: action.payload?.userid || '',
          phone: action.payload?.phone || '',
          isverified: action.payload?.isverified || false,
          ispartner: action.payload?.ispartner || false,
          iscustomer: action.payload?.iscustomer || false,
          issuperadmin: action.payload?.issuperadmin || false,
          isadmin: action.payload?.isadmin || false,
          licensenumber: action.payload?.licensenumber || '',
          action: action.payload?.action || { isactive: false, ismodify: false, isdelete: false }
        };
      })
      .addCase(getUserByEmail.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAllCompanies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
      })
      .addCase(getAllCompanies.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
