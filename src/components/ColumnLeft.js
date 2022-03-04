import CheckboxAll from "./CheckboxAll";
import ListItemCheckbox from "./ListItemCheckbox";
import SearchFilter from "./SearchFilter";

const ColumnLeft = ({
  data,
  updateSearchValue,
  updateSelectedCities,
  selectedCities,
  selectAll,
  isSelectedAll,
}) => {
  const citiesDataList = () => {
    return data
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((eachCity) => (
        <ListItemCheckbox
          key={eachCity.id}
          id={eachCity.id}
          cityName={eachCity.name}
          chineseName={eachCity.chineseName}
          updateSelectedCities={updateSelectedCities}
          selectedCities={selectedCities}
        ></ListItemCheckbox>
      ));
  };

  return (
    <div className="main__column--left">
      <form action="" className="main__form">
        <SearchFilter updateSearchValue={updateSearchValue}></SearchFilter>
      </form>
      <div>
        <CheckboxAll
          length={data.length}
          selectAll={selectAll}
          isSelectedAll={isSelectedAll}
          selectedCities={selectedCities}
          data={data}
        ></CheckboxAll>
        <div>
          <ul className="city__list">{citiesDataList()}</ul>
        </div>
      </div>
    </div>
  );
};

export default ColumnLeft;
