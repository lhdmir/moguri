import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = [];

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
    // 리듀서: 상태를 초기 상태로 재설정
    clearTodayExercise: () => initialState,

    // 운동 추가
    // store.dispatch(addExercise({
    //   id: 3,
    //   content: "Swimming"
    // }));
    addExercise: (state, action) => {
      state.push(action.payload);
    },

    // 운동 삭제
    // store.dispatch(removeExercise(2));
    removeExercise: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    // 운동 수정
    // store.dispatch(updateExercise({
    //   id: 1,
    //   newItem: { content: "Jogging" }
    // }));
    updateExercise: (state, action) => {
      const { id, newItem } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...newItem };
      }
    },
  },
});

// 액션 생성자 내보내기
export const {
  setTodayExercise,
  clearTodayExercise,
  addExercise,
  removeExercise,
  updateExercise,
} = todayExerciseSlice.actions;

// 리듀서 내보내기
export default todayExerciseSlice.reducer;
