import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addOwnedAccessory,
  addOwnedBackground,
} from "../../features/moguri/moguriSlice";

import DrawResultModal from "./DrawResultModal";

import Cookies from "js-cookie";

import "./Shop.css";
import itemImage from "../../assets/image/shop-item.png"; // 아이템 이미지
import backgroundImage from "../../assets/image/shop-background.png"; // 배경 이미지
import ItemAlertModal from "./ItemAlertModal";

const Shop = () => {
  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState({ id: 0, name: "", imageUrl: "" });

  const [isDrawResultModalOpen, setIsDrawResultModal] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");
  const [isItemAlertModalOpen, setIsItemAlertModal] = useState(false);

  const openDrawResultModal = () => {
    setIsDrawResultModal(true);
  };
  const closeDrawResultModal = () => {
    setIsDrawResultModal(false);
  };

  const openItemAlertModal = () => {
    setIsItemAlertModal(true);
  };
  const closeItemAlertModal = () => {
    setIsItemAlertModal(false);
  };

  // const handleAccessoryDraw = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/shop/accessory",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${Cookies.get("token")}`, // Assuming you use token-based auth
  //         },
  //       }
  //     );

  //     const data = await response.json();

  //     if (response.ok) {
  //       dispatch(addOwnedAccessory(data.accessory));
  //       setNewItem(data.accessory);
  //       openDrawResultModal();
  //     } else if (response.status === 409) {
  //       setAlertMessage(data.error);
  //       openItemAlertModal();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleBackgroundDraw = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/shop/background",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${Cookies.get("token")}`, // Assuming you use token-based auth
  //         },
  //       }
  //     );

  //     const data = await response.json();

  //     if (response.ok) {
  //       dispatch(addOwnedBackground(data.background));
  //       setNewItem(data.background);
  //       openDrawResultModal();
  //     } else if (response.status === 409) {
  //       setAlertMessage(data.error);
  //       openItemAlertModal();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleAccessoryDraw = () => {
    dispatch(
      addOwnedAccessory({
        id: 104,
        name: "제빵모자",
        imageUrl: "http://158.180.71.193/image/hat_4.png",
      })
    );
    setNewItem({
      id: 104,
      name: "제빵모자",
      imageUrl: "http://158.180.71.193/image/hat_4.png",
    });
    openDrawResultModal();
  };

  const handleBackgroundDraw =  () => {
    setAlertMessage("모든 배경화면을 보유중입니다!");
    openItemAlertModal();
      //  dispatch(
      //    addOwnedBackground({
      //      id: 203,
      //      name: "동굴",
      //      imageUrl: "http://158.180.71.193/image/background3.png",
      //    })
      //  );
      //  setNewItem({
      //    id: 203,
      //    name: "동굴",
      //    imageUrl: "http://158.180.71.193/image/background3.png",
      //  });
      //  openDrawResultModal();
  };

  return (
    <div>
      <div className="shop-header">상점</div>
      <div className="shop-items">
        <div className="shop-item" onClick={() => handleAccessoryDraw()}>
          <button className="shop-item-button">
            <img src={itemImage} alt="아이템" className="shop-item-image" />
          </button>
          <div className="shop-item-title">아이템 뽑기 !</div>
          <div className="shop-item-price">5990원</div>
        </div>
        <div className="shop-item" onClick={() => handleBackgroundDraw()}>
          <button className="shop-item-button">
            <img src={backgroundImage} alt="배경" className="shop-item-image" />
          </button>
          <div className="shop-item-title">배경 뽑기 !</div>
          <div className="shop-item-price">6990원</div>
        </div>
      </div>

      <DrawResultModal
        isOpen={isDrawResultModalOpen}
        onRequestClose={closeDrawResultModal}
        newItem={newItem}
      ></DrawResultModal>

      <ItemAlertModal
        isOpen={isItemAlertModalOpen}
        onRequestClose={closeItemAlertModal}
        message={alertMessage}
      ></ItemAlertModal>
    </div>
  );
};

export default Shop;
