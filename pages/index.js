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

      <div className="ml-5 px-10 mt-10 text-3xl text-slate-600   font-bold tracking-wide ">DEAL OF THE DAY</div>
    </>
  );
}
