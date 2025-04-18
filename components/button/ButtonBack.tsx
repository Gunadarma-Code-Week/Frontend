"use client";
import React from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const ButtonBack = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Button
      variant={"nothing"}
      className={`max-w-13 ${
        pathname === "/dashboard" && "hidden"
      } gap-0 !p-0 justify-between text-blue-500 hover:text-blue-500/90 duration-150 cursor-pointer`}
      onClick={() => router.back()}
    >
      <ArrowLeft />
      Back
    </Button>
  );
};

export default ButtonBack;
