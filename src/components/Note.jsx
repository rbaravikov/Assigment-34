import { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Note = ({ notes, setNotes }) => {
  const handleRemove = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <>
      {notes.map((content, index) => (
        <div className="note" key={index}>
          <label htmlFor={index}>
            <FaEdit />
            <FaTrashAlt onClick={() => handleRemove(index)} />
          </label>
          <textarea name={index} id={index} value={content} cols="25" rows="15"></textarea>
        </div>
      ))}
    </>
  );
};

export default Note;
