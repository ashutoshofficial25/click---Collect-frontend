import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import img1 from "../public/static/home-carousel/carouse-home1.png";
import img2 from "../public/static/home-carousel/carouse-home2.png";
import img3 from "../public/static/home-carousel/carouse-home3.png";
import img4 from "../public/static/home-carousel/carouse-home4.png";
import img5 from "../public/static/home-carousel/carouse-home5.png";
import img6 from '../public/static/home-carousel/carouse-home6.png';
import img7 from '../public/static/home-carousel/carouse-home7.png';
import img8 from '../public/static/home-carousel/carouse-home8.png';
import img9 from '../public/static/home-carousel/carouse-home9.png';
import { Box } from "@mui/material";

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
    <Box mt={5}>
      <Slider {...settings}>
        <Image src={img1} />
        <Image src={img2} />
        <Image src={img3} />
        <Image src={img4} />
        <Image src={img5} />
        <Image src={img6} />
        <Image src={img7} />
        <Image src={img8} />
        <Image src={img9} />
      </Slider>
    </Box>
  );
};

export default Carousel;
