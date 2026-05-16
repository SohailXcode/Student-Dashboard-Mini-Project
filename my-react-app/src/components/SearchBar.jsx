import { useRef } from "react"


function SearchBar({search,setSearch}) {
    const inputRef = useRef();
    const focusInput = ()=>{
        inputRef.current.focus();
    }
  return (
    <div>
        <input type="text"
        ref={inputRef}
        placeholder="Search Student"
        value={search}
        onChange={(e)=> setSearch(e.target.value)} />
        <button onClick={focusInput}>
            Focus Search
        </button>
    </div>
  )
}

export default SearchBar