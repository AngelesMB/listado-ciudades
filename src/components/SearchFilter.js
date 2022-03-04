const SearchFilter = ({ searchValue, updateSearchValue }) => {
  const handleChange = (ev) => {
    updateSearchValue(ev.currentTarget.value);
  };
  return (
    <label htmlFor="citiesFilter">
      <i className="fas fa-search main__form--label" aria-hidden="true"></i>
      <input
        className="main__form--input"
        type="text"
        name="citiesFilter"
        id="citiesFilter"
        placeholder="Search by name"
        value={searchValue}
        onChange={handleChange}
      />
    </label>
  );
};

export default SearchFilter;
