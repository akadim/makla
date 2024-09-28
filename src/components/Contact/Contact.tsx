import { FC } from "react";

import SubHeading from "../SubHeading/SubHeading";
import { images } from "../../constants";

const Contact: FC = () => {
  return (
    <div
      className="site__wrapper section__padding"
      id="contact"
      style={{ backgroundColor: "#000" }}
    >
      <div className="site__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="site__wrapper-content">
          <p className="p__opensans">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </button>
      </div>

      <div className="site__wrapper_img">
        <img src={images.contact} alt="contact_image" />
      </div>
    </div>
  );
};

export default Contact;
