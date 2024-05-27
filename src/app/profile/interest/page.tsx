"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import { CgChevronLeft } from "react-icons/cg";
import TextGradient from "@/components/text-gradient";
import MultipleInput from "@/components/multiple-input";
import { IData } from "../interface";
import axiosInstance from "@/utils/axiosSetup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function InterestPage() {
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
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const handleAddItem = (value: string) => {
    setData({
      ...data,
      interests: [...data.interests, value],
    });
  };
  const handleDeleteItem = (value: string) => {
    setData({
      ...data,
      interests: data.interests.filter((el) => el !== value),
    });
  };
  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    try {
      const res = await axiosInstance.get("api/getProfile");
      setData(res.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.put("api/updateProfile", data);
      alert(res.data.message);
      router.push("/profile");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container-auth p-4 pt-20 flex justify-center">
      <div className="w-full max-w-xl">
        <div className="flex justify-between">
          <div className="flex cursor-pointer -ml-2" onClick={goBack}>
            <CgChevronLeft size={30} />
            <p className="font-semibold text-lg">Back</p>
          </div>
          {!isLoading ? (
            <TextGradient
              className="bg-text-gradient-blue text-lg cursor-pointer"
              onClick={updateProfile}
            >
              Save
            </TextGradient>
          ) : (
            <div className="flex items-center gap-2">
              <AiOutlineLoading3Quarters
                size={20}
                widths={10}
                className="animate-spin"
              />
              <TextGradient className="bg-text-gradient-blue text-lg">
                Save Data
              </TextGradient>
            </div>
          )}
        </div>
        <div className="mt-20 px-3 mb-5">
          <TextGradient>Tell everyone about yourself</TextGradient>
          <p className="font-semibold text-lg">What interest you?</p>
        </div>
        <MultipleInput
          values={data.interests}
          addItem={handleAddItem}
          deleteItem={handleDeleteItem}
        />
      </div>
    </main>
  );
}

export default InterestPage;
