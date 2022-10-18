import { useState, useEffect } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";


const App = () => {

  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (e) => {
    e.preventDefault();
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  console.log('rendered')

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        name="monsters-search-value"
        className="monsters-search-box"
        placeholder="search monster"
        eventHandler={onSearchChange}
      />
      <CardList monsters={monsters} search={searchField} />
    </div>
  );
};

export default App;
