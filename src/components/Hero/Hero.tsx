import { FC } from "react";
import { images } from "../../constants";
import SubHeading from "../SubHeading/SubHeading";

import "./Hero.scss";

const Hero: FC = () => {
  return (
    <div className="site__hero site__wrapper section__padding" id="home">
      <div className="site__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="site__hero-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="site__wrapper_img">
        <img src={images.welcome} alt="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
