import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import doodle_bulb from "../../assets/image copy 2.png";
function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 grid lg:grid-cols-3 grid-cols-1 md:gap-6 gap-y-6 max-w-6xl mx-auto"
    >
      <div className="col-span-2 flex flex-col gap-4" data-aos="fade-up">
        <p className="text-5xl text-primary-text font-bold text-center lg:text-start mx-auto md:mx-0 text-nowrap flex items-center gap-4">
          ABOUT <span className="text-secondary"> ME</span>
          <img src={doodle_bulb} alt="" className="aspect-auto max-w-20 " />
        </p>
        <p className="text-primary-text text-[19px] font-medium">
          I fell in love with code the moment I realized I could build things
          from scratch and I’ve been building ever since.
          <br />
          <br />
          I’m fluent in the web’s favorite trio:{" "}
          <span className="text-secondary italic font-semibold">
            JavaScript, Python, and React
          </span>{" "}
          with a good grasp of HTML & CSS (because design matters too).
          <br />
          <br />
          My current obsession? Diving deep into backend development with{" "}
          <span className="text-secondary italic font-semibold">
            Node.js, Express, and MongoDB
          </span>
          . Aiming to become a well rounded Full Stack Developer.
          <br />
          <br />
          Off the keyboard, you’ll find me either lost in a{" "}
          <span className="text-secondary italic font-semibold">
            Netflix series or making my next bold move in chess
          </span>
          .
        </p>
      </div>
      <div
        className="aspect-square md:size-96 lg:size-full mx-auto my-auto"
        data-aos="fade-up"
      >
        <DotLottieReact
          src="https://lottie.host/099dc0ad-7c33-4436-8f52-b3ae18428ae0/bTsdE6FOpy.lottie"
          loop
          autoplay
        />
      </div>
      <section className="col-span-full grid md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-6 py-8 mx-auto  **:h-full">
        <p className="text-4xl col-span-full text-primary-text font-bold text-center lg:text-start text-nowrap">
          EDUCATION
        </p>
        <div data-aos="fade-up" className="md:order-4 order-3">
          <div className="bg-[#393E46] rounded-xl hover:scale-105 ease-linear transition-all flex flex-col gap-3 p-4 ">
            <p className="text-secondary text-lg font-semibold">2019 - 2021</p>
            <p className="text-white text-lg font-semibold">Matriculation</p>
            <p className="font-medium text-primary-text/80">
              Completed my Matriculation with a focus in Computer Science, which
              introduced me to the fundamentals of computing, logic building,
              and programming. This early exposure sparked my interest in
              technology and laid the groundwork for my journey into software
              development.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="md:order-3 order-2">
          <div className="bg-[#393E46] rounded-xl hover:scale-105 ease-linear transition-all flex flex-col gap-3 p-4 ">
            <p className="text-secondary text-lg font-semibold">2021 - 2023</p>
            <p className="text-white text-lg font-semibold">Intermediate</p>
            <p className="font-medium text-primary-text/80">
              Completed my Intermediate in Pre-Engineering, where I built a
              strong foundation in mathematics, physics, and problem-solving.
              This academic background has greatly supported my analytical
              thinking and logical approach in software development.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="order-1">
          <div className="bg-[#393E46] rounded-xl hover:scale-105 ease-linear transition-all flex flex-col gap-3 p-4 ">
            <p className="text-secondary text-lg font-semibold">
              2024 - Present
            </p>
            <p className="text-white text-lg font-semibold">
              Bachelor of Science in Software Engineering
            </p>
            <p className="font-medium text-primary-text/80">
              Currently pursuing my Bachelor's degree in Software Engineering at
              the University of Karachi, UBIT. Through this program, I've gained
              a strong grasp of core software development concepts, including
              data structures, algorithms, databases, and modern development
              frameworks, enabling me to build scalable and efficient
              applications.
            </p>
          </div>
        </div>
        <div className="md:order-2 order-4" data-aos="fade-up">
          <DotLottieReact
            src="https://lottie.host/2d540ce0-aec4-45d0-b9eb-c590fd7d8768/oncscydYvb.lottie"
            loop
            autoplay
          />
        </div>
      </section>
    </section>
  );
}

export default About;
