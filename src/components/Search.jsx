import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center gap-3 m-10">
        <FaSearch className="brandColor" size={25} />
        <input className="w-72 h-10 rounded-full" onChange={(e) => setInput(e.target.value)} type="text" value={input} />
      </div>
    </form>
  )
}

export default Search