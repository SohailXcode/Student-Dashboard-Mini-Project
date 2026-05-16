import { useContext, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import { ThemeContext } from "./context/ThemeContext";

function App() {

  const { darkMode } = useContext(ThemeContext);

  const [search, setSearch] = useState("");

  const students = [
    "Sohail",
    "Ayaan",
    "Ali",
    "Fatima",
    "Ahmed",
    "Zara",
  ];

  const filteredStudents = useMemo(() => {

    return students.filter((student) =>
      student.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (
    <div
      className={darkMode ? "dark" : "light"}
    >

      <Navbar />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <StudentList students={filteredStudents} />

    </div>
  );
}

export default App;