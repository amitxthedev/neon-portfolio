import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { contactData } from "../data/contactData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-36 px-6 bg-[#050505] overflow-hidden"
    >
      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 -z-10 opacity-25
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:48px_48px]"
      />

      {/* GLOW */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2
        w-[600px] h-[600px] bg-cyan-400/25 blur-[180px] rounded-full -z-10"
      />

      <div className="max-w-5xl mx-auto text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Let’s{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(0,246,255,0.9)]">
            Connect
          </span>
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mb-20"
        >
          {contactData.subtitle}
        </motion.p>

        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="
            relative rounded-3xl p-10 md:p-14
            bg-black/40 backdrop-blur-2xl
            border border-white/10
            shadow-[0_40px_120px_rgba(0,246,255,0.18)]
          "
        >
          {/* EMAIL CTA */}
          <a
            href={`mailto:${contactData.email}`}
            className="
              inline-flex items-center gap-3 px-10 py-4
              rounded-full font-semibold text-black
              bg-cyan-400 shadow-[0_0_35px_rgba(0,246,255,0.9)]
              hover:scale-105 transition
            "
          >
            <FaEnvelope />
            Send Email
          </a>

          {/* LOCATION */}
          <p className="text-gray-400 mt-6">
            📍 {contactData.location}
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-10 text-3xl mt-12">
            <a
              href={contactData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href={contactData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href={contactData.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-400 transition hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
