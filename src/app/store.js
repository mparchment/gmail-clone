import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailslice"
import userReducer from "../features/userSlice"

export default configureStore({
    reducer: {
        mail: mailReducer,
        user: userReducer,
    }
});