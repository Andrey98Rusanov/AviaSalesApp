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
      <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <div className="button">
        <input type="checkbox" checked={all} onClick={() => toggleAll()} />
        <span>Все</span>
      </div>
      <div className="button">
        <input
          type="checkbox"
          checked={withOut}
          onClick={() => toggleWithOut()}
        />
        <span>Без пересадок</span>
      </div>
      <div className="button">
        <input type="checkbox" checked={one} onClick={() => toggleOne()} />
        <span>1 пересадка</span>
      </div>
      <div className="button">
        <input type="checkbox" checked={two} onClick={() => toggleTwo()} />
        <span>2 пересадки</span>
      </div>
      <div className="button">
        <input type="checkbox" checked={three} onClick={() => toggleThree()} />
        <span>3 пересадки</span>
      </div>
    </div>
  );
}

export default Buttons;
