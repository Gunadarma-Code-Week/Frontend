"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
import { Menu } from "lucide-react";
import {
  FaInstagram,
  FaDiscord,
  FaLinkedin,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import news1 from "@/public/assets/news.png";
import news2 from "@/public/assets/news.png";
import news3 from "@/public/assets/news.png";
import ctaGraphic from "@/public/assets/brain.png";
import maskot from "@/public/assets/Maskot-2.png";
import maskotHi from "@/public/assets/Maskot.png";
import hackMaskot from "@/public/assets/hackthon-maskot.png";
import seminarMaskot from "@/public/assets/seminar-maskot.png";
import cpMaskot from "@/public/assets/cp-maskot.png";
import nav from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (analytics) {
    logEvent(analytics, "page_view", {
      page_path: "/",
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const generalQuestions = [
    {
      question: "When is Google Week Code 2025?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question: "How can I stay informed on the latest from Google I/O?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur elit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
    },
  ];

  const registrationQuestions = [
    {
      question: "How do I register for the event?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus fermentum est sit amet erat laoreet, sed fermentum lectus lobortis.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla facilisi. Praesent euismod justo sit amet tellus fermentum.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla facilisi. Praesent euismod justo sit amet tellus fermentum.",
    },

    {
      question: "Is there a registration fee?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla facilisi. Praesent euismod justo sit amet tellus fermentum.",
    },
  ];

  const currentQuestions =
    activeTab === "general" ? generalQuestions : registrationQuestions;

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full z-20 top-0 start-0 fixed text-white transition-all duration-300 ${
          scrolled || isMenuOpen ? "bg-[#08023D] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link href="/">
            <Image
              src={nav}
              alt="Gunadarma Code Week Logo"
              className="w-[100px] h-[45px]"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href={"/auth/login"} className="hidden md:block">
              <Button className="w-auto bg-[#4A90E2] px-6 rounded-xl text-white hover:bg-[#3a78bd]">
                Register Now
              </Button>
            </Link>
            {/* Burger Menu Icon */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-none bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on click
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes style={{ width: "28px", height: "28px" }} />
              ) : (
                <Menu style={{ width: "28px", height: "28px" }} />
              )}
            </Button>
          </div>
          {/* Navbar links for desktop */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`} // Show menu when isMenuOpen is true
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
              <li className="block md:hidden mt-2">
                <Link href={"/auth/login"}>
                  <Button className="w-auto bg-[#4A90E2] px-6 rounded-xl text-white hover:bg-[#3a78bd]">
                    Register Now
                  </Button>
                </Link>
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
            className="relative flex flex-col items-center lg:flex-row gap-10 mt-20 lg:mt-32 w-full"
          >
            {/* Text kiri */}
            <div className="flex flex-col justify-center h-full lg:w-[626px] px-6 lg:px-0">
              {/* <h4 className="text-3xl text-white font-medium drop-shadow-md">
                Welcome
              </h4> */}
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold lg:leading-[90px] text-white drop-shadow-md">
                Gunadarma <br />
                Code Week
              </h1>

              <p className="mt-2 md:text-xl lg:text-2xl text-white drop-shadow">
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

            {/* Gambar kanan */}
            <div className="relative w-full lg:w-1/2">
              <Image
                src={maskot}
                alt="Hero Illustration"
                width={550}
                height={550}
                className="mx-auto lg:mx-0"
              />
            </div>
          </section>

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
                { label: "Days", value: 49 },
                { label: "Hours", value: 9 },
                { label: "Minutes", value: 55 },
                { label: "Seconds", value: 57 },
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
        </main>
      </div>
      <main className="relative z-10 max-w-screen-xl mx-auto px-4 mt-32">
        <section className="w-full flex flex-col gap-16 items-center justify-center text-black min-h-screen">
          {/* Header */}
          <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-6">
            <h2 className="text-2xl md:text-4xl font-bold md:w-4/12">
              Timeline{" "}
              <span className="text-[#4285F4]">Gunadarma Code Week</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 md:w-7/12">
              The Gunadarma Code Week timeline highlights key event stages,
              guiding participants from registration to the award ceremony.
            </p>
          </div>

          {/* Timeline content */}
          <div className="relative w-full">
            {/* Garis biru di tengah tanggal */}
            <div className="absolute top-[72.5%] hidden md:block left-1/2 transform -translate-x-1/2 w-10/12 h-1 bg-[#4285F4] z-0" />

            {/* Cards */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 w-full">
              {[
                {
                  image: "OPEN REGISTRATION.jpg",
                  date: "17 April 2025",
                  desc: "Participants can start registering online.",
                },
                {
                  image: "Submission Deadline.jpg",
                  date: "19 April 2025",
                  desc: "All coding solutions must be submitted by this date.",
                },
                {
                  image: "Finalis.jpg",
                  date: "21 April 2025",
                  desc: "Finalists compete in a high-stakes coding challenge.",
                },
                {
                  image: "Announcement Winner.jpg",
                  date: "28 April 2025",
                  desc: "The winners of the competition will be announced.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-3"
                >
                  {/* Gambar Placeholder */}
                  <div className="w-[160px] h-[160px] bg-gray-200 rounded-lg flex items-center justify-center text-sm font-semibold shadow-md mb-12">
                    {item.image}
                  </div>

                  {/* Tanggal di atas garis */}
                  <span className="relative z-10 text-sm text-white bg-[#4A90E2] px-4 py-1 rounded-full font-medium shadow">
                    {item.date}
                  </span>

                  {/* Deskripsi di bawah */}
                  <p className="text-sm text-gray-700 max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div className="relative w-full min-h-screen bg-[#4147FF] text-white pt-[100px] pb-24 overflow-hidden">
        {/* Fade putih atas */}
        <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-white to-transparent z-0" />

        {/* Fade putih bawah */}
        <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-white to-transparent z-0" />

        <main className="relative z-10 max-w-screen-xl mx-auto px-4">
          <section className="text-center mb-20">
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-white">
              Compete to Be the Best at <br />
              <span className="text-[#4A90E2]">Gunadarma Code Week!</span>
            </h2>
          </section>

          <div className="flex flex-col gap-10">
            {[
              {
                title: "Seminar",
                description:
                  "Lorem ipsum dolor sit amet consectetur. In lectus odio facilisis venenatis cras.",
                borderColor: "border-[#4A90E2]",
                image: seminarMaskot,
                flip: false,
              },
              {
                title: "Hackaton",
                description:
                  "Lorem ipsum dolor sit amet consectetur. In lectus odio facilisis venenatis cras.",
                borderColor: "border-[#4285F4]",
                image: hackMaskot,
                flip: true,
              },
              {
                title: "Competitive Programming",
                description:
                  "Lorem ipsum dolor sit amet consectetur. In lectus odio facilisis venenatis cras.",
                borderColor: "border-[#7ED957]",
                image: cpMaskot,
                flip: false,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  item.flip ? "md:flex-row-reverse" : ""
                } items-center justify-between rounded-2xl bg-white/50 backdrop-blur-lg border-2 ${
                  item.borderColor
                } p-6 md:p-10`}
              >
                {/* Text Content */}
                <div className="md:w-1/2 flex flex-col gap-6">
                  <h1 className="text-2xl md:text-6xl font-bold text-black">
                    {item.title}
                  </h1>
                  <p className="text-sm md:text-xl text-black">
                    {item.description}
                  </p>
                  <div className="mt-2">
                    <button className="px-5 py-3 bg-[#4A90E2] hover:bg-[#e19c1f] transition text-white text-sm rounded-xl shadow">
                      Register Now →
                    </button>
                  </div>
                </div>

                {/* Maskot Image */}
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                  <div className="w-[180px] h-[180px] md:w-[350px] md:h-[350px] flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={`${item.title} Maskot`}
                      width={600}
                      height={600}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <main className="relative z-10 max-w-screen-xl mx-auto px-4">
        <section className="w-full flex flex-col items-center justify-center text-center text-black gap-6">
          <div className="bg-white/60 p-6 md:p-12 rounded-md border-gray-300 border-2 w-full">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 sm:mb-10">
              Got Questions?{" "}
              <span className="text-[#4285F4]">We&apos;ve Got Answers!</span>
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-6 sm:mb-10">
              {[
                { label: "General", value: "general" },
                { label: "Registration", value: "registration" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-4 py-2 rounded-full border font-semibold text-sm transition ${
                    activeTab === tab.value
                      ? "bg-[#4285F4] text-white border-[#4285F4]"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Q&A Section */}
            <div className="rounded-2xl w-full p-4 md:p-10 text-start">
              {currentQuestions.map((item, idx) => (
                <div
                  key={idx}
                  className="pb-6 my-6 w-full flex flex-col md:flex-row border-b border-gray-300"
                >
                  <h3 className="text-lg font-semibold sm:w-full md:w-5/12 text-black mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 text-sm sm:w-full md:w-7/12 leading-relaxed">
                    {item.answer}
                  </p>
                  {idx < currentQuestions.length - 1 && <hr className="mt-6" />}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="relative w-full min-h-screen bg-[#4147FF] text-white pt-[100px] pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-white to-transparent z-0" />

        <main className="relative z-10 max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
            Stay Informed with{" "}
            <span className="text-[#AFCBFF]">Gunadarma Code Week</span>
          </h2>

          {/* News Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[news1, news2, news3].map((img, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col items-start text-left"
              >
                <div className="w-full h-[280px] bg-gray-300 rounded mb-4" />
                <h3 className="text-white font-bold mb-3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut et
                  massa mi.
                </h3>
                <p className="text-sm text-white/80 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut et
                  massa mi.
                </p>
                <button className="text-sm text-white underline">
                  Read more →
                </button>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-[#2A33CC] p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center text-left">
            <div className="max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join the Gunadarma <br /> Code WEEK
              </h3>
              <p className="text-sm text-white/90 mb-5">
                Lorem ipsum dolor sit amet consectetur. In lectus odio facilisis
                venenatis cras. Justo sagittis venenatis et condimentum. Sit
                vitae odio quisque, mauris adipiscing. Mi felis varius purus
                pulvinar sodales mi.
              </p>
              <button className="px-5 py-2 rounded-xl text-sm bg-white text-[#4147FF] font-semibold shadow hover:bg-gray-200">
                Register now →
              </button>
            </div>

            <div className="mt-10 md:mt-0">
              <Image
                src={ctaGraphic}
                alt="CTA Graphic"
                width={270}
                height={270}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white text-black text-sm border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Google Code Week™. All Right Reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full text-white hover:opacity-80"
            >
              <FaTimes size={16} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full text-white hover:opacity-80"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full text-white hover:opacity-80"
            >
              <FaDiscord size={16} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full text-white hover:opacity-80"
            >
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
