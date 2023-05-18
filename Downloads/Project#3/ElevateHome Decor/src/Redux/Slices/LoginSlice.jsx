import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:'',
  isLogedin:false,
  status: "idle", //pending,success,failure
};



export const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    setloginIn: (state, action) => {
     state.isLogedin = true;
     state.token=action.payload.token
      },
      setLogout:(state,action)=>{
        state.isLogedin=false;
        state.token = ""
      }
    },
  })
export const getLoginValue = (state) => state.LoginSlice;
export const {setloginIn,setLogout} = LoginSlice.actions
export default LoginSlice.reducer;
