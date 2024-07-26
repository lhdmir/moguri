import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  id: 0,
  image: "",
  name: "",
  current_items: {
    accessory: {
      id: 0,
      name: "",
      image_url: "",
    },
    background: {
      id: 0,
      name: "",
      image_url: "",
    },
  },
  owned_items: {
    accessories: [],
    backgrounds: [],
  },
  target_weight: 0,
};

// 슬라이스 생성
const moguriSlice = createSlice({
  name: "moguri",
  initialState,
  reducers: {
    // 액션 생성자 및 리듀서 정의

    // 액션 생성자: setMoguri
    // 리듀서: 상태를 action.payload로 설정
    setMoguri: (state, action) => action.payload,

    // 액션 생성자: clearMoguri
    // 리듀서: 상태를 null로 설정
    clearMoguri: () => null,
  },
});

// 액션 생성자 내보내기
export const { setMoguri, clearMoguri } = moguriSlice.actions;

// 리듀서 내보내기
export default moguriSlice.reducer;
