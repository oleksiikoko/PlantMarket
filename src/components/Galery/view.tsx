import * as React from "react";
import Slider from "react-slick";

import { IImg } from "../../interfaces/IProduct";

import "./style.scss";

interface IGaleryProps {
  images: Array<IImg>;
}

const Galery: React.FC<IGaleryProps> = (props) => {
  const settings = {
    accessibility: false,
    dots: true,
    lazyLoad: "ondemand" as const,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "image-slider",
  };

  return (
    <Slider {...settings}>
      {props.images.map((img) => (
        <div className="image-slide medium">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </Slider>
  );
};

export default Galery;
