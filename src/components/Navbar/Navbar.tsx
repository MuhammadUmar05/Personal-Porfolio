import { HomeIcon, User2, Code2, ChartLine, Mail,Menu } from "lucide-react";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav className="fixed z-50 bg-primary top-0 w-full left-0 py-4  text-primary-text shadow-md">
      <div className="max-w-6xl flex justify-between items-center mx-auto md:px-8 px-4">
        <p className="font-semibold text-2xl text-secondary cursor-pointer text-nowrap">
          Muhammad Umar
        </p>
        <ul className="md:flex items-center gap-6 text-white hidden">
          <li className="cursor-pointer group relative">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              <p className="flex flex-col items-center font-medium ">
                <HomeIcon size={16} />
                Home
                <span className="absolute left-0 bottom-0 rounded-3xl w-0 h-[3px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
          </li>
          <li className="cursor-pointer group relative">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              <p className="flex flex-col items-center font-medium ">
                <User2 size={16} />
                About
                <span className="absolute left-0 bottom-0 rounded-3xl w-0 h-[3px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
          </li>
          <li className="cursor-pointer group relative">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-75}
            >
              <p className="flex flex-col items-center font-medium ">
                <Code2 size={16} />
                Skills
                <span className="absolute left-0 bottom-0 rounded-3xl w-0 h-[3px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
          </li>
          <li className="cursor-pointer group relative">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              <p className="flex flex-col items-center font-medium ">
                <ChartLine size={16} />
                Projects
                <span className="absolute left-0 bottom-0 rounded-3xl w-0 h-[3px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
          </li>
          <li className="cursor-pointer group relative">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
            >
              <p className="flex flex-col items-center font-medium ">
                <Mail size={16} />
                Contact
                <span className="absolute left-0 bottom-0 rounded-3xl w-0 h-[3px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
          </li>
        </ul>
        <button className="dropdown dropdown-end dropdown-hover !border-0 !outline-none md:hidden inline-block cursor-pointer">
          <div tabIndex={0} role="button" className=" m-1">
            <Menu/>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-primary text-primary-text rounded-xl z-1 w-52 p-2 shadow-sm gap-2"
          >
            <li className="cursor-pointer group relative">
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
              >
                <p className="flex gap-2 items-center font-medium ">
                  <HomeIcon size={16} />
                  Home
                  <span className="absolute left-0 bottom-0 rounded-3xl w-0 h-[3px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </p>
              </Link>
            </li>
            <li className="cursor-pointer group relative">
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
              >
                <p className="flex gap-2 items-center font-medium ">
                  <User2 size={16} />
                  About
                  <span className="absolute left-0 bottom-0 rounded-3xl w-0 h-[3px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </p>
              </Link>
            </li>
            <li className="cursor-pointer group relative">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                offset={-75}
              >
                <p className="flex gap-2 items-center font-medium ">
                  <Code2 size={16} />
                  Skills
                  <span className="absolute left-0 bottom-0 rounded-3xl w-0 h-[3px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </p>
              </Link>
            </li>
            <li className="cursor-pointer group relative">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
              >
                <p className="flex gap-2 items-center font-medium ">
                  <ChartLine size={16} />
                  Projects
                  <span className="absolute left-0 bottom-0 rounded-3xl w-0 h-[3px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </p>
              </Link>
            </li>
            <li className="cursor-pointer group relative">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
              >
                <p className="flex gap-2 items-center font-medium ">
                  <Mail size={16} />
                  Contact
                  <span className="absolute left-0 bottom-0 rounded-3xl w-0 h-[3px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </p>
              </Link>
            </li>
          </ul>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
