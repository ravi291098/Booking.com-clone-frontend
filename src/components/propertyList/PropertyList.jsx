import "./propertyList.css";
import list from '../../assests/propertyList.json'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const PropertyList = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  return (
    <div className="pList">
      {
        list?.map((item) => {
          return (
            <div className="pListItem" onClick={() => navigate("/hotels", { state: { destination, date, options } })} >
              <img
                src={item.img}
                alt=""
                className="pListImg"
              />
              <div className="pListTitles">
                <h1>{item.title}</h1>
                <h2>{item.qty}</h2>
              </div>
            </div>
          )
        })
      }

    </div>
  );
};

export default PropertyList;
