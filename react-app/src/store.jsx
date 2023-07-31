// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { sessionReducer } from "redux-react-session";

export default configureStore({
  reducer: {
    auth: authReducer,
    session: sessionReducer,
  },
});
