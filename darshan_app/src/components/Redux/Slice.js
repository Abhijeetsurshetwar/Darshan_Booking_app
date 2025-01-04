import { createSlice } from "@reduxjs/toolkit";

const initialState = { // Corrected spelling
    userinfo: {
        userName: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        email: "",
        contactNo: ""
    },
    logginstate: {
        loggedstatus: false
    }
};

const userSlice = createSlice({
    name: "user",
    initialState, 
    reducers: {
        Login: (state, action) => {
            state.userinfo = action.payload;
            state.logginstate.loggedstatus = true; 
        },
        Logout: (state) => {
            state.userinfo = {};
            state.logginstate.loggedstatus = false;
        }
    }
});

export const { Login, Logout } = userSlice.actions; // Component
export default userSlice.reducer; // Store
