import { Inter } from "@next/font/google";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Dropdown /> */}
      <Carousel />
    </>
  );
}
