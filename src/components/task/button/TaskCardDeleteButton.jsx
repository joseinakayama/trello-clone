import React from "react";

const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    //taskカード削除
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button className="taskCardDeleteButton">
        <i
          className="fa-solid fa-xmark"
          onClick={() => taskCardDeleteButton(taskCard.id)}
        ></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
