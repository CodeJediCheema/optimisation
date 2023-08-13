import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";






const RestaurantMenu = () =>{

    

    const {resId} = useParams();
    const resMenu = useRestaurantMenu(resId);

   
    
    if (resMenu === null) return <Shimmer/>;
            
    const {name,cuisines,areaName,costForTwoMessage,avgRating} = resMenu?.data?.cards[0]?.card?.card?.info;
    const {lastMileTravelString,deliveryTime} = resMenu?.data?.cards[0]?.card?.card?.info?.sla;
   
    const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating + "⭐"}</p>
            <p>{areaName}{", "}{lastMileTravelString}</p>
            <hr></hr>
            <p>{"⏳" + deliveryTime + " mins"}{" -  " + costForTwoMessage}</p>
            

            <hr color="1px dotted green"></hr>

            <h2>Menu</h2>
            <ol>
                {itemCards.map((items) => <li key={items?.card?.info?.id}>{items?.card?.info?.name} - ₹ {items?.card?.info?.price/100}</li> )}
                
            </ol>
            
            
            
        </div>
    )
}

export default RestaurantMenu;