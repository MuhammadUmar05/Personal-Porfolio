import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaGithub,
  FaBootstrap,
  FaReact,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiDart,
  SiFlutter,
} from "react-icons/si";

function Skills() {
  type skills = {
    icon: string;
    colour: string;
  };

  const skillSet: skills[] = [
    { icon: "FaHtml5", colour: "#E44D26" },
    { icon: "FaCss3", colour: "#1572B6" },
    { icon: "FaJs", colour: "#F7DF1E" },
    { icon: "SiTypescript", colour: "#3178C6" },
    { icon: "FaPython", colour: "#3776AB" },
    { icon: "SiTailwindcss", colour: "#38BDF8" },
    { icon: "FaBootstrap", colour: "#7952B3" },
    { icon: "FaReact", colour: "#61DAFB" },
    { icon: "SiFirebase", colour: "#FFCA28" },
    { icon: "SiDart", colour: "#0175C2" },
    { icon: "SiFlutter", colour: "#02569B" },
    { icon: "FaGithub", colour: "#000000" },
  ];
  const Icons: Record<string, IconType> = {
    FaHtml5,
    FaCss3,
    FaJs,
    FaPython,
    FaBootstrap,
    FaReact,
    FaGithub,
    SiTypescript,
    SiTailwindcss,
    SiFirebase,
    SiDart,
    SiFlutter,
  };
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto pb-24 px-4 md:px-8 flex flex-col gap-y-6"
    >
      <p className="text-5xl col-span-full text-primary-text font-bold text-center lg:text-start text-nowrap">
        CORE <span className="text-secondary">SKILLS</span>
      </p>
      <p className="text-primary-text text-[19px] font-medium text-center md:text-start">
        A collection of technologies, languages, and tools I’ve mastered to
        build seamless applications.
      </p>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 : grid-cols-2 gap-x-4 gap-y-6 w-full place-items-center mx-auto py-2  ">
        {skillSet.map(({ icon, colour }) => {
          const IconComponent = Icons[icon];
          return (
            <div data-aos="fade-up" key={icon}>
              <div
                className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md p-4 md:size-40 size-32 rounded-xl text-7xl flex justify-center items-center transition-all duration-300 hover:scale-105"
                style={{ color: "#9ca3af" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colour;
                  e.currentTarget.style.boxShadow = `0 0 25px 5px ${colour}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {IconComponent && <IconComponent />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
