import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {Api} from "../../Api/Api";


export const fetchAsyncCiro = createAsyncThunk(
    "ciro/fetchAsyncCiro",
    async () => {
        return await Api.get('/ciro')
            .then(response => {
                // console.log(response)
                return response.data
            })
            .catch(e => {
                console.log(e)
                return e
            })
    }
);

export const addAsyncCiro = createAsyncThunk(
    "ciro/addAsyncCiro",
    async (payload) => {
        return await Api.post('/ciro', payload)
            .then(response => {
                console.log(response)
                payload.id = response.data.id
                return payload;
            })
            .catch(e => {
                console.log(e)
                return e
            })

    }
);

export const updateCiroAsyncCiro = createAsyncThunk(
    "ciro/updateCiroAsyncCiro",
    async (payload) => {
        const response = await Api.patch('/ciro/' + payload.id, payload)
        return {response: response.data, payload};
    }
);

export const deleteCiroAsyncCiro = createAsyncThunk(
    "ciro/deleteCiroAsyncCiro",
    async (id) => {
        const response = await Api.delete('/ciro/' + id)
        return {response: response.data, id};
    }
);

const initialState = {
    ciro: [],
    findCiro: []
};

const ciroSlice = createSlice({
    name: "ciro",
    initialState,
    reducers: {
        findCiro: (state, {payload}) => {
            state.findCiro = []
            state.ciro.filter(element => {
                if (element.id === payload.id) {
                    state.findCiro.push(element)
                }
            })
        },
    },
    extraReducers: {
        // [fetchAsyncCiro.pending]: () => {
        //     console.log("Pending");
        // },
        [fetchAsyncCiro.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            const Ciro = [...state.ciro]
            payload.forEach(element => {
                Ciro.push(element)
            })
            return {...state, ciro: Ciro}
        },
        // [fetchAsyncCiro.rejected]: () => {
        //     console.log("Rejected!");
        // },
        [addAsyncCiro.fulfilled]: (state, {payload}) => {
            const newCiro = [...state.ciro]
            newCiro.push(payload)
            return {
                ...state, ciro: newCiro
            };
        },
        // [addAsyncCiro.rejected]: () => {
        //     console.log("Rejected!");
        // },
        [deleteCiroAsyncCiro.fulfilled]: (state, {payload}) => {
            // console.log(payload)
            const newCiro = [...state.ciro]

            for (let i = 0; i < newCiro.length; i++) {
                if (newCiro[i].id === payload.id) {
                    let index = newCiro.indexOf(newCiro[i])
                    newCiro.splice(index, 1)
                }
            }
            return {
                ...state, ciro: newCiro
            };
        },
        [updateCiroAsyncCiro.fulfilled]: (state, {payload}) => {

            const updateCiro = payload.payload

            const newCiro = [...state.ciro]

            for (let i = 0; i < newCiro.length; i++) {
                if (newCiro[i].id === updateCiro.id) {
                    newCiro[i] = {...updateCiro}
                }
            }
            return {
                ...state, ciro: newCiro
            };
        },


    },
});


// export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.ciro;
// export const getAllShows = (state) => state.ciro;
// export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export const {findCiro} = ciroSlice.actions
export default ciroSlice.reducer;