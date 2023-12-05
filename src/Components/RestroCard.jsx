import { CDN_URL } from "../Utils/constants";

const RestroCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines,avgRating,deliveryTime }= resData?.info
    console.log(resData.info);
  
    return (
      <div className="res-card" style={{ backgroundColor: "#EEEEEE" }}>
        <img className="res-logo" src= {CDN_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.slice(0,3).join(',')}</h4>
        <h4>Avg-Rating:{avgRating} Stars</h4>
        <h4>Avg ETA:{deliveryTime}</h4>
      </div>
    );
  };
  export default RestroCard