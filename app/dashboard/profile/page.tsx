"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AtSign, GraduationCap, MoveRight, University } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UseFormInput,
  UseFormInputPhone,
  UseFormSelect,
} from "@/components/UseFormField";
import { useBreadcrumbs } from "@/stores/breadcrumb";

const schema = z.object({
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  major: z.string(),
  university: z.string(),
  idCard: z.string(),
});

const ProfilePage = () => {
  const [isEvent, setIsEvent] = useState<boolean>(true);
  const form = useForm({
    resolver: zodResolver(schema),
  });
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs([
      {
        name: "Profile",
        href: "/dashboard/profile",
      },
    ]);
  }, [setBreadcrumbs]);

  const Event = () => {
    return (
      <>
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div
              key={index}
              className="w-[226.37px] h-[308.98px] border grid p-5 rounded-md gap-2 bg-white"
            >
              <div className="flex items-center w-full justify-center ">
                <Image
                  src={"/assets/Maskot-2.png"}
                  width={150}
                  height={150}
                  alt="maskot"
                ></Image>
              </div>
              <div className="gap-2 grid">
                <p className="text-xl">Seminar</p>
                <p className="text-xs overflow-hidden text-ellipsis line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit assumenda veniam dicta voluptates saepe cumque ea
                  tenetur numquam rerum pariatur vitae eveniet, quia vero magnam
                  ex id corrupti consectetur nam?
                </p>
                <Link href={"/"}>
                  <p className="text-blue-500 flex text-xs items-center gap-1">
                    Register now <MoveRight />
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const EditProfile = () => {
    const datas = [
      {
        id: "1",
        name: "S1",
      },
      {
        id: "2",
        name: "S2",
      },
      {
        id: "3",
        name: "S3",
      },
    ];
    return (
      <Form {...form}>
        <div className="grid gap-5 w-[60%]">
          <UseFormInput
            form={form}
            name="name"
            label="Name"
            type="text"
            placeholder="Jhon Doe"
          />
          <UseFormInput
            form={form}
            name="email"
            label="Email"
            type="email"
            placeholder="jhon.doe@gmail.com"
          />
          <UseFormInputPhone
            form={form}
            name="phoneNumber"
            label="Phone Number"
            placeholder="8912345678"
          />
          <UseFormSelect
            form={form}
            name="major"
            label="Major"
            placeholder="S1"
            datas={datas}
          />
          <UseFormInput form={form} name="idCard" label="Id Card" type="file" />
          <div className="w-full flex justify-end">
            <Button className="bg-blue-500 rounded-lg">Update Profile</Button>
          </div>
        </div>
      </Form>
    );
  };

  return (
    <div className="grid">
      <div className="w-full h-[609.32px] grid">
        <div className="w-full h-56 grid shadow-md z-10 px-20">
          <div className="flex items-center gap-5">
            <div>
              <Image
                src={"/assets/Maskot-2.png"}
                width={100}
                height={100}
                alt="logo gcw"
              ></Image>
            </div>
            <div>
              <p className="lg:text-4xl text-2xl font-semibold">
                Prajoko Susilo
              </p>
              <p className="lg:text-md text-sm flex ">
                <span className="border-r-2 pr-2 flex items-center gap-1">
                  <AtSign />
                  danantara@esemka.gov.id
                </span>
                <span className="border-r-2 px-2 flex items-center gap-1">
                  <GraduationCap />
                  Strata 1
                </span>
                <span className="pl-2 flex items-center gap-1">
                  <University />
                  Universitas Gundarma
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Button
              className={`${
                isEvent ? "active-button-profile" : "inactive-button-profile"
              }`}
              onClick={() => setIsEvent(true)}
            >
              Event
            </Button>
            <Button
              className={`${
                !isEvent ? "active-button-profile" : "inactive-button-profile"
              }`}
              onClick={() => setIsEvent(false)}
            >
              Edit Profile
            </Button>
          </div>
        </div>
        <div className="w-full h-full bg-[#F9F9F9] flex gap-5 px-20 items-center py-10">
          {isEvent ? <Event /> : <EditProfile />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
