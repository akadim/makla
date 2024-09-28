import { FC } from "react";

import "./FooterOverlay.scss";

const FooterOverlay: FC = () => {
  return (
    <div className="site__footerOverlay">
      <div className="site__footerOverlay-black" />
      <div className="site__footerOverlay-img app__bg" />
    </div>
  );
};

export default FooterOverlay;
