import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Feature/TabSwitcher";
import LoaderReducer from "../Feature/loader";
import IdReducer from "../Feature/MovieIdStore";
const store = configureStore({
  reducer: {
    post: postReducer,
    load: LoaderReducer,
    id: IdReducer,
  },
});
export default store;