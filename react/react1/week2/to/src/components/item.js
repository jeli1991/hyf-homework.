import React, { useState } from "react";

function ListItem({ description, id, handleDelete,newTask}) {
  const [done, setDone] = useState(false);

  const handleDone = (id) => {
    setDone(!done);
  };

  return (
    <div >
      <li className={`${done ? "done" : ""}`}>{description}</li>
      <div >
        <div>
          <input type="checkbox" onClick={() => handleDone(id)} />
        </div>
        <button className="delete-btn" onClick={() =>handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;