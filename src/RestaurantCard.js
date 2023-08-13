import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return(
        <div className="res-card">
            <div className="res-logo">
                <img src={CDN_URL + cloudinaryImageId} alt="Restaurant main picture"></img>
            </div>
            <h4>{name}</h4>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwo}</p>
            <p>{avgRating} ⭐</p>
            <p>{deliveryTime} Mins. ⏰</p>
        </div>
        
    )
};

export default RestaurantCard;