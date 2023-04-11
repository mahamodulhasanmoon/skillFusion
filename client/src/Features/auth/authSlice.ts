import { createSlice } from "@reduxjs/toolkit"

export interface authState {
    authInfo: any;
    token: string | null;
  };

const initialState : authState = {
    authInfo:null,
    token:null,

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser : (state, action)=>{
            console.log(action.payload.data)

            state.authInfo = action.payload.data.userInfo
            state.token = action.payload.token
            localStorage.setItem('user', JSON.stringify(action.payload.data.token))

        }
    }

})

export default authSlice.reducer
export const {setUser} = authSlice.actions