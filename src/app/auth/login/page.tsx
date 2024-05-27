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
import TextGradient from "@/components/text-gradient";
import Link from "next/link";

function Login() {
  const [isValid, setIsValid] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      postData();
    },
    validationSchema: yup.object({
      email: yup.string().min(2, "Mininum 2 characters").required("Required!"),
      password: yup
        .string()
        .min(8, "Password Minimum 8 characters")
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
    let body = {
      username: formik.values.email,
      email: formik.values.email,
      password: formik.values.password,
    };
    try {
      const { data } = await axios.post(`${baseUrl}api/login`, body);
      localStorage.setItem("token", data.access_token);
      if (data.access_token) {
        router.push("/profile");
      }
      alert(data.message);
      //   router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <p className="text-2xl font-bold mb-5">Login</p>
      <InputField
        value={formik.values.email}
        placeholder="Create email"
        onChange={formik.handleChange}
        name="email"
        err={formik.errors.email}
      />
      <InputPassword
        value={formik.values.password}
        placeholder="Create Password"
        onChange={formik.handleChange}
        name="password"
        err={formik.errors.password}
      />
      <Button type="submit" className="mt-5" disabled={!isValid}>
        Login
      </Button>
      <div className="flex justify-center mt-10 gap-2">
        <p>No account?</p>
        <Link href="/auth/register">
          <TextGradient>Register here</TextGradient>
        </Link>
      </div>
    </form>
  );
}

export default Login;
