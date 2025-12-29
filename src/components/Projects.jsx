import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../data/projectsData";

const ProjectCard = ({ project }) => {
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

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      className="
        relative group rounded-3xl p-8
        bg-black/40 backdrop-blur-xl
        border border-white/10
        shadow-[0_40px_100px_rgba(0,246,255,0.18)]
        transform-gpu
      "
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
        bg-cyan-400/20 blur-2xl transition pointer-events-none"
      />

      <div className="relative flex flex-col h-full">
        <h3 className="text-xl font-semibold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full
              bg-cyan-400/10 text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
          >
            <FaGithub /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-36 px-6 bg-[#050505] overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-25
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:48px_48px]"
      />

      {/* Ambient glow */}
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
            Projects
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
          A selection of projects showcasing my frontend skills,
          UI sense, and attention to detail.
        </motion.p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
