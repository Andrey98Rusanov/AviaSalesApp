import Filters from "../Filters/Filters";
import Items from "../Items/Items";
import Buttons from "../Buttons/Buttons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  async function addTickets() {
    const promiseId = await fetch(
      "https://aviasales-test-api.kata.academy/search"
    );
    const id = await promiseId.json();
    const promiseTickets = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${id.searchId}`
    );
    const tickets = await promiseTickets.json();
    dispatch({ type: "ADD_TICKETS", payload: tickets.tickets });
  }
  useEffect(() => {
    addTickets();
  }, []);

  return (
    <div className="app">
      <Buttons />
      <div>
        <Filters />
        <Items />
      </div>
    </div>
  );
}

export default App;
