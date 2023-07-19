import "./Buttons.css";

function Buttons() {
  return (
    <div className="buttons">
      <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <div className="button">
        <input type="checkbox" />
        <span>Все</span>
      </div>
      <div className="button">
        <input type="checkbox" />
        <span>Без пересадок</span>
      </div>
      <div className="button">
        <input type="checkbox" checked={0} />
        <span>1 пересадка</span>
      </div>
      <div className="button">
        <input type="checkbox" />
        <span>2 пересадки</span>
      </div>
      <div className="button">
        <input type="checkbox" />
        <span>3 пересадки</span>
      </div>
    </div>
  );
}

export default Buttons;
