import { useNavigate } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ data }) => {
  const navigate = useNavigate()
  const handleNavigate = (id) => {
    navigate(`/hotels/${id}`)
  }
  return (
    <div className="searchItem">
      <img
        src={data.img}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle" style={{ cursor: 'pointer' }} onClick={() => handleNavigate(1)}>{data.title}</h1>
        <span className="siDistance">{data.distance}</span>
        <span className="siTaxiOp">{data.offer}</span>
        <span className="siSubtitle">
          {data.feature}
        </span>
        <span className="siFeatures">
          {data.description}
        </span>
        <span className="siCancelOp">{data.cancelOption} </span>
        <span className="siCancelOpSubtitle">
          {data.cancellation}
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{data.rating}</span>
          <button>{data.star}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs {data.price}</span>
          <span className="siTaxOp">{data.tax}</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
