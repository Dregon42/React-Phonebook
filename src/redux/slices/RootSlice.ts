import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'name',
        email: 'email',
        phone_number: 'phone_number',
        address: 'address',
    },
    reducers: {
        //  action is submitted elsewhere - written to state.name
        chooseName: (state, action) => { state.name = action.payload },
        chooseEmail: (state, action) => { state.email = action.payload },
        choosePhone: (state, action) => { state.phone_number = action.payload },
        chooseAddress: (state, action) => { state.address = action.payload }
    }
})

export const { chooseName, chooseEmail, choosePhone, chooseAddress } = rootSlice.actions
export default rootSlice.reducer;
