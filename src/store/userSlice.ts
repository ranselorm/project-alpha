import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Admin {
  userId: string;
  name: string;
  email: string;
  nickname: string;
  picture: string;
  role: string;
}

interface User {
  userId: string;
  name: string;
  email: string;
  phone: string;
  sponsorId?: string;
}

interface UserState {
  user: Admin | null;
  token: string | null;
  isLoggedIn: boolean;
  users: User[]; // ✅ Store multiple users globally
}

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  users: [], // ✅ Initialize empty users array
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ user: UserState["user"]; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.users = []; // ✅ Clear users on logout
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload; // ✅ Store users globally
    },
  },
});

export const { login, logout, setUsers } = userSlice.actions;
export default userSlice.reducer;
