import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAsyncUser = createAsyncThunk(
    "user/fetchAsyncUser",
    async () => {
        const response = await axios.get('http://localhost:3001/users')
        return response.data;
    }
);

export const addAsyncUser = createAsyncThunk(
    "user/addAsyncUser",
    async (payload) => {
        const response = await axios.post('http://localhost:3001/users', payload)
        console.log(response.data)
        return response.data;
    }
);

export const updateUserAsync= createAsyncThunk(
    "user/updateUserAsync",
    async (payload) => {
        const response = await axios.patch('http://localhost:3001/users/' + payload.id, payload)
        return {response: response.data, payload};
    }
);

export const deleteUserAsyncUser = createAsyncThunk(
    "user/deleteUserAsyncUser",
    async (id) => {
        const response = await axios.delete('http://localhost:3001/users/' + id,)
        return {response: response.data, id};
    }
);

const initialState = {
    users: [],
    findUser: []
};

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        findUser: (state, {payload}) => {
            state.findUser= []
            state.users.filter(element => {
                if (element.id === payload.id) {
                    state.findUser.push(element)
                }
            })
        },
    },
    extraReducers: {
        // [fetchAsyncCiro.pending]: () => {
        //     console.log("Pending");
        // },
        [fetchAsyncUser.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            const users = [...state.users]
            payload.forEach(element => {
                users.push(element)
            })
            return {...state, users: users}
        },
        // [fetchAsyncCiro.rejected]: () => {
        //     console.log("Rejected!");
        // },
        [addAsyncUser.fulfilled]: (state, {payload}) => {
            const newUser = [...state.users]
            newUser.push(payload)
            return {
                ...state, users: newUser
            };
        },
        // [addAsyncCiro.rejected]: () => {
        //     console.log("Rejected!");
        // },
        [deleteUserAsyncUser.fulfilled]: (state, {payload}) => {
            // console.log(payload)
            const newUser = [...state.users]

            for (let i = 0; i < newUser.length; i++) {
                if (newUser[i].id === payload.id) {
                    let index = newUser.indexOf(newUser[i])
                    newUser.splice(index, 1)
                }
            }
            return {
                ...state, users: newUser
            };
        },
        [updateUserAsync.fulfilled]: (state, {payload}) => {

            const updateUser = payload.payload

            const newUser = [...state.users]

            for (let i = 0; i < newUser.length; i++) {
                if (newUser[i].id === updateUser.id) {
                    newUser[i] = {...updateUser}
                }
            }

            return {
                ...state, users: newUser
            };
        },


    },
});


export const getAllUsers = (state) => state.users;
export const {findUser} = UserSlice.actions
export default UserSlice.reducer;