import { FC } from "react";

import "./Newsletter.scss";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter: FC = () => {
  return (
    <div className="site__newsletter">
      <div className="site__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="site__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
