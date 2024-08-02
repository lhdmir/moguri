import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  id: 0,
  imageUrl: "",
  name: "",
  currentItem: {
    accessory: {
      id: 0,
      name: "",
      imageUrl: "",
    },
    background: {
      id: 0,
      name: "",
      imageUrl: "",
    },
  },
  ownedItem: {
    accessories: [],
    backgrounds: [],
  },
  targetWeight: 0,
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

    // 세부 상태 수정 액션 생성자 및 리듀서

    // 액션 생성자: setId
    // 리듀서: 상태의 id를 설정
    // const handleUpdateId = () => {
    //   dispatch(setId(1));
    // };
    setId: (state, action) => {
      state.id = action.payload;
    },

    // 액션 생성자: setImage
    // 리듀서: 상태의 image를 설정
    // const handleUpdateImage = () => {
    //   dispatch(setImage("https://example.com/image.png"));
    // };
    setImage: (state, action) => {
      state.imageUrl = action.payload;
    },

    // 액션 생성자: setName
    // 리듀서: 상태의 name을 설정
    // const handleUpdateName = () => {
    //   dispatch(setName("Moguri"));
    // };
    setName: (state, action) => {
      state.name = action.payload;
    },

    // 액션 생성자: setCurrentAccessory
    // 리듀서: current_items의 accessory를 설정
    // const handleUpdateAccessory = () => {
    //   dispatch(setCurrentAccessory({ id: 1, name: "Hat", image_url: "https://example.com/hat.png" }));
    // };
    setCurrentAccessory: (state, action) => {
      state.currentItem.accessory = action.payload;
    },

    // 액션 생성자: setCurrentBackground
    // 리듀서: current_items의 background를 설정
    // const handleUpdateBackground = () => {
    //   dispatch(setCurrentBackground({ id: 1, name: "Forest", image_url: "https://example.com/forest.png" }));
    // };
    setCurrentBackground: (state, action) => {
      state.currentItem.background = action.payload;
    },

    // 액션 생성자: addOwnedAccessory
    // 리듀서: owned_items의 accessories에 아이템 추가
    // const handleAddOwnedAccessory = () => {
    //   dispatch(addOwnedAccessory({ id: 2, name: "Scarf", image_url: "https://example.com/scarf.png" }));
    // };
    addOwnedAccessory: (state, action) => {
      state.ownedItem.accessories.push(action.payload);
    },

    // 액션 생성자: addOwnedBackground
    // 리듀서: owned_items의 backgrounds에 아이템 추가
    // const handleAddOwnedBackground = () => {
    //   dispatch(addOwnedBackground({ id: 2, name: "Beach", image_url: "https://example.com/beach.png" }));
    // };
    addOwnedBackground: (state, action) => {
      state.ownedItem.backgrounds.push(action.payload);
    },

    // 액션 생성자: setTargetWeight
    // 리듀서: 상태의 target_weight를 설정
    // const handleUpdateTargetWeight = () => {
    //   dispatch(setTargetWeight(50));
    // };
    setTargetWeight: (state, action) => {
      state.targetWeight = action.payload;
    },
  },
});

// 액션 생성자 내보내기
export const {
  setMoguri,
  clearMoguri,
  setId,
  setImage,
  setName,
  setCurrentAccessory,
  setCurrentBackground,
  addOwnedAccessory,
  addOwnedBackgroundset,
  setTargetWeight,
} = moguriSlice.actions;

// 리듀서 내보내기
export default moguriSlice.reducer;
