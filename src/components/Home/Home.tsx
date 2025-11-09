import profile_photo from "../../assets/pfp.jpg";
import doodle_arrow from "../../assets/image copy.png";
import { Typewriter } from "react-simple-typewriter";
import { DownloadIcon } from "@sanity/icons";
import Resume from "/MuhammadUmarResume.pdf"
function Home() {
  return (
    <main
      id="home"
      className="py-32 mt-8  px-4 md:px-8 grid md:grid-cols-3 grid-cols-1 gap-6 max-w-6xl justify-center items-center mx-auto"
    >
      <div className=" flex flex-col items-stretch md:items-start gap-6 md:col-span-2 justify-center relative">
        <div className="absolute inset-0 left-[-85px] top-24 rotate-1 aspect-square md:inline-block hidden size-fit">
          <img src={doodle_arrow} alt="" className="h-44" />
        </div>
        <p className="text-primary-text text-4xl md:text-5xl font-semibold flex items-center mx-auto md:mx-0">
          Hi There! <span className="inline-block waving-hand">👋🏻</span>
        </p>
        <p className="text-primary-text text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold">
          I am
          <span className="text-secondary"> Muhammad Umar</span>
        </p>
        <span className="text-primary-text text-3xl lg:text-4xl text-center font-semibold">
          <Typewriter
            words={[
              "Fullstack developer",
              "React Developer",
              "Undergraduate Software Engineer",
            ]}
            cursor
            cursorStyle="|"
            loop
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <div className="flex items-stretch md:flex-row flex-col gap-4">
          <button className=" bg-secondary/50 px-6 py-3 font-semibold rounded-3xl cursor-pointer text-primary-text hover:bg-secondary/40 transition-colors">
            <a href="https://www.linkedin.com/in/umartariqmuhammad" target="_blank">Hire Me</a>
          </button>
          <button className="flex items-center justify-center font-semibold gap-1 bg-[#393E46] px-4 py-3 rounded-3xl cursor-pointer text-primary-text hover:bg-[#393E46]/80 transition-colors">
            <a
                href={Resume}
                download={Resume}
                className="flex justify-center items-center gap-1"
              >
                Download Resume <DownloadIcon className="text-xl" />
              </a>
          </button>
        </div>
      </div>
      <div className="border-secondary border-2 rounded-full shadow-secondary shadow-md size-72 md:size-fit mx-auto">
        <div className="rounded-full aspect-square">
          <img
            className="rounded-full aspect-square object-cover"
            src={profile_photo}
            alt="pfp"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
