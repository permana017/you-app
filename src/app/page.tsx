"use client";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    redirect("/auth/login");
  } else {
    redirect("/profile");
  }
}
