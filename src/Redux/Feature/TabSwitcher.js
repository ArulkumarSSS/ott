// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    post:100,
}
const TabSwitcher = createSlice({
    name: 'switcher',
    initialState,
    reducers: {
        changer : (state,action)=>{
            state.post = action.payload
        }
    }
})
export default TabSwitcher.reducer;
export const postReducer = TabSwitcher.actions;
// export default TabSwitcher.reducer
// export {TabSwitcher as postReducer}