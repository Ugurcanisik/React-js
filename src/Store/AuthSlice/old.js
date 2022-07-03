






import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {createBrowserHistory} from 'history';
import {Auth} from "../../Views/Auth/Auth";
import {Api} from "../../Api/Api";
import {Dashboard} from "../../Views/Dashboard/Dashboard";

export const browserHistory = createBrowserHistory();


// export const initAuth = createAsyncThunk(
//     "auth/initAuth",
//     async () => {
//         const token = localStorage.getItem('token')
//         return await axios.get('http://localhost:3001/auth/' + token)
//             .then(async response => {
//                 return response.data
//             })
//     }
// );

export const initAuth = () => {
    return async dispatch => {
        const token = localStorage.getItem('token')
        return await axios.get('http://localhost:3001/auth/' + token)
            .then(async response => {
                // console.log(response.data)
                dispatch(login(response.data))
            })
            .catch(e => {
                console.log(e)
            })


    }
}


export const Login = createAsyncThunk(
    "auth/Login",
    async (user) => {
        return await axios.post('http://localhost:3001/auth/', user)
            .then(response => {
                return response.data
            })
            .catch(e => {
                console.log(e)
            })
    }
);


const initialState = {
    user: null,
    token: null,
    isAuth: false
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        findUser: (state, {payload}) => {
            state.findUser = []
            state.users.filter(element => {
                if (element.id === payload.id) {
                    state.findUser.push(element)
                }
            })
        },
        login: (state, action) => {
            const user = action.payload
            if (user !== false) {
                console.log(user)
                state.user = user
                state.isAuth = true
                state.token = user.token
                localStorage.setItem('token', user.token)
                // browserHistory.push('/dashboard', Dashboard)
            } else {
                console.log('hata')
            }
        },
        logout: (state, action) => {
            state.user = null
            state.token = null
            state.isAuth = false
            localStorage.removeItem('token')
            browserHistory.push('/auth', Auth)
        },
    },
});


// export const getAllUsers = (state) => state.users;
export const {login, logout} = AuthSlice.actions
export default AuthSlice.reducer;