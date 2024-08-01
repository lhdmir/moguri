import React from "react";
import "./Shop.css";
import itemImage from "../../assets/image/shop-item.png"; // 아이템 이미지
import backgroundImage from "../../assets/image/shop-background.png"; // 배경 이미지

const Shop = () => {
  return (
    <div>
      <div className="shop-header">
        상점
      </div>
      <div className="shop-items">
        <div className="shop-item">
          <img src={itemImage} alt="아이템" className="shop-item-image" />
          <div className="shop-item-title">아이템 뽑기 !</div>
          <div className="shop-item-price">5990원</div>
        </div>
        <div className="shop-item">
          <img src={backgroundImage} alt="배경" className="shop-item-image" />
          <div className="shop-item-title">배경 뽑기 !</div>
          <div className="shop-item-price">6990원</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
