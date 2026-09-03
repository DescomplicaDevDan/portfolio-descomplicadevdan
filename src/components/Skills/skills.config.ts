import type { IconType } from "react-icons";
import { FaCss3Alt, FaJava } from "react-icons/fa";
import { SiGit, SiGithub, SiHtml5, SiJavascript, SiPython, SiReact, SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export type Skill = {
  name: string;
  Icon: IconType;
  className: string;
};

export const skills: readonly Skill[] = [
  { name: "HTML", Icon: SiHtml5, className: "html" },
  { name: "CSS", Icon: FaCss3Alt, className: "css" },
  { name: "JavaScript", Icon: SiJavascript, className: "javascript" },
  { name: "TypeScript", Icon: SiTypescript, className: "typescript" },
  { name: "React", Icon: SiReact, className: "react" },
  { name: "REST API", Icon: TbApi, className: "api" },
  { name: "Python", Icon: SiPython, className: "python" },
  { name: "Java", Icon: FaJava, className: "java" },
  { name: "Git", Icon: SiGit, className: "git" },
  { name: "GitHub", Icon: SiGithub, className: "github" },
];
