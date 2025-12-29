import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { personalData } from "../data/personalData";

const Hero = () => {
  /* ===== Typing animation ===== */
  const [typedName, setTypedName] = useState("");
  const fullName = personalData.name;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 140);

    return () => clearInterval(interval);
  }, [fullName]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 overflow-hidden bg-[#050505]"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 bg-[#050505]" />

      <div className="absolute left-0 top-0 h-full w-[70%] -z-10
        bg-gradient-to-r from-cyan-500/35 via-cyan-500/10 to-transparent" />

      <div className="absolute right-0 top-0 h-full w-[70%] -z-10
        bg-gradient-to-l from-purple-500/35 via-purple-500/10 to-transparent" />

      <div
        className="absolute inset-0 -z-10 opacity-40
        bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:42px_42px]"
      />

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            {personalData.role}
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I’m{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_22px_rgba(0,246,255,0.9)]">
              {typedName}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            {personalData.headline}
          </h1>

          <p className="text-gray-300 max-w-lg mb-10">
            {personalData.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5">
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-9 py-3 rounded-full font-semibold text-black
                bg-cyan-400 shadow-[0_0_35px_rgba(0,246,255,0.9)]
                transition text-center"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-9 py-3 rounded-full font-semibold text-cyan-400
                border border-cyan-400/60 hover:bg-cyan-400/10
                transition text-center"
            >
              Contact Me
            </motion.a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-10 flex justify-center md:justify-start">
            <div className="flex gap-7 text-2xl">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalData.socials.email}
                className="text-gray-400 hover:text-cyan-400 transition hover:scale-110"
              >
                <HiOutlineMail />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-3xl" />

            <motion.img
              whileHover={{ scale: 1.06 }}
              src="/profile.jpg"
              alt={personalData.name}
              className="relative w-full h-full object-cover rounded-full
                border-2 border-cyan-400
                shadow-[0_0_45px_rgba(0,246,255,1)]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
