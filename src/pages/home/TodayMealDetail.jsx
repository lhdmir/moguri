const TodayMealDetail = () => {
  return (
    <div>
      <button className="slide-left" onClick={goToPreviousView}>
        <img src={slideButtonImage} alt="Slide" />
      </button>
      <div className="meal-header">오늘의 운동 !</div>
      <button className="meal-main-close" onClick={toggleSidebar}>
        <img src={closeButtonImage} alt="Close" className="meal-main-close" />
      </button>
      <div className="scroll-container">
        {exerciseDetails.map((item, index) => (
          <div key={index} className="meal-item-detail">
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleExerciseItemChange(index, e.target.value)}
              placeholder="운동 추가"
              className="meal-input"
            />
            <button
              className="meal-delete-button"
              onClick={() => removeExerciseItem(index)}
            >
              <img src={todoDeleteImage} alt="Delete" />
            </button>
          </div>
        ))}
      </div>
      <div className="add-button-container">
        <button className="add-button" onClick={addExerciseItem}>
          + 운동 추가
        </button>
      </div>
    </div>
  );
};

export default TodayMealDetail;
