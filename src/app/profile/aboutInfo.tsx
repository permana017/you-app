import React from "react";
import { IData } from "./interface";

interface AboutProps {
  data: IData;
}

const AboutInfo: React.FC<AboutProps> = ({ data }) => {
  return (
    <>
      <div className="flex gap-2">
        <p className="text-white opacity-35">Birthday : </p>
        <p className="text-white ">{data?.birthday}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-white opacity-35">Horoscope : </p>
        <p className="text-white ">{data?.horoscope}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-white opacity-35">Zodiac : </p>
        <p className="text-white ">{data?.zodiac}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-white opacity-35">Height : </p>
        <p className="text-white ">{data?.height}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-white opacity-35">Weight : </p>
        <p className="text-white ">{data?.weight}</p>
      </div>
    </>
  );
};

export default AboutInfo;
