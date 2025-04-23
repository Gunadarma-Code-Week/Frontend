"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import maskotHi from "@/public/assets/Maskot.png"; // Make sure this path is correct relative to your project structure

// Define props interface
interface CountdownProps {
  targetDateString: string;
}

export default function Countdown({ targetDateString }: CountdownProps) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Use the prop for the target date
    const targetDate = new Date(targetDateString).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state, ensuring values don't go negative if the date has passed
      setCountdown({
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
      });
    };

    // Initial call to display countdown immediately
    updateCountdown();

    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [targetDateString]); // Add targetDateString to dependency array

  return (
    <section className="mt-32 w-full flex flex-col items-center justify-center text-center text-black gap-6 min-h-screen">
      <h2 className="text-2xl md:text-4xl font-semibold mb-5">
        Let the countdown begin
      </h2>
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center relative">
        {/* Maskot Hi di sebelah kiri */}
        <div className="absolute hidden lg:block -left-15 md:-left-14 -top-10">
          <Image
            src={maskotHi}
            alt="Maskot Hi"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>

        {/* Box countdown */}
        {[
          { label: "Days", value: countdown.days },
          { label: "Hours", value: countdown.hours },
          { label: "Minutes", value: countdown.minutes },
          { label: "Seconds", value: countdown.seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white w-[230px] h-[230px] backdrop-blur-md text-[#1A73E8] px-6 py-4 rounded-xl shadow-md flex flex-col items-center justify-center"
          >
            <h1 className="text-7xl md:text-8xl font-semibold">
              {item.value}
            </h1>
            <p className="text-base mt-2 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}