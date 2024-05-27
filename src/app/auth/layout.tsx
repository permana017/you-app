"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import Image from "next/image";
import chevron from "../../../public/chevron.svg";
function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <main className="container-auth p-4 pt-20 flex justify-center">
      <div className="w-full max-w-xl">
        <div className="flex gap-2 cursor-pointer" onClick={goBack}>
          <Image src={chevron} alt="chevron" className="w-auto h-auto" />
          <p className="font-semibold text-lg">Back</p>
        </div>
        <div className="pt-20">{children}</div>
      </div>
    </main>
  );
}

export default AuthLayout;
