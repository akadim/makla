import { FC, useRef } from "react";

import "./Gallery.scss";
import SubHeading from "../SubHeading/SubHeading";
import { images } from "../../constants";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";

const Gallery: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const gallery = scrollRef.current!;
    const scrollAmount = 300;

    if (direction === "left") {
      gallery.scrollLeft -= scrollAmount;
    } else {
      gallery.scrollLeft += scrollAmount;
    }
  };
  return (
    <div className="site__gallery flex__center app__bg">
      <div className="site__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
      </div>
      <div className="site__gallery-images">
        <div className="site__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="site__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="site__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => handleScroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
