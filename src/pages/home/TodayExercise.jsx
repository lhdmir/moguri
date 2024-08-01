import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addExercise,
  removeExercise,
  updateExercise,
} from "../../features/exercises/todayExerciseSlice.js";

const TodayExercise = () => {
  const [newItem, setNewItem] = useState({ content: "" });
  const [editingItem, setEditingItem] = useState(null);

  const dispatch = useDispatch();
  const todayExerciseState = useSelector((state) => state.todayExercise);
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

  const handleAddItem = () => {
    if (newItem.content) {
      dispatch(addExercise({ ...newItem, id: Date.now() }));
      setNewItem({ content: "" });
    }
  };

  const handleDeleteItem = (id) => {
    dispatch(removeExercise(id));
  };

  const handleUpdateItem = (id, updatedItem) => {
    dispatch(updateExercise({ id, newItem: updatedItem }));
    setEditingItem(null);
  };

  const handleKeyDown = (event, item) => {
    if (event.key === "Enter") {
      handleUpdateItem(item.id, item);
    }
  };

  return (
    <div ref={modalRef}>
      <div className="exercise-header">오늘의 운동 !</div>
      <ul>
        {todayExerciseState.map((item) => (
          <li key={item.id}>
            {editingItem && editingItem.id === item.id ? (
              <span>
                <input
                  type="text"
                  value={editingItem.content}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, content: e.target.value })
                  }
                  onKeyDown={(e) => handleKeyDown(e, editingItem)}
                />
              </span>
            ) : (
              <span onClick={() => setEditingItem(item)}>
                {item.content}
                <button onClick={() => handleDeleteItem(item.id)}>삭제</button>
              </span>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="운동 추가"
        value={newItem.content}
        onChange={(e) => setNewItem({ content: e.target.value })}
      />
      <button onClick={handleAddItem}>추가</button>
    </div>
  );
};

export default TodayExercise;
