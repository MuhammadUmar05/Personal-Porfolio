import React, { useState, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailJs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }

    setIsSending(true);
    const loadingToastId = toast.loading("Sending your message...");

    try {
      const response = await emailJs.sendForm(
        "service_uauy61t",
        "template_1l91lx8",
        form.current!,
        "BqtZW0dnQ6ok1vaWd"
      );

      setName("");
      setEmail("");
      setMessage("");
      toast.dismiss(loadingToastId);
      toast.success("Message has been sent successfully!");

      console.log("EmailJS Response:", response.text);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.dismiss(loadingToastId);
      toast.error("Failed to send message. Try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto py-28 px-4 md:px-8 grid lg:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-6"
    >
      <p className="md:text-5xl text-3xl col-span-full text-primary-text font-bold text-center md:text-start text-nowrap">
        CONTACT <span className="text-secondary">ME</span>
      </p>

      <div data-aos="fade-right">
        <DotLottieReact
          src="https://lottie.host/663c1d37-2dd1-4504-a9d5-b70da6d0b478/zhiA9YsfeQ.lottie"
          loop
          autoplay
        />
      </div>

      <form
        onSubmit={handleSubmit}
        data-aos="fade-left"
        className="flex flex-col gap-y-4 items-stretch md:p-3 mx-auto w-full"
        ref={form}
      >
        <div className="flex md:flex-row flex-col items-stretch gap-4">
          <div className="flex flex-col gap-1 flex-1/2">
            <label htmlFor="name" className="text-primary-text font-semibold">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#393E46]/50 px-3 py-2 rounded-xl outline-hidden text-primary-text focus:ring-secondary/40 focus:ring-2"
              disabled={isSending}
            />
          </div>
          <div className="flex flex-col gap-1 w-full flex-1/2">
            <label htmlFor="email" className="text-primary-text font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#393E46]/50 px-3 py-2 rounded-xl outline-hidden text-primary-text focus:ring-secondary/40 focus:ring-2"
              disabled={isSending}
            />
          </div>
        </div>

        <div className="flex flex-col items-stretch gap-1">
          <label htmlFor="message" className="text-primary-text font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="bg-[#393E46]/50 px-3 py-2 rounded-xl outline-hidden text-primary-text focus:ring-secondary/40 focus:ring-2"
            disabled={isSending}
          />
        </div>

        <button
          type="submit"
          className="bg-secondary/50 hover:bg-secondary/40 transition-colors duration-300 text-primary-text py-2 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
