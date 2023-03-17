import { Inter } from "@next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Admin from "./admin";
import Homepage from "../components/Home";
import { useSelector } from "react-redux";

export default function Home() {
  const { user } = useSelector((state) => state.user);

  return <>{user && user.role == "vendor" ? <Admin /> : <Homepage />}</>;
}
