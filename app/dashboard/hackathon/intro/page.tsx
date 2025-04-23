"use client";

import Image from "next/image";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BannerCTA from "@/components/BannerCTA";

export default function SeminarPage() {
  const agendaItems = [
    {
      title: "9 April 2025",
      rundown: [
        {
          time: "7:00 AM - 7:30 PM",
          title: "Opening & Introduction",
          description:
            "Welcome Participants, Introduce The Speakers, And Outline The Goals Of The Workshop.",
        },
        {
          time: "9:00 AM - 10:30 AM",
          title:
            "Workshop Session: A Dive Into Machine Learning And Sentiment Analysis",
          description:
            "Learn The Fundamentals Of Sentiment Analysis, From Setting Up The Environment To Preprocessing Text, Tokenizing, And Building A Classification Model. This Session Provides A Hands-On Introduction To Machine Learning Workflows For Analyzing Text Sentiment. ✓",
        },
        {
          time: "9:00 AM - 6:00 PM",
          title:
            "Workshop Session: A Dive Into Machine Learning And Sentiment Analysis",
          description:
            "Learn The Fundamentals Of Sentiment Analysis, From Setting Up The Environment To Preprocessing Text, Tokenizing, And Building A Classification Model. This Session Provides A Hands-On Introduction To Machine Learning Workflows For Analyzing Text Sentiment. ✓",
        },
        {
          time: "1:30 PM - 2:45 PM",
          title: "Closing & Feedback",
          description:
            "Summarize Key Learnings, Share Resources For Further Learning, And Collect Participant Feedback.",
        },
      ],
    },
    {
      title: "9 April 2025",
      rundown: [
        {
          time: "7:00 AM - 7:30 PM",
          title: "Opening & Introduction",
          description:
            "Welcome Participants, Introduce The Speakers, And Outline The Goals Of The Workshop.",
        },
        {
          time: "9:00 AM - 10:30 AM",
          title:
            "Workshop Session: A Dive Into Machine Learning And Sentiment Analysis",
          description:
            "Learn The Fundamentals Of Sentiment Analysis, From Setting Up The Environment To Preprocessing Text, Tokenizing, And Building A Classification Model. This Session Provides A Hands-On Introduction To Machine Learning Workflows For Analyzing Text Sentiment. ✓",
        },
        {
          time: "9:00 AM - 6:00 PM",
          title:
            "Workshop Session: A Dive Into Machine Learning And Sentiment Analysis",
          description:
            "Learn The Fundamentals Of Sentiment Analysis, From Setting Up The Environment To Preprocessing Text, Tokenizing, And Building A Classification Model. This Session Provides A Hands-On Introduction To Machine Learning Workflows For Analyzing Text Sentiment. ✓",
        },
      ],
    },
  ];

  const speakers = [
    {
      name: "Matt Renner",
      title: "President, Global Revenue",
      company: "Google Cloud",
      image: "/assets/dummy-circle.png",
    },
    {
      name: "Matt Renner",
      title: "President, Global Revenue",
      company: "Google Cloud",
      image: "/assets/dummy-circle.png",
    },
    {
      name: "Matt Renner",
      title: "President, Global Revenue",
      company: "Google Cloud",
      image: "/assets/dummy-circle.png",
    },
  ];

  const handleRegisterClick = () => {
    // Add your registration logic here
    console.log("Register button clicked");
    // You could redirect to registration page, open a modal, etc.
  };

  return (
    <div className="flex min-h-screen bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-8 pt-16 md:pt-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="space-y-3 md:space-y-4 max-w-xl text-center md:text-left">
            <h1 className="text-2xl md:text-4xl md:leading-12 font-bold text-[#202124]">
              Seminar: Menyelami Pembelajaran Mesin dan Analisis Sentimen
            </h1>
            <div className="flex items-center text-sm text-[#5f6368] gap-1 justify-center md:justify-start">
              <Calendar className="h-4 w-4 text-[#4084f3]" />
              <span>February 27, 2021 09:00-13:00 CST</span>
            </div>
            <div className="flex items-center text-sm text-[#5f6368] gap-1 justify-center md:justify-start">
              <MapPin className="h-4 w-4 text-[#4084f3]" />
              <span>Ruang Auditorium D402 Kampus D</span>
            </div>
            <Button>
              Register Now <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="relative size-[150px] md:size-[280px] flex-shrink-0">
            <Image
              src="/assets/seminar-maskot.png"
              alt="Robot mascot"
              width={280}
              height={280}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-4 mb-8 md:mb-12">
          {/* Key Themes */}
          <div className="flex flex-col">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#202124]">
              Key Themes
            </h2>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 border-[#dadce0] text-[#5f6368] text-xs"
              >
                AI
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 border-[#dadce0] text-[#5f6368] text-xs"
              >
                Cloud
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 border-[#dadce0] text-[#5f6368] text-xs"
              >
                Data AI
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 border-[#dadce0] text-[#5f6368] text-xs"
              >
                Gemini
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 border-[#dadce0] text-[#5f6368] text-xs"
              >
                Google Cloud Next
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 border-[#dadce0] text-[#5f6368] text-xs"
              >
                Machine Learning
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 border-[#dadce0] text-[#5f6368] text-xs"
              >
                Vertex AI
              </Badge>
            </div>
          </div>

          {/* About this event */}
          <div className="flex flex-col">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#202124]">
              About this event
            </h2>
            <p className="text-sm md:text-base text-[#5f6368] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu erat, eget tempus orci facilisis id.
            </p>
          </div>
        </div>

        {/* Agenda */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <div className="flex flex-col gap-1 items-center text-center mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-[#202124]">
              Agenda
            </h2>
            <p className="text-sm md:text-base text-[#5f6368] md:w-xl">
              A first look at what&apos;s coming. Find out when to pick up your
              badge, attend sessions, join parties, and more.
            </p>
          </div>

          {/* Map through agendaItems to create agenda cards */}
          {agendaItems.map((agenda, agendaIndex) => (
            <div
              key={agendaIndex}
              className={`relative p-[4px] rounded-xl ${
                agendaIndex < agendaItems.length - 1 ? "mb-4 md:mb-6" : ""
              }`}
            >
              {/* Gradient border using pseudo-element */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4084f3] via-[#4285F4] to-[#5f6ad8]"></div>

              {/* Content container with white background */}
              <div className="relative bg-white rounded-lg p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-[#202124]">
                  {agenda.title}
                </h3>
                <div className="w-full h-1.5 bg-[#4084f3] rounded-full mb-4"></div>

                {/* Map through rundown items */}
                {agenda.rundown.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className={
                      sessionIndex < agenda.rundown.length - 1
                        ? "mb-4 md:mb-6"
                        : ""
                    }
                  >
                    <div className="text-xs md:text-sm text-[#5f6368] mb-1">
                      {session.time}
                    </div>
                    <h4 className="font-medium text-sm md:text-base text-[#202124] mb-1">
                      {session.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#5f6368]">
                      {session.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GDC Speakers */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-[#202124]">
            GDC speakers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {speakers.map((speaker, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-4 border rounded-sm"
              >
                <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden mb-3 md:mb-4 bg-[#202124] flex items-center justify-center">
                  <Image
                    src={
                      speaker.image || "/placeholder.svg?height=120&width=120"
                    }
                    alt={`${speaker.name}`}
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium text-center">{speaker.name}</h3>
                <p className="text-xs md:text-sm text-[#5f6368] text-center">
                  {speaker.title}
                </p>
                <p className="text-xs md:text-sm text-[#5f6368] text-center">
                  {speaker.company}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Replace the banner div with the BannerCTA component */}
        <BannerCTA
          title="Join the Gunadarma Code WEEK"
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
