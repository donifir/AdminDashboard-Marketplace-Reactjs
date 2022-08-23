import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import suplierReducer from "../features/suplierSlice";


export default configureStore({
  reducer: {
    auth: authReducer,
    suplier: suplierReducer,
  },
});
