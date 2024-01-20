
import axios from "axios";
import { useEffect, useState } from "react";
import SelectHouse from "./SelectHouse";
import ListCharacters from "./ListCharacters";
import SearchCharacter from "./SearchCharacter";

function App() {
  //https://hp-api.onrender.com/api/characters/house/gryffindor
  const [house, setHouse] = useState("gryffindor");
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`https://hp-api.onrender.com/api/characters/house/${house}`)
        .then(
          (resp) => {
            setCharacters(resp.data);
            setFilteredArray(resp.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }, [house]);

  const changeHouse = (value) => {
    setHouse(value);
  };

  const changeSearch = (value) => {
    setSearch(value);
  };
  const filterCharacter = () => {
    const newArray = characters.filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(newArray);
  };

  return (
    <>
      <h1>Pagina Harry potter</h1>
      <SelectHouse changeHouse={changeHouse} house={house} />
      <SearchCharacter
        changeSearch={changeSearch}
        search={search}
        filterCharacter={filterCharacter}
      />
      <ListCharacters filteredArray={filteredArray} />
    </>
  );
}
export default App;