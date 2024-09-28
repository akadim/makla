import { FC } from "react";

import "./FoodMenu.scss";
import SubHeading from "../SubHeading/SubHeading";
import { data, images } from "../../constants";
import MenuItem from "../MenuItem/MenuItem";

const FoodMenu: FC = () => (
  <div className="site__specialMenu flex__center section__padding" id="menu">
    <div className="site__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="site__specialMenu-menu">
      <div className="site__specialMenu-menu_dishes  flex__center">
        <p className="site__specialMenu-menu_heading">Dishes & Desserts</p>
        <div className="site__specialMenu_menu_items">
          {data.dishes.map((dish, index) => (
            <MenuItem
              key={dish.title + index}
              title={dish.title}
              price={dish.price}
              tags={dish.tags}
            />
          ))}
        </div>
      </div>

      <div className="site__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="site__specialMenu-menu_desserts  flex__center">
        <p className="site__specialMenu-menu_heading">Cocktails</p>
        <div className="site__specialMenu_menu_items">
          {data.desserts.map((dessert, index) => (
            <MenuItem
              key={dessert.title + index}
              title={dessert.title}
              price={dessert.price}
              tags={dessert.tags}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default FoodMenu;
