"use client";
import InputField from "@/components/input";
import React, { useState, ChangeEvent, useEffect } from "react";
import { User } from "../interface";
import Button from "@/components/button";
import { useFormik } from "formik";
import * as yup from "yup";
import InputPassword from "@/components/input-password";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TextGradient from "@/components/text-gradient";

function Register() {
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: () => {
      postData();
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email Is Required!"),
      username: yup
        .string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      password: yup
        .string()
        .min(8, "Password Minimum 8 characters")
        .required("Required!"),
      confirm_password: yup
        .string()
        .oneOf([yup.ref("password")], "Password's not match")
        .required("Required!"),
    }),
  });

  useEffect(() => {
    if (formik.isValid) {
      setIsValid(formik.isValid);
    } else {
      setIsValid(false);
    }
    console.log(isValid);
  }, [formik.isValid]);

  useEffect(() => {
    setIsValid(false);
  }, []);

  const postData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${baseUrl}api/register`, formik.values);
      console.log(res);
      router.push("/auth/login");
    } catch (error) {
      console.log("asdasdasd");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <p className="text-2xl font-bold mb-5">Register</p>
      <InputField
        value={formik.values.email}
        placeholder="Enter Email"
        onChange={formik.handleChange}
        name="email"
        type="email"
        err={formik.errors.email}
      />
      <InputField
        value={formik.values.username}
        placeholder="Create Username"
        onChange={formik.handleChange}
        name="username"
        err={formik.errors.username}
      />
      <InputPassword
        value={formik.values.password}
        placeholder="Create Password"
        onChange={formik.handleChange}
        name="password"
        err={formik.errors.password}
      />
      <InputPassword
        value={formik.values.confirm_password}
        placeholder="Confirm Password"
        onChange={formik.handleChange}
        name="confirm_password"
        err={formik.errors.confirm_password}
      />
      <Button
        isLoading={isLoading}
        type="submit"
        className="mt-5"
        disabled={!isValid}
      >
        {"Register"}
      </Button>
      <div className="flex justify-center mt-10 gap-2">
        <p>Have an account?</p>
        <Link href="/auth/login">
          <TextGradient>Login here</TextGradient>
        </Link>
      </div>
    </form>
  );
}

export default Register;
