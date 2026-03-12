import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Smart Healthcare Portal",
            description: "AI powered doctor booking system with health dashboards and predictive diagnosis.",
            tags: ["React", "Node.js", "AI", "MongoDB"],
            link: "#",
            github: "#"
        },
        {
            title: "URL Shortener",
            description: "Django based link shortener with QR code generation and advanced analytics.",
            tags: ["Django", "Python", "SQLite"],
            link: "#",
            github: "#"
        },
        {
            title: "AI Resume Screening System",
            description: "AI powered HR automation platform to rank resumes and perform sentiment analysis.",
            tags: ["React", "Express", "TensorFlow.js"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-brand-400 to-blue-500 text-transparent bg-clip-text">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {projects.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glow-border rounded-2xl"
                    >
                        <div className="glass rounded-2xl p-6 h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                                    {proj.description}
                                </p>
                            </div>
                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={proj.github} className="text-zinc-400 hover:text-white transition-colors">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href={proj.link} className="text-zinc-400 hover:text-white transition-colors">
                                        <FaExternalLinkAlt size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
