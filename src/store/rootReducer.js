import { combineReducers } from "@reduxjs/toolkit";
import moguriReducer from "../features/moguri/moguriSlice";
import todayMealReducer from "../features/meals/todayMealSlice";
import todayExerciseReducer from "../features/exercises/todayExerciseSlice";

// 여러개의 리듀서를 결합하여 하나의 루트 리듀서를 만드는 함수
const rootReducer = combineReducers({
  moguri: moguriReducer,
  todayMeal: todayMealReducer,
  todayExercise: todayExerciseReducer,
});

export default rootReducer;
