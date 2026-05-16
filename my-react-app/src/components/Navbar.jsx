import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Navbar() {
    const {darkMode,setDarkMode} = useContext(ThemeContext)
  return (
    <div className="navbar">

        <h2>Student Dashboard</h2>
        <button onClick={()=> setDarkMode(!darkMode)}>Dark Mode</button>
    </div>
  )
}

export default Navbar