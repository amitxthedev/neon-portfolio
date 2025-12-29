import { motion, useMotionValue, useTransform } from "framer-motion";
import { skillsData } from "../data/skillsData";

const SkillCard = ({ skill }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-30, 30], [8, -8]);
  const rotateY = useTransform(x, [-30, 30], [-8, 8]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = skill.icon;

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      className="
        relative group rounded-2xl p-8
        bg-black/40 backdrop-blur-xl
        border border-white/10
        shadow-[0_30px_80px_rgba(0,246,255,0.15)]
        transform-gpu
      "
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
        bg-cyan-400/20 blur-2xl transition pointer-events-none"
      />

      <div className="relative flex flex-col items-center gap-4">
        <Icon className={`text-5xl ${skill.color}`} />
        <p className="text-gray-200 font-medium">{skill.name}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-36 px-6 bg-[#050505] overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-25
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:48px_48px]"
      />

      {/* Glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2
        w-[600px] h-[600px] bg-cyan-400/25 blur-[180px] rounded-full -z-10"
      />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-8"
        >
          My{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(0,246,255,0.9)]">
            Skills
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-20"
        >
          Technologies I use to build modern, fast, and visually engaging
          web applications.
        </motion.p>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
