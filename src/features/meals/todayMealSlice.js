import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],
};

// 슬라이스 생성
const todayMealSlice = createSlice({
  name: "todayMeal",
  initialState,
  reducers: {
    // 액션 생성자 및 리듀서 정의

    // 액션 생성자: setTodayMeal
    // 리듀서: 상태를 action.payload로 설정
    setTodayMeal: (state, action) => action.payload,

    // 액션 생성자: clearTodayMeal
    // 리듀서: 상태를 초기 상태로 재설정
    clearTodayMeal: () => initialState,

    // 아침 추가
    // store.dispatch(addBreakfast({
    //   id: 1,
    //   menu: "Oatmeal",
    //   calorie: 150
    // }));
    addBreakfast: (state, action) => {
      state.breakfast.push(action.payload);
    },

    // 아침 삭제
    // store.dispatch(removeBreakfast(1));
    removeBreakfast: (state, action) => {
      state.breakfast = state.breakfast.filter(
        (item) => item.id !== action.payload
      );
    },

    // 아침 수정
    // store.dispatch(updateBreakfast({
    //   id: 1,
    //   newItem: { menu: "Banana Oatmeal", calorie: 200 }
    // }));
    updateBreakfast: (state, action) => {
      const { id, newItem } = action.payload;
      const index = state.breakfast.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.breakfast[index] = { ...state.breakfast[index], ...newItem };
      }
    },

    // 점심 추가
    addLunch: (state, action) => {
      state.lunch.push(action.payload);
    },

    // 점심 삭제
    removeLunch: (state, action) => {
      state.lunch = state.lunch.filter((item) => item.id !== action.payload);
    },

    // 점심 수정
    updateLunch: (state, action) => {
      const { id, newItem } = action.payload;
      const index = state.lunch.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.lunch[index] = { ...state.lunch[index], ...newItem };
      }
    },

    // 저녁 추가
    addDinner: (state, action) => {
      state.dinner.push(action.payload);
    },

    // 저녁 삭제
    removeDinner: (state, action) => {
      state.dinner = state.dinner.filter((item) => item.id !== action.payload);
    },

    // 저녁 수정
    updateDinner: (state, action) => {
      const { id, newItem } = action.payload;
      const index = state.dinner.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.dinner[index] = { ...state.dinner[index], ...newItem };
      }
    },

    // 간식 추가
    addSnack: (state, action) => {
      state.snack.push(action.payload);
    },

    // 간식 삭제
    removeSnack: (state, action) => {
      state.snack = state.snack.filter((item) => item.id !== action.payload);
    },

    // 간식 수정
    updateSnack: (state, action) => {
      const { id, newItem } = action.payload;
      const index = state.snack.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.snack[index] = { ...state.snack[index], ...newItem };
      }
    },
  },
});

// 액션 생성자 내보내기
export const {
  setTodayMeal,
  clearTodayMeal,
  addBreakfast,
  removeBreakfast,
  updateBreakfast,
  addLunch,
  removeLunch,
  updateLunch,
  addDinner,
  removeDinner,
  updateDinner,
  addSnack,
  removeSnack,
  updateSnack,
} = todayMealSlice.actions;

// 리듀서 내보내기
export default todayMealSlice.reducer;
