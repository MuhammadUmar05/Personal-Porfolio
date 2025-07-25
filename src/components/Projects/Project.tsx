import background_doodle from "../../assets/image.png";
import altech_ecommerce from "../../assets/altech-ecommerce.png";
import book_worm from "../../assets/book-worm.png";
import zappy_ai from "../../assets/zappy-ai.png";
import tech_nests from "../../assets/tech-nests.png";
import vesora from "../../assets/vesora.png";
function Project() {
  return (
    <section
      id="projects"
      className="w-full h-full py-24  overflow-hidden"
      style={{
        backgroundImage: `url(${background_doodle})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="max-w-6xl px-4 md:px-8 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6 md:gap-x-4 place-items-center items-stretch"
        data-aos="fade-up"
      >
        <p className="col-span-full md:text-5xl text-3xl   text-primary-text font-bold text-center lg:text-start text-nowrap md:justify-self-start">
          MY RECENT <span className="text-secondary">WORKS</span>
        </p>
        <div className="bg-[#393E46]/50 backdrop:blur-3xl p-6 rounded-xl flex flex-col gap-3 hover:scale-105 transition-all duration-300 hover:bg-[#393E46]/80">
          <img
            src={altech_ecommerce}
            alt=""
            className="rounded-xl w-full max-h-[440px] h-full"
          />
          <p className="font-semibold text-primary-text text-lg">
            ALTECH ECOMMERCE
          </p>
          <p className="text-base font-medium text-primary-text/80">
            A frontend e-commerce website built using ReactJS, TailwindCSS,
            Redux Toolkit, and React Router DOM, this project showcases a fully
            responsive UI, seamless animations and transition effects, and
            essential e commerce functionality.
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-secondary/50 hover:bg-secondary/40 transition-colors px-4 py-3 rounded-2xl text-primary-text cursor-pointer">
              <a href="https://altech-ecommerce.netlify.app/" target="_blank">
                Live Preview
              </a>
            </button>
            <button className="bg-[#393E46] hover:bg-[#393E46]/80 transition-colors px-4 py-3 rounded-2xl text-primary-text cursor-pointer">
              <a
                href="https://github.com/MuhammadUmar05/Altech-E-commerce"
                target="_blank"
              >
                Github Repo
              </a>
            </button>
          </div>
        </div>
        <div className="bg-[#393E46]/50 backdrop:blur-3xl p-6 rounded-xl flex flex-col gap-3 hover:scale-105 transition-all duration-300 hover:bg-[#393E46]/80">
          <img
            src={zappy_ai}
            alt=""
            className="rounded-xl w-full max-h-[440px] h-full"
          />
          <p className="font-semibold text-primary-text text-lg">
            ZAPPY AI CHATBOT
          </p>
          <p className="text-base font-medium text-primary-text/80">
            A chatbot web app with dark and light mode that integrates Gemini AI
            API for text-based conversations and hugging face API image
            generation, built using ReactJS, TailwindCSS, Context API and React
            Router DOM.
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-secondary/50 hover:bg-secondary/40 transition-colors px-4 py-3 rounded-2xl text-primary-text cursor-pointer">
              <a href="https://zappyai.netlify.app/" target="_blank">
                Live Preview
              </a>
            </button>
            <button className="bg-[#393E46] hover:bg-[#393E46]/80 transition-colors px-4 py-3 rounded-2xl text-primary-text cursor-pointer">
              <a
                href="https://github.com/MuhammadUmar05/Zappy-AI"
                target="_blank"
              >
                Github Repo
              </a>
            </button>
          </div>
        </div>
        <div className="bg-[#393E46]/50 backdrop:blur-3xl p-6 rounded-xl flex flex-col gap-3 hover:scale-105 transition-all duration-300 hover:bg-[#393E46]/80">
          <img
            src={book_worm}
            alt=""
            className="rounded-xl w-full max-h-[440px] h-full"
          />
          <p className="font-semibold text-primary-text text-lg">
            BOOKWORM LMS
          </p>
          <p className="text-base font-medium text-primary-text/80">
            A Library Management System built with React, Tailwind CSS, Firebase
            Authentication, and pure DSA for book operations. Every book action
            is powered by a custom Linked List. Auth ensures that access stays
            secure.
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-secondary/50 hover:bg-secondary/40 transition-colors px-4 py-3 rounded-2xl text-primary-text cursor-pointer">
              <a href="https://bookworm-lms-dsa.netlify.app/" target="_blank">
                Live Preview
              </a>
            </button>
            <button className="bg-[#393E46] hover:bg-[#393E46]/80 transition-colors px-4 py-3 rounded-2xl text-primary-text cursor-pointer">
              <a
                href="https://github.com/MuhammadUmar05/Library-Management-System"
                target="_blank"
              >
                Github Repo
              </a>
            </button>
          </div>
        </div>
        <div className="bg-[#393E46]/50 backdrop:blur-3xl p-6 rounded-xl flex flex-col gap-3 hover:scale-105 transition-all duration-300 hover:bg-[#393E46]/80">
          <img
            src={tech_nests}
            alt=""
            className="rounded-xl w-full max-h-[440px] h-full"
          />
          <p className="font-semibold text-primary-text text-lg">
            TECHNESTS ECOMMERCE
          </p>
          <p className="text-base font-medium text-primary-text/80">
            Built with JavaScript, Tailwind CSS, and Firebase, TechNests is a
            fully responsive e-commerce site featuring secure user
            authentication, a dynamic admin panel for product management,
            shopping cart and wishlist functionality.
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-secondary/50 hover:bg-secondary/40 transition-colors px-4 py-3 rounded-2xl text-primary-text cursor-pointer">
              <a href="https://technests.netlify.app/" target="_blank">
                Live Preview
              </a>
            </button>
            <button className="bg-[#393E46] hover:bg-[#393E46]/80 transition-colors px-4 py-3 rounded-2xl text-primary-text cursor-pointer">
              <a
                href="https://github.com/MuhammadUmar05/TechNests-E-commerce"
                target="_blank"
              >
                Github Repo
              </a>
            </button>
          </div>
        </div>
        <div className="bg-[#393E46]/50 backdrop:blur-3xl p-6 rounded-xl flex flex-col gap-3 hover:scale-105 transition-all duration-300 hover:bg-[#393E46]/80">
          <img
            src={vesora}
            alt=""
            className="rounded-xl w-full max-h-[440px] h-full"
          />
          <p className="font-semibold text-primary-text text-lg">
            VESORA UI DISPLAY
          </p>
          <p className="text-base font-medium text-primary-text/80">
            Vesora is a modern, fully responsive real estate website built with
            React, React Router, and Tailwind CSS. The website features multiple
            pages for property listings, services, agents, and contact
            information
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-secondary/50 hover:bg-secondary/40 transition-colors px-4 py-3 rounded-2xl text-primary-text cursor-pointer">
             <a
                href="https://vesora.netlify.app/"
                target="_blank"
              >
                Live Preview
              </a>
            </button>
            <button className="bg-[#393E46] hover:bg-[#393E46]/80 transition-colors px-4 py-3 rounded-2xl text-primary-text cursor-pointer">
              <a
                href="https://github.com/MuhammadUmar05/Vesora"
                target="_blank"
              >
                Github Repo
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
