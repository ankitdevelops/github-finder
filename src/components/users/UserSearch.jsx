import React,{useState,useContext} from "react";
import { FaSearch } from "react-icons/fa";
import GithubContext from "../../context/GithubContext";
const UserSearch = () => {

  const [text,setText] = useState("")
  const {searchUsers} = useContext(GithubContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }
const handleSubmit = (e) => {
  e.preventDefault();
  if (text === ""){
    window.alert("Please Enter something")
  }else{
    searchUsers(text);
    setText("")
  }
}
  return (
    <div className="input-group main-container mt-5">
      <form className="d-flex " onSubmit={handleSubmit}>
        <input
          className="form-control me-2 user-search"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value = {text}
          onChange = {handleChange}
        />
        <button className="btn btn-primary user-search-btn"  type="submit">
          <FaSearch/>
        </button>
      </form>
    </div>
  );
};

export default UserSearch;
