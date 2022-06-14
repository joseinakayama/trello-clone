import React from "react";
import { v4 as uuid } from "uuid";
const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardsId = uuid();
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardsId,
        draggableId: `item${taskCardsId}`,
      },
    ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};

export default AddTaskCardButton;
