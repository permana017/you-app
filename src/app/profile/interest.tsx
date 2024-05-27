"use client";
import React from "react";
import { PiPencilSimpleLine } from "react-icons/pi";
import { IData } from "./interface";
import Link from "next/link";

interface InterestProps {
  data: IData | undefined;
}

const Interest: React.FC<InterestProps> = ({ data }) => {
  return (
    <div className="w-full bg-[#0E191F] p-3 px-5 rounded-lg">
      <div className="flex justify-between">
        <p className="text-white font-semibold">Interest</p>
        <Link href="/profile/interest">
          <PiPencilSimpleLine className="text-white cursor-pointer" size={22} />
        </Link>
      </div>
      <div className="py-3 flex flex-wrap gap-2">
        {!data?.interests?.length ? (
          <p className="text-white opacity-35">
            Add in your interest to find a better match
          </p>
        ) : (
          data.interests.map((item, i) => (
            <p
              key={i}
              className="bg-white bg-opacity-10 p-1 px-2.5 rounded text-white"
            >
              {item}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default Interest;
