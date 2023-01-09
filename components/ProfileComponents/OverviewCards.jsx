import Image from "next/image";
import React from "react";

const OverviewCards = ({ title, src, subtitle, content, setContent }) => {
  return (
    <div
      className="card border border-gray-400 p-10 w-56 flex flex-col items-center hover:bg-gray-100 cursor-pointer"
      onClick={() => setContent(content)}
    >
      <Image height={50} width={50} src={src} />
      <p className="text-sm font-semibold text-center">{title}</p>
      <p className="text-xs text-center text-gray-500">{subtitle}</p>
    </div>
  );
};

export default OverviewCards;
