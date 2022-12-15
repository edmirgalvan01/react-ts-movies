import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./HomeSearch.css";

export const HomeSearch = () => {
  const [keyword, setKeyword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    //If there is keyword, navigate to
    if (keyword) navigate(`/buscar/${keyword}`);
  };

  return (
    <div className="search w-100 flex justify-content-between align-items-center">
      <input
        className="search--input"
        type="text"
        placeholder="Buscar"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <AiOutlineSearch size={35} onClick={handleSubmit} />
    </div>
  );
};
