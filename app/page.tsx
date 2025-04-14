"use client";

import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
import { Menu } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import nav from "@/public/assets/logo-nav-cut.png";
import maskot from "@/public/assets/Maskot-2.png";
import maskotHi from "@/public/assets/Maskot.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  if (analytics) {
    logEvent(analytics, "page_view", {
      page_path: "/",
    });
  }

  return (
    <>
      {/* Navbar */}
      <nav className="bg-transparent w-full z-20 top-0 start-0 border-none fixed text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link href="/">
            <Image
              src={nav}
              alt="Logo"
              width={100}
              height={56}
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href={"/auth/login"}>
              <Button className="w-auto bg-[#4A90E2] px-6 rounded-xl text-white hover:bg-[#3a78bd]">
                Register Now
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Open main menu</span>
              <Menu />
            </Button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-2 font-medium text-white md:flex-row md:mt-0">
              <li>
                <Button variant="link" className="text-white" asChild>
                  <Link href="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white" asChild>
                  <Link href="/">Event</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white" asChild>
                  <Link href="/">About Us</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <div className="relative w-full min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,_#08023D_1%,_#2135DB_49%,_white_100%)] text-black pt-[100px]">

      {/* Main Content */}
      <main className="relative z-10 max-w-screen-xl mx-auto px-4">
        <section
          id="hero"
          className="relative flex flex-col md:flex-row gap-10 mt-20 md:mt-32 w-full"
        >
          {/* Gambar kanan */}
          <div className="relative ml-auto">
            <Image
              src={maskot}
              alt="Hero Illustration"
              width={550}
              height={550}
            />
          </div>

          {/* Text kiri */}
          <div className="md:absolute md:left-0 gap-3 flex flex-col justify-center h-full md:w-[626px]">
            <h4 className="text-3xl text-white font-medium drop-shadow-md">Wellcome</h4>
            <h1 className="text-3xl md:text-8xl font-bold md:leading-[90px] text-white drop-shadow-md">
              Gunadarma <br />
              Code Week
            </h1>

            <p className="mt-2 md:text-2xl text-white drop-shadow">
              GCW menghadirkan seminar, hackathon, dan kompetisi pemrograman.
              Daftar sekarang untuk mengasah skill & berprestasi!
            </p>

            <div className="flex mt-4 gap-4">
            <Button
              size="lg"
              className="px-6 py-6 rounded-xl text-white font-medium text-lg flex items-center gap-2 
                        bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:bg-white/20 transition"
            >
              Register Now <FaArrowRight className="text-sm" />
            </Button>
            </div>
          </div>
        </section>

        <section className="mt-32 w-full flex flex-col items-center justify-center text-center text-black gap-6 min-h-screen">
          <h2 className="text-2xl md:text-4xl font-semibold mb-5">Let the countdown begin</h2>
          <div className="flex gap-4 w-full justify-center items-center relative">

            {/* Maskot Hi di sebelah kiri */}
            <div className="absolute -left-15 md:-left-14 -top-10">
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
              { label: "Days", value: 49 },
              { label: "Hours", value: 9 },
              { label: "Minutes", value: 55 },
              { label: "Seconds", value: 57 },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white w-[230px] h-[230px] backdrop-blur-md text-[#1A73E8] px-6 py-4 rounded-xl shadow-md flex flex-col items-center justify-center"
              >
                <h1 className="text-5xl md:text-8xl font-semibold">{item.value}</h1>
                <p className="text-base mt-2 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
