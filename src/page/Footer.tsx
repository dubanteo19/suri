import { GithubIcon } from "@/components/icons/github";
import { AButton } from "@/components/ui/CallToActionButton";
import { GITHUB } from "@/constants/constants";
import { ArrowRightIcon, GridIcon, RocketIcon } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-black  text-white md:-mx-4 px-8 mt-4">
      <div className="flex gap-2 justify-center  py-6 w-full underline underline-offset-4">
        <a href="#hero">Experise</a>
        <a href="#skills">Skills</a>
        <a href="#works">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="grid  md:grid-cols-2 w-full gap-4">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-8 ">
            <AButton
              href={GITHUB}
              className="border-white border"
              icon=<GithubIcon className="size-4 " />
            >
              Github
            </AButton>
            <AButton
              href="#works"
              className="bg-primary border-black border-2 text-black "
              icon=<RocketIcon className="size-4" />
            >
              My works
            </AButton>
          </div>
          <div className="mt-2">
            <div className="text-sm ">Email: dubanteo2003@gmail.com</div>
            <div className="text-sm ">Phone: +84 925 821 477</div>
            <div className="text-sm ">
              Address: Dong Hoa, Ho Chi Minh, Viet Nam
            </div>
          </div>
        </div>
        <div className="bg-primary text-black p-2  rounded-2xl">
          <div className="rounded-2xl border-dashed border-2 p-4 border-black">
            <div className="flex gap-2 my-2 justify-between">
              <GridIcon />
              <ArrowRightIcon />
            </div>
            <p className="text-center text-sm">
              A versatile Full Stack Web Developer skilled in designing and
              building both the frontend and backend of modern websites and web
              applications. Passionate about delivering seamless, responsive,
              and user-centric digital experiences through clean code, intuitive
              interfaces, and robust backend architecture.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-white border-t-1 my-8">
        <p className="text-xs mt-2">
          Copyright (c) 2025 Du Thanh Minh. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
