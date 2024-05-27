"use client";
import React, { ChangeEvent, useState } from "react";
import { PiPencilSimpleLine } from "react-icons/pi";
import { IData } from "./interface";
import InputField from "@/components/input";
import Select from "@/components/select";

interface AboutProps {
  data: IData | undefined;
  onChangeData: (value: any, name: string) => void;
}

const FormAbout: React.FC<AboutProps> = ({ data, onChangeData }) => {
  const [form, setForm] = useState({
    name: "",
    gender: "",
  });
  const handleSelect = (value: string) => {
    onChangeData(value, "gender");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    console.log(typeof e.target.type);

    onChangeData(value, name);
  };

  return (
    <>
      <div className="grid grid-cols-5 mt-3">
        <p className="text-white opacity-35 col-span-2 mt-2.5 ">
          Display Name:
        </p>
        <div className="col-span-3">
          <InputField
            textRight
            onChange={handleChange}
            value={data?.name}
            name="name"
          />
        </div>
        <p className="text-white opacity-35 col-span-2 mt-2.5 ">Gender:</p>
        <div className="col-span-3">
          {/* <InputField
            textRight
            onChange={handleChangeInput}
            value={form.name}
            name="name"
          /> */}
          <Select
            onChange={handleSelect}
            options={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
            value={form.gender}
          />
        </div>
        <p className="text-white opacity-35 col-span-2 mt-2.5 ">Birthday:</p>
        <div className="col-span-3">
          <InputField
            type="date"
            textRight
            onChange={handleChange}
            value={data?.birthday}
            name="birthday"
          />
        </div>
        <p className="text-white opacity-35 col-span-2 mt-2.5 ">Horoscope:</p>
        <div className="col-span-3">
          <InputField
            placeholder="--"
            textRight
            onChange={handleChange}
            value={data?.horoscope}
            name="horoscope"
            disabled
          />
        </div>
        <p className="text-white opacity-35 col-span-2 mt-2.5 ">Zodiac:</p>
        <div className="col-span-3">
          <InputField
            placeholder="--"
            textRight
            onChange={handleChange}
            value={data?.zodiac}
            name="zodiac"
            disabled
          />
        </div>
        <p className="text-white opacity-35 col-span-2 mt-2.5 ">Height:</p>
        <div className="col-span-3">
          <InputField
            textRight
            onChange={handleChange}
            value={data?.height}
            name="height"
            type="number"
          />
        </div>
        <p className="text-white opacity-35 col-span-2 mt-2.5 ">Weight:</p>
        <div className="col-span-3">
          <InputField
            textRight
            onChange={handleChange}
            value={data?.weight}
            name="weight"
            type="number"
          />
        </div>
      </div>
    </>
  );
};

export default FormAbout;
