import React, { useState } from "react";

const TodayMeal = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const meals = [
    { name: "아침", details: "아침 식사 내용" },
    { name: "점심", details: "점심 식사 내용" },
    { name: "저녁", details: "저녁 식사 내용" },
    { name: "간식", details: "간식 내용" },
  ];

  if (selectedMeal !== null) {
    const mealDetail = meals[selectedMeal];
    return (
      <div>
        <div className="meal-header">{mealDetail.name}의 상세 내용</div>
        <p>{mealDetail.details}</p>
        <button onClick={() => setSelectedMeal(null)}>뒤로</button>
      </div>
    );
  }

  return (
    <div>
      <div className="meal-header">오늘의 식단 !</div>
      {meals.map((meal, index) => (
        <div
          key={index}
          className="meal-item"
          onClick={() => setSelectedMeal(index)}
          style={{ cursor: "pointer" }}
        >
          <p className="meal-item-day">• {meal.name}</p>
          <p className="meal-item-calories">kcal</p>
        </div>
      ))}
    </div>
  );
};

export default TodayMeal;
