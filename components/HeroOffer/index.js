import React from "react";
import Image from "next/image";
import offerImg from "../../public/static/offers/offer.png";

const HeroOffer = () => {
  return (
    <div className="my-7">
      <Image height="auto" width="auto" src={offerImg} />
    </div>
  );
};

export default HeroOffer;
