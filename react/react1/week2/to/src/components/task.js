import React, { useEffect } from "react";

function AddTask({ handleAddTask, setNewTask ,newTask}){
  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Please eneter a task"
        onChange={(e) => setNewTask(e.target.value)}
        required
        value={newTask}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;