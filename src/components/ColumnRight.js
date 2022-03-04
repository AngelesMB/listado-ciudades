import ListItem from "./ListItem";

const ColumnRight = ({
  selectedCities,
  deleteSelectedCity,
  emptySelectedCities,
}) => {
  const handleClickClear = () => {
    emptySelectedCities();
  };
  const citiesDataList = () => {
    return selectedCities
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((eachCity) => (
        <ListItem
          key={eachCity.id}
          id={eachCity.id}
          cityName={eachCity.name}
          chineseName={eachCity.chineseName}
          deleteSelectedCity={deleteSelectedCity}
        ></ListItem>
      ));
  };
  return (
    <div className="main__column--right">
      <div className="main__selected--count">
        <span>{selectedCities.length} items</span>
        <div className="clear__button" onClick={handleClickClear}>
          Clear
        </div>
      </div>
      <div>
        <ul>{citiesDataList()}</ul>
      </div>
    </div>
  );
};

export default ColumnRight;
