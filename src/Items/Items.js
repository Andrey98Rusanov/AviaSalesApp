import "./Items.css";
import { useSelector } from "react-redux";

function Items() {
  const state = useSelector((state) => state);
  console.log(state.tickets);
  const stopsValidation = (n) => {
    if (n === 1) return "пересадка";
    else if (n === 2 || n === 3 || n === 4) return "пересадки";
    else return "пересадок";
  };
  const dateValidation = (date, duration) => {
    const h =
      new Date(date).getHours() < 10
        ? "0" + new Date(date).getHours()
        : new Date(date).getHours();
    const m =
      new Date(date).getMinutes() < 10
        ? "0" + new Date(date).getMinutes()
        : new Date(date).getMinutes();
    const time1 = [h, m].join(":");
    const date2 = new Date(new Date(date).getTime() + duration * 60000);
    const h2 =
      new Date(date2).getHours() < 10
        ? "0" + new Date(date2).getHours()
        : new Date(date2).getHours();
    const m2 =
      new Date(date2).getMinutes() < 10
        ? "0" + new Date(date2).getMinutes()
        : new Date(date2).getMinutes();
    const time2 = [h2, m2].join(":");
    return [time1, time2];
  };
  let tickets = [];
  if (state.tickets) {
    let key = 1;
    for (let el of state.tickets) {
      tickets.push(
        <div key={key} className="item">
          <div className="price">
            <div className="cost">{el.price} Р</div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/2560px-S7_new_logo.svg.png"></img>
          </div>
          <div className="info">
            <div className="gray">
              {el.segments[0].origin} - {el.segments[0].destination}
            </div>
            <div className="gray">В пути</div>
            <div className="gray">
              {el.segments[0].stops.length}{" "}
              {stopsValidation(el.segments[0].stops.length)}
            </div>
            <div>
              {dateValidation(
                el.segments[0].date,
                el.segments[0].duration
              ).join("-")}
            </div>
            <div>
              {Math.floor(el.segments[0].duration / 60)}ч{" "}
              {Math.floor(
                el.segments[0].duration -
                  Math.floor(el.segments[0].duration / 60) * 60
              )}
              м
            </div>
            <div>{el.segments[0].stops.join(" ")}</div>
          </div>
          <div className="info">
            <div className="gray">
              {el.segments[1].origin} - {el.segments[1].destination}
            </div>
            <div className="gray">В пути</div>
            <div className="gray">
              {el.segments[1].stops.length}{" "}
              {stopsValidation(el.segments[1].stops.length)}
            </div>
            <div>
              {dateValidation(
                el.segments[1].date,
                el.segments[1].duration
              ).join("-")}
            </div>
            <div>
              {Math.floor(el.segments[1].duration / 60)}ч{" "}
              {Math.floor(
                el.segments[1].duration -
                  Math.floor(el.segments[1].duration / 60) * 60
              )}
              м
            </div>
            <div>{el.segments[1].stops.join(" ")}</div>
          </div>
        </div>
      );
      key++;
    }
  }
  return <>{tickets}</>;
}

export default Items;
