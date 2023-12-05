import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constants";
const Menu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const {resId} = useParams()

  const fetchMenu = async () => {
    const data = await fetch(
     MENU_API+resId
    );
    const menuData = await data.json();

    console.log(menuData.data);
    setResInfo(menuData.data);
    console.log(resInfo);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  //{//     let name, cuisines, costForTwoMessage;

  // if (resInfo?.cards[0]?.card?.card?.info) {
  //     ({ name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info);
  //
  // another way to deconstruct , idk whats happening here , ill try
  // }}//

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    //   console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        Cuisines: {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item)=>
        <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}
        </li>
        )}

      </ul>
    </div>
  );
};
export default Menu;
