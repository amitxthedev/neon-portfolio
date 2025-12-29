import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // ================= ACTIVE SECTION =================
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 150;

      links.forEach((link) => {
        const el = document.getElementById(link.id);
        if (!el) return;

        if (pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ================= SMOOTH SCROLL HANDLER =================
  const scrollToSection = (id) => {
    setOpen(false); // close mobile menu if open

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center">
        <div className="w-[92%] max-w-6xl">
          <div className="relative rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg">
            <div className="px-6 py-4 flex items-center justify-between">

              {/* LOGO */}
              <button
                onClick={() => scrollToSection("home")}
                className="text-xl font-bold"
              >
                <span className="text-cyan-400">Amit</span>
                <span className="text-white">.dev</span>
              </button>

              {/* DESKTOP MENU */}
              <ul className="hidden md:flex gap-10 text-sm">
                {links.map((link) => (
                  <li key={link.id} className="relative">
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`transition ${
                        active === link.id
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </button>

                    {active === link.id && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400"
                      />
                    )}
                  </li>
                ))}
              </ul>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-2xl text-cyan-400"
                aria-label="Toggle menu"
              >
                {open ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.ul
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: 40 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center gap-10 text-xl mt-32"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`transition ${
                      active === link.id
                        ? "text-cyan-400"
                        : "text-gray-300"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
