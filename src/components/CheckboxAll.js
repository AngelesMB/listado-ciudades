const CheckboxAll = ({ length, selectAll, selectedCities, data }) => {
  const handleSelectAll = (ev) => {
    selectAll(ev.currentTarget.checked);
  };
  return (
    <div className="main__cities--count">
      <input
        type="checkbox"
        name="citiesCount"
        id="citiesCount"
        onChange={handleSelectAll}
        checked={data.every((element) => selectedCities.includes(element))}
      />
      <label htmlFor="citiesCount" className="cities__count">
        {length} items
      </label>
    </div>
  );
};

export default CheckboxAll;
