import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {name: '', age: 0, email: ''}; //initial state of the slice

export const userSlice = createSlice({
    name: 'user',
    initialState:{value: initialStateValue}, //initial state of the slice
    reducers: {
        login: (state, action)=>{
            state.value = action.payload;
        },
        logout: (state)=>{
            state.value = initialStateValue;
        }
    }
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;