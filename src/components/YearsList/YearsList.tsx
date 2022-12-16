import { useNavigate } from "react-router-dom";
import "./YearsList.css";

export const YearsList = () => {
  const navigate = useNavigate();

  const YEARS_LIST: Array<number> = [2022, 2021, 2020, 2019, 2018, 2017];

  return (
    <div className="years flex flex-column gap-1">
      <h1 className="years--title">Años</h1>
      <div className="years--list flex gap-1 flex-wrap justify-content-center align-items-center">
        {YEARS_LIST.map((year) => {
          return (
            <div
              onClick={() => navigate(`/react-ts-movies/año/${year}`)}
              key={year}
              className="year pointer flex align-items-center justify-content-center"
            >
              <p className="year-number text-center">{year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
