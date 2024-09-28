import { FC } from "react";

import "./MenuItem.scss";

interface MenuItemProps {
  title: string;
  price: string;
  tags: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, price, tags }) => {
  return (
    <div className="site__menuitem">
      <div className="site__menuitem-head">
        <div className="site__menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="site__menuitem-dash" />
        <div className="site__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="site__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
