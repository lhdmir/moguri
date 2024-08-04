import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import todoDeleteImage from "../../assets/icon/tododelete.png";
import backButtonImage from "../../assets/icon/backbutton.png";
import closeButtonImage from "../../assets/icon/deletebutton.png";

import "./TodayMeal.css";
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
import Cookies from "js-cookie";

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

  // 임시 코드
  // const getLastId = (meal) => {
  //   if (meal.length === 0) return 0;
  //   return meal[meal.length - 1].id;
  // };

  const meals = [
    {
      name: "아침",
      details: todayMealState.breakfast,
      calories: calculateTotalCalories(todayMealState.breakfast),
      addAction: addBreakfast,
      removeAction: removeBreakfast,
      updateAction: updateBreakfast,
      // API Endpoint 수정
      apiEndpoint:
        "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/breakfast",
    },
    {
      name: "점심",
      details: todayMealState.lunch,
      calories: calculateTotalCalories(todayMealState.lunch),
      addAction: addLunch,
      removeAction: removeLunch,
      updateAction: updateLunch,
      // API Endpoint 수정
      apiEndpoint:
        "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/lunch",
    },
    {
      name: "저녁",
      details: todayMealState.dinner,
      calories: calculateTotalCalories(todayMealState.dinner),
      addAction: addDinner,
      removeAction: removeDinner,
      updateAction: updateDinner,
      // API Endpoint 수정
      apiEndpoint:
        "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/dinner",
    },
    {
      name: "간식",
      details: todayMealState.snack,
      calories: calculateTotalCalories(todayMealState.snack),
      addAction: addSnack,
      removeAction: removeSnack,
      updateAction: updateSnack,
      // API Endpoint 수정
      apiEndpoint:
        "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/snack",
    },
  ];

  const handleAddItem = () => {
    if (newItem.menu && newItem.calorie) {
      // const lastId = getLastId(meals[selectedMeal].details);
      const action = meals[selectedMeal].addAction;
      dispatch(action({ id: Date.now(), ...newItem }));
      // console.log(todayMealState);
      setNewItem({ menu: "", calorie: "" });
    }
  };

  // const handleAddItem = async () => {
  //   if (newItem.menu && newItem.calorie) {
  //     try {
  //       const token = Cookies.get("token");

  //       // API Endpoint 수정
  //       const response = await fetch(meals[selectedMeal].apiEndpoint, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({ ...newItem }),
  //       });

  //       const data = await response.json();

  //       if (response.ok) {
  //         const action = meals[selectedMeal].addAction;
  //         dispatch(action({ ...data }));
  //         setNewItem({ menu: "", calorie: "" });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const handleDeleteItem = (id) => {
    const action = meals[selectedMeal].removeAction;
    dispatch(action(id));
  };

  // const handleDeleteItem = async (id) => {
  //   try {
  //     const token = Cookies.get("token");

  //     // API Endpoint 수정
  //     const response = await fetch(`${meals[selectedMeal].apiEndpoint}/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       const action = meals[selectedMeal].removeAction;
  //       dispatch(action(data.deleted_id));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleUpdateItem = (id, updatedItem) => {
    const action = meals[selectedMeal].updateAction;
    dispatch(action({ id, newItem: updatedItem }));
    setEditingItem(null);
  };

  // const handleUpdateItem = async (id, updatedItem) => {
  //   try {
  //     const token = Cookies.get("token");

  //     // API Endpoint 수정
  //     const response = await fetch(`${meals[selectedMeal].apiEndpoint}/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({ ...updatedItem }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       const action = meals[selectedMeal].updateAction;
  //       const { id, ...newItemWithoutId } = data;
  //       dispatch(action({ id: data.id, newItem: newItemWithoutId }));
  //       setEditingItem(null);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleKeyDown = (event, item) => {
    if (event.key === "Enter") {
      handleUpdateItem(item.id, item);
    }
  };

  if (selectedMeal !== null) {
    const mealDetail = meals[selectedMeal];
    return (
      <div ref={modalRef} className="todaymeal-modal">
        <div className="todaymeal-header">{mealDetail.name}</div>
        <ul className="todaymeal-list">
          {mealDetail.details.map((item) => (
            <li key={item.id} className="todaymeal-item">
              {editingItem && editingItem.id === item.id ? (
                <span className="todaymeal-edit">
                  <input
                    type="text"
                    value={editingItem.menu}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, menu: e.target.value })
                    }
                    onKeyDown={(e) => handleKeyDown(e, editingItem)}
                    className="todaymeal-input"
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
                    className="todaymeal-input"
                  />
                </span>
              ) : (
                <span
                  className="todaymeal-display"
                  onClick={() => setEditingItem(item)}
                >
                  <span className="display-left">{item.menu}</span>
                  <span className="display-right">{item.calorie} kcal</span>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="todaymeal-delete-button"
                  >
                    <img src={todoDeleteImage} alt="Delete" />
                  </button>
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="todaymeal-add-container">
          <input
            type="text"
            placeholder="메뉴"
            value={newItem.menu}
            onChange={(e) => setNewItem({ ...newItem, menu: e.target.value })}
            className="todaymeal-input-add"
          />
          <input
            type="number"
            placeholder="칼로리"
            value={newItem.calorie}
            onChange={(e) =>
              setNewItem({ ...newItem, calorie: e.target.value })
            }
            className="todaymeal-input-add"
          />
          <button className="todaymeal-add-button" onClick={handleAddItem}>
            +
          </button>
        </div>

        <button
          className="todaymeal-back-button"
          onClick={() => setSelectedMeal(null)}
        >
          <img src={backButtonImage} alt="back" />
        </button>
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
