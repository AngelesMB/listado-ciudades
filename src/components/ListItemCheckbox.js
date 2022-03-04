import cityIcon from "../images/city_icon.png";

const ListItemCheckbox = ({
  id,
  cityName,
  chineseName,
  updateSelectedCities,
  selectedCities,
}) => {
  const handleChange = (ev) => {
    updateSelectedCities(ev.currentTarget.id);
  };
  const selectedCity = selectedCities.find((eachCity) => eachCity.id === id);

  return (
    <li className="city__list--item" key={id}>
      <input
        type="checkbox"
        name="cityItem"
        id={id}
        value={cityName}
        onChange={handleChange}
        checked={selectedCities.includes(selectedCity)}
      />
      <label htmlFor={id} className="city__list--label">
        <img src={cityIcon} alt="cityIcon" className="city__icon" />
        <div>
          <p className="city__list--name">{cityName}</p>
          <p>{chineseName}</p>
        </div>
      </label>
    </li>
  );
};

export default ListItemCheckbox;
