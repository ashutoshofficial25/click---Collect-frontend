import { Inter } from "@next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Admin from "./admin";
import Homepage from "../components/Home";

export default function Home() {
  let isAdmin = false;

  return <>{isAdmin ? <Admin /> : <Homepage />}</>;
}
