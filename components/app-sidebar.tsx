"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Hackathon",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Intro",
          url: "/dashboard/hackathon/intro",
        },
        {
          title: "Tahap 1 Proposal",
          url: "#",
        },
        {
          title: "Tahap 2 Pitch Deck",
          url: "#",
        },
        {
          title: "Final",
          url: "#",
        },
      ],
    },
    {
      title: "Competitive Programming",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "H1 Pemanasan",
          url: "#",
        },
        {
          title: "H2 Penyisihan",
          url: "#",
        },
        {
          title: "Final",
          url: "#",
        },
      ],
    },
    {
      title: "Seminar",
      url: "/dashboard/seminar/intro",
      icon: BookOpen
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Update Profile",
          url: "/dashboard/edit-profile",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="px-4">
        <Image src={"/gcw.svg"} width={100} height={100} alt="logo gcw" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
