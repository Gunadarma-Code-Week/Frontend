"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BannerCTAProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  onButtonClick: () => void;
}

export default function BannerCTA({
  title,
  description,
  buttonText = "Register now",
  imageSrc,
  imageAlt = "Code Week",
  onButtonClick,
}: BannerCTAProps) {
  return (
    <div className="bg-[#4084f3] rounded-xl p-4 md:p-6 text-white flex flex-col gap-4 md:flex-row items-center">
      <div className="md:w-2/3">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
          {title}
        </h2>
        <p className="text-sm md:text-base mb-4 md:mb-6">
          {description}
        </p>
        <Button 
          variant="secondary"
          onClick={onButtonClick}
        >
          {buttonText} <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
}