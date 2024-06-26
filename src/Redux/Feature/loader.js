// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// let loadme;
const initialState = {
  updater: 0,
  final: 8,
  loadme:true,
};
const loader = createSlice({
    name: 'switcher',
    initialState,
    reducers: {
        changer : (state,action)=>{
            console.log(action.payload)
            state.updater = action.payload;
            // state.updater++;
            console.log(state.updater)
            if(action.payload==state.final)
            state.loadme =false;
        },
        changerX : (state,action)=>{
            console.log(action.payload)
            state.updater++;
            // console.log(state.updater);
            if (state.updater == state.final) 
            state.loadme = false;
        }
    }
})
export default loader.reducer;
export const LoaderReducer = loader.actions;
// export default TabSwitcher.reducer
// export {TabSwitcher as postReducer}