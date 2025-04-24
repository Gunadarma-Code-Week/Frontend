"use client";

import Image from "next/image";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BannerCTA from "@/components/BannerCTA";

export default function HackatonPage() {
  const timelines = [
    {
      date: "April 17",
      title: "Registrasi",
      description:
        "Peserta Mendaftar Melalui Website GDSC Universitas Gunakanlah. Peserta Wajib Isi Formulir Link. Pemberitahuan Srt Kirim Email Finalis. Mulai Ligula Consectetur, Ultricies Mauris. Malesuada Vitae Mattis Tellus.",
    },
    {
      date: "April 17",
      title: "Stage 1 Proposal!",
      description:
        "Roboh Ini Bertujuan Untuk Mengaktifkan Kebiasaan Dan Keakraban Solusi Yang Diajukan Oleh Peserta. Proposal Harus Menunjukkan Permasalahan Yang Mereka Coba Selesaikan, Solusi, Dasar Teknologi Dalam Solusi Yang Mereka Buat, Serta Kegunaan AI Diharapkan Untuk Mendukung Solusi Yang Diajukan Oleh Peserta.",
    },
    {
      date: "April 19",
      title: "Stage 2 Pitch Deck!",
      description:
        "Tim Yang Lolos Tahap Proposal Diharapkan Untuk Mengirimkan Video Presentasi Mengenai Proyek Mereka. Prototype Tidak Harus Sempurna Secara Fungsional, Tetapi Harus Dapat Menggambarkan Konsep Utama, Fiturnya Implementasi, Serta Kemampuannya AI Dalam Solusi Yang Diajukan.",
    },
    {
      date: "April 28",
      title: "Final (Demo Day)",
      description:
        "Babak Final Akan Diadakan Secara Luring Di Universitas Gunakanlah. Pada Stage Final Melakukan Presentasi LIVE (Advanced Pitching) Sekaligus Demo Produk Kepada Secara Langsung. Pada Tahap Ini, Tim Diharapkan Telah Menyempurnakan Prototype Mereka Dan Mampu Menunjukkan Bagaimana Solusi Mereka Dapat Digunakan Dalam Skenario Nyata.",
    },
  ];

  const roles = [
    {
      name: "Hustler",
      description: "Bertanggung Jawab Atas Strategi Bisnis Dan Peluang Pasar.",
      icon: (
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#202124] rounded-full relative">
          <div className="absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full top-3 left-3"></div>
          <div className="absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full top-3 right-3"></div>
        </div>
      ),
    },
    {
      name: "Hipster",
      description: "Mengembangkan Aspek Desain Dan User Experience (UX).",
      icon: (
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#202124] rounded-full relative">
          <div className="absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full top-3 left-3"></div>
          <div className="absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full top-3 right-3"></div>
          <div className="absolute w-5 h-1 md:w-6 md:h-1.5 bg-white rounded-full bottom-4 left-1/2 transform -translate-x-1/2"></div>
        </div>
      ),
    },
    {
      name: "Hacker",
      description:
        "Menguasai Implementasi Teknis Dan Pemilai AI Dalam Solusi Yang Dikembangkan.",
      icon: (
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#202124] rounded-full relative">
          <div className="absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full top-3 left-3"></div>
          <div className="absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full top-3 right-3"></div>
          <div className="absolute text-white text-xs font-mono top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            &lt;/&gt;
          </div>
        </div>
      ),
    },
  ];

  const handleRegisterClick = () => {
    // Add your registration logic here
    console.log("Register button clicked");
    // You could redirect to registration page, open a modal, etc.
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-8 pt-16 md:pt-8">
        {/* Header */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="space-y-3 md:space-y-4 max-w-xl text-center md:text-left">
            <h1 className="text-2xl md:text-4xl md:leading-12 font-bold text-[#202124]">
              GCW Hackathon 2025
            </h1>
            <div className="flex items-center text-sm text-[#5f6368] gap-1 justify-center md:justify-start">
              <Calendar className="h-4 w-4 text-[#4084f3]" />
              <span>April 28 - May 5, 2025</span>
            </div>
            <div className="flex items-center text-sm text-[#5f6368] gap-1 justify-center md:justify-start">
              <MapPin className="h-4 w-4 text-[#4084f3]" />
              <span>Online and Offline</span>
            </div>
            <Button>
              Register Now <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="relative size-[150px] md:size-[280px] flex-shrink-0">
            <Image
              src="/assets/hackthon-maskot.png"
              alt="Robot mascot"
              width={280}
              height={280}
              className="object-contain"
            />
          </div>
        </div>

        {/* Description */}
        <div className="relative p-[4px] rounded-xl mb-8 md:mb-12">
          {/* Gradient border using pseudo-element */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4084f3] via-[#4285F4] to-[#5f6ad8]"></div>

          {/* Content container with white background */}
          <div className="relative flex flex-col items-center bg-white rounded-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#202124] mb-3 md:mb-4">
              What is Hackathon?
            </h2>
            <p className="text-xs md:text-sm text-[#5f6368] leading-relaxed">
              Gunakanlah Code Week sebagai rangkaian kompetisi yang
              diselenggarakan oleh GDSC universitas Gunakanlah dan Gunakanlah
              (ID). Acara ini terdiri dari dua mata acara utama, yaitu seminar
              dan kompetisi. Tema yang diangkat dalam Code Week kali ini adalah
              &quot;AI-Powered Solutions: Empowering&quot; mengangkat tema
              &quot;AI-Powered Solutions for Achieving SDGs and Inclusive
              Future&quot;. Peserta diharapkan dapat mengembangkan business
              opportunity dalam melakukan suatu solusi/ program yang
              peserta-peserta dalam program yang menggunakan teknologi AI untuk
              menyelesaikan masalah dalam berbagai domain. Hal ini bertujuan
              untuk generasi yang optimal dan implementasi solusi bagi pihak
              lain, sehingga memberikan yang berkelanjutan dalam jangka panjang
              utama.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col gap-1 items-center text-center mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-[#202124]">
              Timeline
            </h2>
            <p className="text-sm md:text-base text-[#5f6368] md:w-xl">
              A full look at what&apos;s coming. Find out when to pick up your
              badge, attend sessions, join parties, and more.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-[#4285f4]"></div>

            {timelines.map((timeline, index) => (
              <div key={index} className="relative mb-6 md:mb-8 pl-10">
                <div className="absolute left-0 top-0 w-[30px] h-[30px] bg-white border-4 border-[#4285f4] rounded-full"></div>
                <div className="border border-[#dadce0] rounded-lg p-3 md:p-4">
                  <h3 className="text-base md:text-lg font-bold text-[#202124] mb-2">
                    {timeline.date}
                  </h3>
                  <div className="mb-2">
                    <div className="font-medium text-[#202124]">
                      {timeline.title}
                    </div>
                    <p className="text-xs md:text-sm text-[#5f6368]">
                      {timeline.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pick Your Role */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#202124] mb-6 md:mb-8 text-center">
            Hackathon Roles
          </h2>

          {roles.map((role, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row md:justify-between md:items-center border-t ${
                index === roles.length - 1 ? "border-b" : ""
              } border-[#dadce0] py-4 md:py-6`}
            >
              <div className="max-w-md mb-4 md:mb-0">
                <h3 className="text-lg md:text-xl font-bold text-[#202124] mb-2">
                  {role.name}
                </h3>
                <p className="text-xs md:text-sm text-[#5f6368]">
                  {role.description}
                </p>
              </div>
              <div className="relative self-center md:self-auto">
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#bed4fd] rounded-lg flex items-center justify-center">
                  {role.icon}
                  <div className="absolute -bottom-2 right-2 w-5 h-5 md:w-6 md:h-6 bg-[#4285f4] rounded-full"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg md:text-xl font-bold text-[#4285f4]">
                    g
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BannerCTA
          title="Join the GCW Hackathon 2025"
          description="Lorem ipsum dolor sit amet consectetur. In lectus odio facilisis venenatis eros. Justo sagittis venenatis sit condimentum. Sit lacus adipiscing ut felis cursus purus pellentesque morbi. Imperdiet mi."
          buttonText="Register now"
          imageSrc="/assets/brain.png"
          imageAlt="Code Week"
          onButtonClick={handleRegisterClick}
        />
      </div>
    </div>
  );
}
