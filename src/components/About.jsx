import { motion, useMotionValue, useTransform } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institute: "Your College / University Name",
    year: "2021 – 2025",
  },
  {
    degree: "Higher Secondary (12th)",
    institute: "Your School Name",
    year: "2019 – 2021",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-36 px-6 bg-[#050505] overflow-hidden"
    >
      {/* Subtle grid (very light) */}
      <div
        className="absolute inset-0 -z-10 opacity-15
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:60px_60px]"
      />

      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-semibold text-center mb-6"
        >
          About{" "}
          <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gray-400 text-center max-w-3xl mx-auto mb-24"
        >
          A frontend developer focused on building clean, modern,
          and high-quality user interfaces.
        </motion.p>

        {/* ================= EDUCATION ================= */}
        <div>
          <h3 className="text-xl md:text-2xl font-medium text-center mb-14">
            Education
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {educationData.map((edu, i) => (
              <EducationCard key={i} edu={edu} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= EDUCATION CARD ================= */
const EducationCard = ({ edu, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-30, 30], [4, -4]);
  const rotateY = useTransform(x, [-30, 30], [-4, 4]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="
        relative rounded-2xl p-7
        bg-[#0b0b0b]
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        transform-gpu
      "
    >
      {/* Accent line */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-cyan-400/70 rounded-l-2xl" />

      <h4 className="text-white font-medium text-lg">
        {edu.degree}
      </h4>

      <p className="text-gray-400 text-sm mt-1">
        {edu.institute}
      </p>

      <span className="text-cyan-400 text-xs mt-4 inline-block">
        {edu.year}
      </span>
    </motion.div>
  );
};

export default About;
