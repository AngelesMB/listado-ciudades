import "../styles/App.scss";
import Header from "./Header";
import ColumnLeft from "./ColumnLeft";
import ColumnRight from "./ColumnRight";
import dataJSON from "../data/data.json";
import { useState } from "react";

function App() {
  const data = dataJSON.cities;
  const [searchValue, setSearchValue] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);

  const updateSearchValue = (value) => {
    setSearchValue(value.toLowerCase());
  };

  const updateSelectedCities = (id) => {
    const selectedCity = data.find((eachCity) => eachCity.id === id);
    if (selectedCities.includes(selectedCity)) {
      const updatedSelectedCities = selectedCities.filter(
        (eachCity) => eachCity !== selectedCity
      );
      setSelectedCities(updatedSelectedCities);
    } else {
      setSelectedCities([...selectedCities, selectedCity]);
    }
  };

  const deleteSelectedCity = (id) => {
    setSelectedCities(selectedCities.filter((eachCity) => eachCity.id !== id));
  };

  const emptySelectedCities = () => {
    setSelectedCities([]);
  };

  const selectAll = (checked) => {
    const uniqueSelectedCitiesObj = new Set([
      ...selectedCities,
      ...filteredData(),
    ]);
    const uniqueSelectedCities = [...uniqueSelectedCitiesObj];
    if (checked) {
      setSelectedCities(uniqueSelectedCities);
    } else {
      const currentFilteredData = filteredData();
      const cleanSelectedCities = selectedCities.filter(
        (eachSelectedCity) => !currentFilteredData.includes(eachSelectedCity)
      );
      setSelectedCities([...cleanSelectedCities]);
    }
  };

  const filteredData = () => {
    return data.filter((eachCity) =>
      eachCity.name.toLowerCase().includes(searchValue)
    );
  };

  return (
    <div className="page">
      <Header></Header>
      <main className="main">
        <ColumnLeft
          data={filteredData()}
          updateSearchValue={updateSearchValue}
          updateSelectedCities={updateSelectedCities}
          selectedCities={selectedCities}
          selectAll={selectAll}
        ></ColumnLeft>
        <ColumnRight
          selectedCities={selectedCities}
          deleteSelectedCity={deleteSelectedCity}
          emptySelectedCities={emptySelectedCities}
        ></ColumnRight>
      </main>
    </div>
  );
}

export default App;
