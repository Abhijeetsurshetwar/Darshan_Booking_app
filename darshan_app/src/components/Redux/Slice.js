// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { // Corrected spelling
//     userinfo: {
//         uname: "",
//         password: "",
//         confirmPassword: "",
//        // age: "",
//        // gender: "",
//         email: "",
//        // contactNo: "",
//         did:""
//     },
//     logginstate: {
//         loggedstatus: false
//     }
// };

// const userSlice = createSlice({
//     name: "user",
//     initialState, 
//     reducers: {
//         Login: (state, action) => {
//             state.userinfo = action.payload;
//             state.logginstate.loggedstatus = true; 
//         },
//         Logout: (state) => {
//             state.userinfo = {};
//             state.logginstate.loggedstatus = false;
//         }
//     }
// });

// export const { Login, Logout } = userSlice.actions; // Component
// export default userSlice.reducer; // Store

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userinfo: {
        uname: "",
        email: "",
        roles: [],
        token: "",  // Added to store JWT token
        refreshToken: ""
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
            state.userinfo = {
                uname: "",
                email: "",
                roles: [],
                token: "",
                refreshToken: ""
            };
            state.logginstate.loggedstatus = false;
        }
    }
});

export const { Login, Logout } = userSlice.actions;
export default userSlice.reducer;
