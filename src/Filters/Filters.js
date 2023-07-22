import { useDispatch, useSelector } from "react-redux";
import "./Filters.css";

function Filters() {
  const dispatch = useDispatch();
  const { price, speed } = useSelector((state) => state);
  return (
    <div className="filters">
      <button
        onClick={() => dispatch({ type: "TOGGLE_PRICE" })}
        className={price ? "active filter" : "filter"}
      >
        Самый дешевый
      </button>
      <button
        onClick={() => dispatch({ type: "TOGGLE_SPEED" })}
        className={speed ? "active filter" : "filter"}
      >
        Самый быстрый
      </button>
    </div>
  );
}

export default Filters;
