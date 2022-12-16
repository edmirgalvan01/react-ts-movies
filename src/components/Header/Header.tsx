import { BsPersonCircle } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      onClick={() => navigate("/react-ts-movies/")}
      className="p-2 flex justify-content-between align-items-center"
    >
      <BiHomeAlt size={30} color="222831" />
      <BsPersonCircle size={30} color="222831" />
    </header>
  );
};
