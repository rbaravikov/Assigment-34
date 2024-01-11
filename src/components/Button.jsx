import { FaPlus } from "react-icons/fa";

const Button = ({notes, setNotes}) => {

    const handleClick = (event) => {
        console.log(notes)
        setNotes(() => [...notes, ['']])
      }
    
  return (
    <button onClick={handleClick}><FaPlus />Add note</button>
  )
}

export default Button