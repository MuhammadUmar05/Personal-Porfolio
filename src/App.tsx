import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "linear",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Toaster
        toastOptions={{
          success: {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          },
          error: {
            style: {
              borderRadius: "10px",
              background: "red",
            },
          },
        }}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
