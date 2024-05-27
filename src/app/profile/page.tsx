"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import chevron from "../../../public/chevron.svg";
import Image from "next/image";
import axiosInstance from "@/utils/axiosSetup";
import About from "./about";
import Interest from "./interest";
import { IData } from "./interface";
import { NextPage } from "next";
import { getZodiacSign } from "@/utils/zodiac";
import { getHoroscope } from "@/utils/hosroscope";

const Profile: NextPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      redirect("/auth/login");
    }
  }, []);
  const [data, setData] = useState<IData>({
    username: "",
    name: "",
    email: "",
    birthday: "",
    height: "",
    weight: "",
    interests: [],
    zodiac: "",
    horoscope: "",
    gender: "",
  });
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const getProfile = async () => {
    try {
      const res = await axiosInstance.get("api/getProfile");
      setData(res.data?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getProfile();
  }, []);

  const handleChangeAbout = (value: any, name: string) => {
    if (name == "birthday") {
      let birthday = new Date(value);
      let zodiac = getZodiacSign(birthday);
      let horoscope = getHoroscope(zodiac);
      setData({
        ...data,
        birthday: value,
        zodiac: horoscope,
        horoscope: zodiac,
      });
    } else if (name == "weight" || name == "height") {
      setData({
        ...data,
        [name]: Number(value),
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <main className="w-full bg-[#09141A] min-h-[100vh] p-4 pt-10 flex justify-center">
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <div
          className="flex gap-2 cursor-pointer mt-10 sm:mb-10"
          onClick={goBack}
        >
          <Image src={chevron} alt="chevron" className="w-auto h-auto" />
          <p className="font-semibold text-lg text-white">Back</p>
        </div>
        <div className="w-full bg-[#162329] p-5 rounded-lg h-48 relative overflow-hidden flex items-end">
          {previewUrl && (
            <img
              src={previewUrl}
              alt="image"
              className="w-auto h-auto absolute top-0 left-0 object-cover"
            />
          )}
          <div className="z-20 relative">
            <p className="text-white font-semibold">
              {data?.name ?? data.email}
            </p>
            <div className="flex gap-2 mt-1">
              {data.horoscope && (
                <p className="text-white p-1.5 px-2 bg-white bg-opacity-10 text-sm rounded-full">
                  {data?.horoscope}
                </p>
              )}
              {data.zodiac && (
                <p className="text-white p-1.5 px-2 bg-white bg-opacity-10 text-sm  rounded-full">
                  {data?.zodiac}
                </p>
              )}
            </div>
          </div>
        </div>
        <About
          addImage={handleInputFile}
          data={data}
          onChangeData={handleChangeAbout}
        />
        <Interest data={data} />
      </div>
    </main>
  );
};

export default Profile;
