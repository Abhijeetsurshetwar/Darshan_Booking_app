import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice.js"

export default configureStore ({
    
    reducer : {
        user : userReducer
    }
})

