import "./propertyList.css";
import list from '../../assests/propertyList.json'
const PropertyList = () => {
  return (
    <div className="pList">
      {
        list?.map((item) => {
          return (
            <div className="pListItem">
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
