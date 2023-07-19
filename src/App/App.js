import Filters from "../Filters/Filters";
import Items from "../Items/Items";
import Buttons from "../Buttons/Buttons";
import "./App.css";

function App() {
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
