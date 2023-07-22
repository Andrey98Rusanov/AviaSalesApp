import { useDispatch, useSelector } from "react-redux";
import "./Buttons.css";

function Buttons() {
  const dispatch = useDispatch();
  const { all, withOut, one, two, three } = useSelector((state) => state);
  const toggleAll = () => {
    dispatch({ type: "TOGGLE_ALL" });
  };
  const toggleWithOut = () => {
    dispatch({ type: "TOGGLE_WITHOUT" });
  };
  const toggleOne = () => {
    dispatch({ type: "TOGGLE_ONE" });
  };
  const toggleTwo = () => {
    dispatch({ type: "TOGGLE_TWO" });
  };
  const toggleThree = () => {
    dispatch({ type: "TOGGLE_THREE" });
  };

  return (
    <div className="buttons">
      <span className="label">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <div className="button" onClick={() => toggleAll()}>
        <input type="checkbox" checked={all} />
        <span>Все</span>
      </div>
      <div className="button" onClick={() => toggleWithOut()}>
        <input type="checkbox" checked={withOut} />
        <span>Без пересадок</span>
      </div>
      <div className="button" onClick={() => toggleOne()}>
        <input type="checkbox" checked={one} />
        <span>1 пересадка</span>
      </div>
      <div className="button" onClick={() => toggleTwo()}>
        <input type="checkbox" checked={two} />
        <span>2 пересадки</span>
      </div>
      <div className="button" onClick={() => toggleThree()}>
        <input type="checkbox" checked={three} />
        <span>3 пересадки</span>
      </div>
    </div>
  );
}

export default Buttons;
