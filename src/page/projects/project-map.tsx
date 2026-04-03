import { Project1 } from "@/page/projects/project1";
import { Project2 } from "@/page/projects/project2";
import { Project3 } from "@/page/projects/project3";
import type { JSX } from "react";

export const projectComponentMap: Record<number, JSX.Element> = {
  1: <Project1 />,
  2: <Project2 />,
  3: <Project3 />,
};
