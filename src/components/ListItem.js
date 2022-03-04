import cityIcon from "../images/city_icon.png";

const ListItem = ({ cityName, chineseName, id, deleteSelectedCity }) => {
  const handleClick = (ev) => {
    deleteSelectedCity(id);
  };
  return (
    <li className="city__list--item selected" key={id}>
      <div className="selected__city--detail">
        <img src={cityIcon} alt="cityIcon" className="city__icon" />
        <div>
          <h4 className="city__list--name">{cityName}</h4>
          <p>{chineseName}</p>
        </div>
      </div>
      <div className="clear__x" onClick={handleClick}>
        X
      </div>
    </li>
  );
};

export default ListItem;
