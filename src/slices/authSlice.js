import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
    user: "",
    token: "",
    loading: false
}

export const loginUser = createAsyncThunk('user', async (body) => {
    let res = await fetch("http://167.172.69.47:5000/api/user/login", {
        method: 'post',
        header: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})

const authSlice = createSlice({
    name: "userauth",
    initialState,
    reducers: {
        pending: (state, action) => {
            state.loading = true
        },
        fulfilled: (state, { payload: user, token }) => {
            state.token = token;
            state.user = user
            localStorage.setItem("token", JSON.stringify(token))
            localStorage.setItem("user", JSON.stringify(user))
        },
        rejected: (state, action) => {
            state.loading = true
        },
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser: (state, action) => {
            state.token = localStorage.getItem("user")
        }
    }


})
export const { addToken, addUser,pending,fulfilled,rejected } = authSlice.actions;
export default authSlice.reducer;