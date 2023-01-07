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

// top-pics
import topOne from "../public/static/top-pics/top-pics-1.png";
import topTwo from "../public/static/top-pics/top-pics-2.png";
import topThree from "../public/static/top-pics/top-pics-3.png";
import topFour from "../public/static/top-pics/top-pics-4.png";
import topFive from "../public/static/top-pics/top-pics-5.png";
import topSix from "../public/static/top-pics/top-pics-6.png";
import topSeven from "../public/static/top-pics/top-pics-7.png";
import HeroOffer from "../components/HeroOffer";

export default function Home() {
  return (
    <>
      <Carousel />

      {/* Offer section | according to seassion */}

      <HeroOffer />

      {/* Deals of the day */}
      <div>
        <div className="ml-0 px-8 max-md:mt-10 max-md:mb-7 max-md:text-xl mt-20 mb-14  text-3xl  text-gray-700 font-semibold tracking-widest ">
          DEAL OF THE DAY
        </div>
        <div className="flex max-md:flex-wrap justify-center max-md:gap-2 w-full">
          <Image
            src={dealOne}
            alt="deal-of-the-day"
            width={160}
            height="auto"
          />
          <Image
            src={dealTwo}
            alt="deal-of-the-day"
            width={160}
            height="auto"
          />
          <Image
            src={dealThree}
            alt="deal-of-the-day"
            width={160}
            height="auto"
          />
          <Image
            src={dealFour}
            alt="deal-of-the-day"
            width={160}
            height="auto"
          />
          <Image
            src={dealFive}
            alt="deal-of-the-day"
            width={160}
            height="auto"
          />
          <Image
            src={dealSix}
            alt="deal-of-the-day"
            width={160}
            height="auto"
          />
          <Image
            src={dealSeven}
            alt="deal-of-the-day"
            width={160}
            height="auto"
          />
          <Image
            src={dealEight}
            alt="deal-of-the-day"
            width={160}
            height="auto"
          />
        </div>
      </div>
      {/* Exclusive Brands */}
      <div>
        <div className="ml-0 px-8 m-14 max-md:mt-10 max-md:mb-7 max-md:text-xl text-3xl text-gray-700 font-semibold tracking-widest ">
          BEST OF MYNTRA EXCLUSIVE BRANDS
        </div>
        <div className="flex gap-1 flex-wrap justify-center  w-full">
          <Image
            src={exclusiveOne}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveTwo}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveThree}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveFour}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveFive}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveSix}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveSeven}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveEight}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />

          <Image
            src={exclusiveOne}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveOne}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveOne}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveOne}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveOne}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveOne}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveOne}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
          <Image
            src={exclusiveOne}
            alt="deal-of-the-day"
            width={155}
            height="auto"
          />
        </div>
      </div>

      {/* Top Pics */}
      <div>
        <div className="ml-0 max-md:mt-10 max-md:mb-7 max-md:text-xl px-8 m-14 text-3xl text-gray-700 font-semibold tracking-widest ">
          TOP PICKS
        </div>
        <div className="flex flex-wrap justify-center  w-full">
          <Image src={topOne} alt="deal-of-the-day" height={220} width="auto" />
          <Image src={topTwo} alt="deal-of-the-day" height={220} width="auto" />
          <Image
            src={topThree}
            alt="deal-of-the-day"
            height={220}
            width="auto"
          />
          <Image
            src={topFour}
            alt="deal-of-the-day"
            height={220}
            width="auto"
          />
          <Image
            src={topFive}
            alt="deal-of-the-day"
            height={220}
            width="auto"
          />
          <Image src={topSix} alt="deal-of-the-day" height={220} width="auto" />
          <Image
            src={topSeven}
            alt="deal-of-the-day"
            height={220}
            width="auto"
          />
        </div>
      </div>

      {/* Categories to bag */}

      {/* deals on top brand */}
      <div>
        <div className="ml-0 px-8 max-md:mt-10 max-md:mb-7 max-md:text-xl mt-20 mb-14  text-3xl  text-gray-700 font-semibold tracking-widest ">
          DEALS ON TOP BRANDS
        </div>
        <div className="flex flex-wrap justify-center  w-full">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand1.png?alt=media&token=498eb432-cc90-4337-97f3-b4d2ed9a60da"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand2.png?alt=media&token=de26aff5-a8fb-4590-a5e8-e08ac4edf155"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand3.png?alt=media&token=6cf5fd03-8853-407a-b845-edadedefab03"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand4.png?alt=media&token=ab32a303-d950-438d-bfc5-9897c8e82e16"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand5.png?alt=media&token=cc43dc3f-9365-4277-a940-a3cb90bb6004"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand6.png?alt=media&token=72750c16-0a04-4daf-84b8-a5b7d43d5ffa"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand7.png?alt=media&token=e23b8062-4570-4512-be12-ef0ac7d1206d"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand8.png?alt=media&token=27000940-7bc4-46ca-a2dd-bb8778b70d5a"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          {/* 2nd line */}

          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand9.png?alt=media&token=930f9ea9-baf2-4db3-94d9-1a79174fc91b"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand10.png?alt=media&token=6d3e12c9-10f1-41d3-8672-6c5e8cfb2181"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand11.png?alt=media&token=9d3748f4-e34e-4980-bfcb-efeeb61e86f9"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand12.png?alt=media&token=24d24a30-7a0b-4d53-9d2e-584968494bcb "
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand13.png?alt=media&token=9aa82d2d-2492-41ae-82c6-36de93740f86"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand14.png?alt=media&token=3f418676-9a42-4cb1-bfc2-618438cea060"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand15.png?alt=media&token=7ad44197-0232-4565-bcbf-284bdac66fa6"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand16.png?alt=media&token=7d0d5b92-f04b-491b-b427-a02aa286f429"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          {/* third */}
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand17.png?alt=media&token=637f8922-781c-4de2-9891-11ff2ec281ea"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand18.png?alt=media&token=4b93bcbc-f903-46eb-b640-120e39a6c13f"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand19.png?alt=media&token=54a28376-7ea1-4efe-bff7-74d29a8ef2d3"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand20.png?alt=media&token=ff739849-7290-4b83-bd04-cc347fe96bf8 "
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand21.png?alt=media&token=ab59a51d-9a94-4d11-9d85-3c92a3d49195"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand22.png?alt=media&token=54fdc6c1-976e-430c-8562-cfaff269a420"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand23.png?alt=media&token=aea72ffc-c792-4279-88dc-6c9bcb89a5ac"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fdeals-on-top-brands%2Fdeals-top-brand24.png?alt=media&token=f8729199-e75e-4c25-84b9-ba5b3d36121b"
            alt="deal-of-the-day"
            width={155}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
        </div>
      </div>

      {/* SLASHED PRICES */}

      {/* best buys */}

      {/* myntra luxe */}

      {/* Gifting card */}

      {/* Spring summber */}

      {/* stylecast hottest */}
      <div>
        <div className="ml-0 px-8 max-md:mt-10 max-md:mb-7 max-md:text-xl mt-20 mb-14  text-3xl  text-gray-700 font-semibold tracking-widest ">
          STYLECAST HOTTEST FINDS
        </div>
        <div className="flex max-md:flex-wrap justify-center  w-full">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fstylecast-hottest%2Fstylecast-hottest-1.png?alt=media&token=cf22230b-0d2f-4091-8d2a-19667b31b05d"
            alt="deal-of-the-day"
            width={200}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fstylecast-hottest%2Fstylecast-hottest-2.png?alt=media&token=9543ff11-6b24-4d3e-8046-f1f9d9763f0a"
            alt="deal-of-the-day"
            width={200}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fstylecast-hottest%2Fstylecast-hottest-3.png?alt=media&token=8b8fedac-72d4-4524-8ae0-56f1551aa594"
            alt="deal-of-the-day"
            width={200}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fstylecast-hottest%2Fstylecast-hottest-4.png?alt=media&token=6a119363-a925-4801-8863-3d9b25638838"
            alt="deal-of-the-day"
            width={200}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fstylecast-hottest%2Fstylecast-hottest-5.png?alt=media&token=e93f0160-ed18-4160-bf76-d69b98c5ac73"
            alt="deal-of-the-day"
            width={200}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fstylecast-hottest%2Fstylecast-hottest-6.png?alt=media&token=2c0ff2af-e4ff-46d0-b47d-834518131416"
            alt="deal-of-the-day"
            width={200}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myntra-82a2c.appspot.com/o/assets%2Fstylecast-hottest%2Fstylecast-hottest-7.png?alt=media&token=9545e475-310c-45d7-98db-ce84b2b62d51"
            alt="deal-of-the-day"
            width={200}
            className="min-[600px]:max-[920px]:w-32 min-[200px]:max-[600px]:w-28  "
            height="150"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
