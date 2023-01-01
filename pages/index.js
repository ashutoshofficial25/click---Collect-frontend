import { Inter } from "@next/font/google";
import Carousel from "../components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// deal-od-day
import dealOne from "../public/static/deal-of-day/deal-of-day-1.png";
import dealTwo from "../public/static/deal-of-day/deal-of-day-2.png";
import dealThree from "../public/static/deal-of-day/deal-of-day-3.png";
import dealFour from "../public/static/deal-of-day/deal-of-day-4.png";
import dealFive from "../public/static/deal-of-day/deal-of-day-5.png";
import dealSix from "../public/static/deal-of-day/deal-of-day-6.png";
import dealSeven from "../public/static/deal-of-day/deal-of-day-7.png";
import dealEight from "../public/static/deal-of-day/deal-of-day-8.png";

// exclusive-brand
import exclusiveOne from "../public/static/exclusive-brand/exclusive-brand-1.png";
import exclusiveTwo from "../public/static/exclusive-brand/exclusive-brand-2.png";
import exclusiveThree from "../public/static/exclusive-brand/exclusive-brand-3.png";
import exclusiveFour from "../public/static/exclusive-brand/exclusive-brand-4.png";
import exclusiveFive from "../public/static/exclusive-brand/exclusive-brand-5.png";
import exclusiveSix from "../public/static/exclusive-brand/exclusive-brand-6.png";
import exclusiveSeven from "../public/static/exclusive-brand/exclusive-brand-7.png";
import exclusiveEight from "../public/static/exclusive-brand/exclusive-brand-8.png";

export default function Home() {
  return (
    <>
      <Carousel />
      <div>
        <div className="ml-0 px-8 mt-20 mb-14 text-3xl text-gray-700 font-semibold tracking-widest ">
          DEAL OF THE DAY
        </div>
        <div className="flex xs:flex-wrap xs:justify-center w-full">
          <Image
            src={dealOne}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealTwo}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealThree}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealFour}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealFive}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealSix}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealSeven}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealEight}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
        </div>
      </div>
      <div>
        <div className="ml-0 px-8 m-14 text-3xl text-gray-700 font-semibold tracking-widest ">
          BEST OF MYNTRA EXCLUSIVE BRANDS
        </div>
        <div className="flex gap-1 md:flex-wrap md:justify-center w-full">
          <Image
            src={exclusiveOne}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={exclusiveTwo}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={exclusiveThree}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={exclusiveFour}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={exclusiveFive}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={exclusiveSix}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={exclusiveSeven}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={exclusiveEight}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
        </div>

        <div className="flex gap-1 xs:flex-wrap xs:justify-center w-full">
          <Image
            src={dealOne}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealTwo}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealThree}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealFour}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealFive}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealSix}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealSeven}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
          <Image
            src={dealEight}
            alt="deal-of-the-day"
            height={250}
            width="auto"
          />
        </div>
      </div>
    </>
  );
}
