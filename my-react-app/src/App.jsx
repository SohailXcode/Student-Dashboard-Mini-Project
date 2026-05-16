import { useContext, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import { ThemeContext } from "./context/ThemeContext";

function App() {

  const { darkMode } = useContext(ThemeContext);

  const [search, setSearch] = useState("");

  const [studentName, setStudentName] = useState("");

  const [students, setStudents] = useState([
    "Sohail",
    "Ayaan",
    "Ali",
    "Fatima",
    "Ahmed",
    "Zara",
  ]);

  // Add Student
  const addStudent = () => {

    if (studentName.trim() === "") {
      return;
    }

    setStudents([...students, studentName]);

    setStudentName("");
  };

  // Filter Students
  const filteredStudents = useMemo(() => {

    return students.filter((student) =>
      student.toLowerCase().includes(search.toLowerCase())
    );

  }, [search, students]);

  return (
    <div className={darkMode ? "dark" : "light"}>

      <Navbar />

      <br />

      {/* Add Student */}

      <input
        type="text"
        placeholder="Enter Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <br /><br />

      {/* Search */}

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Student List */}

      <StudentList students={filteredStudents} />

    </div>
  );
}

export default App;