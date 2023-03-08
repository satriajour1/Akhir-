import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    score: '',
}

export const userSlicer = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username
            state.score = action.payload.score
            // state.address = action.payload.address
            // state = action.payload
        },
        setUsername:(state,action) => {
            state.username = action.payload.username
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser,setUsername } = userSlicer.actions

export default userSlicer.reducer