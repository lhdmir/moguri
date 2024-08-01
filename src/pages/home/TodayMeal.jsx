import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
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
} from "../../features/meals/todayMealSlice.js";

const TodayMeal = ({ onMealSelect }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [newItem, setNewItem] = useState({ menu: "", calorie: "" });
  const [editingItem, setEditingItem] = useState(null);

  const dispatch = useDispatch();
  const todayMealState = useSelector((state) => state.todayMeal);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        editingItem &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        handleUpdateItem(editingItem.id, editingItem);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editingItem]);

  useEffect(() => {
    onMealSelect(selectedMeal !== null);
  }, [selectedMeal, onMealSelect]);

  const calculateTotalCalories = (meal) => {
    return meal.reduce((total, item) => total + Number(item.calorie), 0);
  };

  const meals = [
    {
      name: "아침",
      details: todayMealState.breakfast,
      calories: calculateTotalCalories(todayMealState.breakfast),
      addAction: addBreakfast,
      removeAction: removeBreakfast,
      updateAction: updateBreakfast,
    },
    {
      name: "점심",
      details: todayMealState.lunch,
      calories: calculateTotalCalories(todayMealState.lunch),
      addAction: addLunch,
      removeAction: removeLunch,
      updateAction: updateLunch,
    },
    {
      name: "저녁",
      details: todayMealState.dinner,
      calories: calculateTotalCalories(todayMealState.dinner),
      addAction: addDinner,
      removeAction: removeDinner,
      updateAction: updateDinner,
    },
    {
      name: "간식",
      details: todayMealState.snack,
      calories: calculateTotalCalories(todayMealState.snack),
      addAction: addSnack,
      removeAction: removeSnack,
      updateAction: updateSnack,
    },
  ];

  const handleAddItem = () => {
    if (newItem.menu && newItem.calorie) {
      const action = meals[selectedMeal].addAction;
      dispatch(action({ ...newItem, id: Date.now() }));
      setNewItem({ menu: "", calorie: "" });
    }
  };

  const handleDeleteItem = (id) => {
    const action = meals[selectedMeal].removeAction;
    dispatch(action(id));
  };

  const handleUpdateItem = (id, updatedItem) => {
    const action = meals[selectedMeal].updateAction;
    dispatch(action({ id, newItem: updatedItem }));
    setEditingItem(null);
  };

  const handleKeyDown = (event, item) => {
    if (event.key === "Enter") {
      handleUpdateItem(item.id, item);
    }
  };

  if (selectedMeal !== null) {
    const mealDetail = meals[selectedMeal];
    return (
      <div ref={modalRef}>
        <div className="meal-header">{mealDetail.name}</div>
        <ul>
          {mealDetail.details.map((item) => (
            <li key={item.id}>
              {editingItem && editingItem.id === item.id ? (
                <span>
                  <input
                    type="text"
                    value={editingItem.menu}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, menu: e.target.value })
                    }
                    onKeyDown={(e) => handleKeyDown(e, editingItem)}
                  />
                  <input
                    type="number"
                    value={editingItem.calorie}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        calorie: e.target.value,
                      })
                    }
                    onKeyDown={(e) => handleKeyDown(e, editingItem)}
                  />
                </span>
              ) : (
                <span onClick={() => setEditingItem(item)}>
                  {item.menu}: {item.calorie} kcal
                  <button onClick={() => handleDeleteItem(item.id)}>
                    삭제
                  </button>
                </span>
              )}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="메뉴"
          value={newItem.menu}
          onChange={(e) => setNewItem({ ...newItem, menu: e.target.value })}
        />
        <input
          type="number"
          placeholder="칼로리"
          value={newItem.calorie}
          onChange={(e) => setNewItem({ ...newItem, calorie: e.target.value })}
        />
        <button onClick={handleAddItem}>추가</button>
        <button onClick={() => setSelectedMeal(null)}>뒤로</button>
      </div>
    );
  }

  return (
    <div ref={modalRef}>
      <div className="meal-header">오늘의 식단 !</div>
      {meals.map((meal, index) => (
        <div
          key={index}
          className="meal-item"
          onClick={() => setSelectedMeal(index)}
          style={{ cursor: "pointer" }}
        >
          <p className="meal-item-day">• {meal.name}</p>
          <p className="meal-item-calories">{meal.calories} kcal</p>
        </div>
      ))}
    </div>
  );
};

export default TodayMeal;
