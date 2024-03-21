import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    email: null,
    password: null,
    id: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.token = action.payload.token;
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
            state.password = null;
            state.token = null;
        }

    }
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;