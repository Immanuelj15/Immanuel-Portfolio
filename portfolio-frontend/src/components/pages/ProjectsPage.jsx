import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Web', 'ML/AI', 'Tools'];

    const projects = [
        {
            title: "DevMate AI",
            description: "RAG-based onboarding assistant reducing developer onboarding time by 80%+ using Amazon Bedrock and Titan Embeddings with FAISS indexing.",
            tags: ["Python", "LangChain", "Bedrock", "FAISS"],
            category: "ML/AI",
            gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
            github: "https://github.com/Immanuelj15",
        },
        {
            title: "Smart HealthCare Portal",
            description: "Full-stack healthcare system with JWT authentication, role-based dashboards and REST APIs for appointment management.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            category: "Web",
            gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
            github: "https://github.com/Immanuelj15",
        },
        {
            title: "Prescription AI Agent",
            description: "Generative AI agent for medicine availability and dosage guidance using RAG with LangChain + LlamaIndex and ChromaDB.",
            tags: ["LangChain", "LlamaIndex", "ChromaDB"],
            category: "ML/AI",
            gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
            github: "https://github.com/Immanuelj15",
        },
        {
            title: "CLI-Code",
            description: "Conversational Node.js CLI assistant for high-fidelity website cloning with Puppeteer and OpenAI function calling.",
            tags: ["Node.js", "Puppeteer", "OpenAI"],
            category: "Tools",
            gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
            github: "https://github.com/Immanuelj15",
        },
        {
            title: "Auto Slide Generator",
            description: "Converts PDF/TXT documents into editable PowerPoint decks using section-wise extraction and abstractive summarization.",
            tags: ["FastAPI", "Transformers", "PyMuPDF"],
            category: "ML/AI",
            gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
            github: "https://github.com/Immanuelj15",
        }
    ];

    const filteredProjects = projects.filter(proj => activeFilter === 'All' ? true : proj.category === activeFilter);

    return (
        <div className="w-full pb-20">
            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
                            activeFilter === filter
                                ? 'bg-brand-500 text-zinc-900 shadow-lg shadow-brand-500/25'
                                : 'bg-[#0f0f12] text-zinc-500 border border-[#1c1c22] hover:text-zinc-200 hover:border-[#2a2a3a]'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <AnimatePresence>
                    {filteredProjects.map((proj) => (
                        <motion.div
                            layout
                            key={proj.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="glow-card flex flex-col group"
                        >
                            {/* Gradient Header */}
                            <div className={`h-36 bg-gradient-to-br ${proj.gradient} flex items-center justify-center border-b border-[#1c1c22] relative overflow-hidden`}>
                                <span className="text-4xl font-black text-white/10 uppercase tracking-widest select-none">
                                    {proj.category}
                                </span>
                                <div className="absolute inset-0 animate-shimmer"></div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-brand-400 transition-colors">{proj.title}</h3>
                                <p className="text-zinc-500 text-[13px] leading-relaxed mb-5 flex-grow">{proj.description}</p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/[0.03] text-zinc-400 border border-white/[0.06]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto text-[13px] font-medium text-zinc-600">
                                    <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                                        <FaGithub size={14} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default ProjectsPage;
