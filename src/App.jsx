import { useState } from 'react';
import './scss/global.scss'
import './scss/notes.scss'
import { FaTrashAlt, FaEdit  } from "react-icons/fa";
import Button from './components/Button';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState(["item1", "item2", "item3" ])

  return (
    <>
    <Button notes={notes} setNotes={setNotes} />
    <div className="notes">
      <Note notes={notes} setNotes={setNotes} />
    </div>
    </>
  )
}

export default App
