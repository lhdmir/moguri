import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Redux Store 생성
const store = configureStore({
  reducer: rootReducer,
});

export default store;
