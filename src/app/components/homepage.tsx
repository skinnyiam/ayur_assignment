import React from "react";
import Image from "next/image";
type Props = {};

const homepage = (props: Props) => {
  return (
    <div className="flex items-center">
      <div className="flex">
        <div className="p-8 w-[50%]">
          <Image src="/health.avif" alt="health " width={700} height={700} />
        </div>
        <div className="flex flex-col justify-center items-center w-[50%]">
          <h1 className="text-3xl font-bold text-black leading-normal">
            Unlocking the Power of Ayurveda for Optimal Health and Wellness
          </h1>
          <p className="pt-4 text-black font-medium">
            Explore the profound principles of Ayurveda and learn how this
            5,000-year-old holistic healing system can rejuvenate your body,
            mind, and spirit
          </p>
        </div>
      </div>
    </div>
  );
};

export default homepage;
