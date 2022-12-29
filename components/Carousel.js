import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import img from "../public/static/home-carousel/carouse-home1.png";
import img1 from "../public/static/home-carousel/carouse-home2.png";
import img2 from "../public/static/home-carousel/carouse-home3.png";
import img3 from "../public/static/home-carousel/carouse-home4.png";
import img4 from "../public/static/home-carousel/carouse-home5.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <Image src={img} />
        <Image src={img1} />
        <Image src={img2} />
        <Image src={img3} />
        <Image src={img4} />
      </Slider>
    </div>
  );
};

export default Carousel;
