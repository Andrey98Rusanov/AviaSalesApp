import Filters from "../Filters/Filters";
import Items from "../Items/Items";
import Buttons from "../Buttons/Buttons";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Loader from "../antd_components/spinner";

function App() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.id);
  const tickets = useSelector((state) => state.tickets);
  const isLoad = useSelector((state) => state.load);

  async function addId() {
    const promiseId = await fetch(
      "https://aviasales-test-api.kata.academy/search"
    );
    const id = await promiseId.json();
    dispatch({ type: "ADD_ID", payload: id.searchId });
  }

  async function addTickets() {
    if (id !== 0) {
      try {
        const promiseTickets = await fetch(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`
        );
        const tickets = await promiseTickets.json();
        dispatch({ type: "ADD_TICKETS", payload: tickets.tickets });
        if (!tickets.stop) addTickets();
        if (tickets.stop) dispatch({ type: "IS_LOAD" });
      } catch (e) {
        if (!tickets.stop) addTickets();
      }
    }
  }
  useEffect(() => {
    addId();
  }, []);

  useEffect(() => {
    addTickets();
  }, [id]);

  return (
    <div className="app">
      <Buttons />
      <div>
        <Filters />
        {isLoad ? <Loader /> : null}
        <Items />
      </div>
    </div>
  );
}

export default App;
