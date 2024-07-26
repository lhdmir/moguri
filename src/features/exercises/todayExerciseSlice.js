import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = null;

// 슬라이스 생성
const todayExerciseSlice = createSlice({
  name: "todayExercise",
  initialState,
  reducers: {
    // 액션 생성자 및 리듀서 정의

    // 액션 생성자: setTodayExercise
    // 리듀서: 상태를 action.payload로 설정
    setTodayExercise: (state, action) => action.payload,

    // 액션 생성자: clearTodayExercise
    // 리듀서: 상태를 null로 설정
    clearTodayExercise: () => null,
  },
});

// 액션 생성자 내보내기
export const { setTodayExercise, clearTodayExercise } =
  todayExerciseSlice.actions;

// 리듀서 내보내기
export default todayExerciseSlice.reducer;
