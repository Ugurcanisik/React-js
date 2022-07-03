import {configureStore} from "@reduxjs/toolkit";
import CiroSlice from "./CiroSlice/CiroSlice";
import UsersSlice from "./UsersSlice/UsersSlice";
import AuthSlice from "./AuthSlice/AuthSlice";


const store = configureStore({
    reducer: {
        ciro: CiroSlice,
        users: UsersSlice,
        auth: AuthSlice
    },
})


export default store