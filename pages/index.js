import { Inter } from "@next/font/google";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Carousel />

      <div className="ml-0 px-10 mt-28 text-4xl text-gray-700   font-semibold tracking-widest ">
        DEAL OF THE DAY
      </div>
    </>
  );
}
