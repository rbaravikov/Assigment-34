import { FaTrashAlt, FaEdit } from "react-icons/fa"

const Note = ({ notes, setNotes }) => {
  const handleRemove = (index) => {
    const updatedNotes = [...notes]
    updatedNotes.splice(index, 1)
    setNotes(updatedNotes)
  }

  const EnableEdit = ({index, defaultValue}) => {
    const updateNote = [...notes]
  }

  return (
    <>
      {notes.map((content, index) => (
        <div className="note" key={index}>
          <label htmlFor={index}>
            <FaEdit onClick={() => EnableEdit(index, textarea.defaultValue)} />
            <FaTrashAlt onClick={() => handleRemove(index)} />
          </label>
          <textarea readOnly name={index} id={index} defaultValue={content} cols="25" rows="15"></textarea>
        </div>
      ))}
    </>
  )
}

export default Note;
