import { useNavigate } from "react-router-dom";
import "./TrendingSection.css";

interface Props {
  title: string;
  description: string;
  navigateTo?: string;
}

export const TrendingSection = ({ title, description, navigateTo }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/react-ts-movies${navigateTo}`)}
      className="trending pointer w-100 flex flex-column gap-1 justify-content-center py-2"
    >
      <h2 className="trending--title">{title}</h2>
      <p className="trending--description">{description}</p>
    </div>
  );
};
