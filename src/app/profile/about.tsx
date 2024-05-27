"use client";
import React, { ChangeEvent, useState } from "react";
import { PiPencilSimpleLine } from "react-icons/pi";
import { IData } from "./interface";
import FormAbout from "./formAbout";
import AboutInfo from "./aboutInfo";
import TextGradient from "@/components/text-gradient";
import { FiPlus } from "react-icons/fi";
import axiosInstance from "@/utils/axiosSetup";
import { useRouter } from "next/navigation";

interface AboutProps {
  data: IData;
  onChangeData: (value: any, name: string) => void;
  addImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const About: React.FC<AboutProps> = ({ data, onChangeData, addImage }) => {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();
  const updateProfile = async () => {
    try {
      const res = await axiosInstance.put("api/updateProfile", data);
      alert(res.data.message);
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full bg-[#0E191F] p-3 px-5 rounded-lg">
      <div className="flex justify-between">
        <p className="text-white font-semibold">About</p>
        {!isEdit ? (
          <PiPencilSimpleLine
            className="text-white cursor-pointer"
            size={22}
            onClick={() => setIsEdit(true)}
          />
        ) : (
          <TextGradient
            className="text-sm cursor-pointer"
            onClick={updateProfile}
          >
            Save & Update
          </TextGradient>
        )}
      </div>
      {isEdit && (
        <>
          <label
            htmlFor="inputImg"
            className="mt-4 flex gap-2 items-center cursor-pointer"
          >
            <div className="p-3 bg-[#FFFFFF38] w-max rounded-lg">
              <FiPlus size={30} className="text-white opacity-100" />
            </div>
            <p className="text-white">Add Image</p>
          </label>
          <input
            id="inputImg"
            type="file"
            className="hidden"
            onChange={addImage}
          />
        </>
      )}
      <div className="mt-4">
        {isEdit ? (
          <FormAbout data={data} onChangeData={onChangeData} />
        ) : !isEdit && data?.birthday ? (
          <AboutInfo data={data} />
        ) : (
          <p className="text-white opacity-50">
            Add in your your to help others know you better
          </p>
        )}
      </div>
    </div>
  );
};

export default About;
