import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaCode, FaArrowRight } from 'react-icons/fa';

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Web', 'ML/AI', 'Tools'];

    const projects = [
        {
            title: "DevMate AI",
            description: "Advanced RAG platform reducing developer onboarding time by 80%. Built with Amazon Bedrock, Titan Embeddings, and FAISS for sub-second retrieval performance.",
            tags: ["Python", "LangChain", "Bedrock", "FAISS"],
            category: "ML/AI",
            status: "Completed",
            featured: true,
            github: "https://github.com/Immanuelj15",
        },
        {
            title: "Prescription AI Agent",
            description: "Generative AI agent for clinical guidance utilizing LlamaIndex and ChromaDB to analyze medicine availability and dosage logic.",
            tags: ["LangChain", "LlamaIndex", "ChromaDB"],
            category: "ML/AI",
            status: "Completed",
            featured: false,
            github: "https://github.com/Immanuelj15",
        },
        {
            title: "Smart HealthCare Portal",
            description: "Enterprise-grade healthcare management system with multi-role dashboards and secure JWT-based authentication flow.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            category: "Web",
            status: "Completed",
            featured: false,
            github: "https://github.com/Immanuelj15",
        },
        {
            title: "CLI-Code",
            description: "High-performance Node.js CLI tool for intelligent website cloning and automated OpenAI-driven code translation.",
            tags: ["Node.js", "Puppeteer", "OpenAI"],
            category: "Tools",
            status: "In Development",
            featured: false,
            github: "https://github.com/Immanuelj15",
        },
        {
            title: "Auto Slide Generator",
            description: "Automated document-to-presentation pipeline using abstractive summarization and rule-based slide generation.",
            tags: ["FastAPI", "Transformers", "PyMuPDF"],
            category: "ML/AI",
            status: "Completed",
            featured: false,
            github: "https://github.com/Immanuelj15",
        }
    ];

    const filteredProjects = projects.filter(proj => activeFilter === 'All' ? true : proj.category === activeFilter);

    return (
        <div className="w-full pb-20 max-w-7xl mx-auto px-6">
            {/* Header Area */}
            <header className="text-center mb-16 mt-10">
                <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
                    Featured <span className="text-gradient">Projects</span>
                </h1>
                <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                    A curated selection of my work in AI engineering, tool development, and full-stack architecture.
                </p>
            </header>

            {/* Filter Bar */}
            <div className="flex justify-center mb-16 px-4">
                <div className="flex p-1.5 rounded-2xl bg-[#0f0f15]/80 border border-white/[0.08] backdrop-blur-xl relative shadow-2xl">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`relative px-7 py-2.5 rounded-xl text-[13px] font-black tracking-wide transition-all duration-500 z-10 ${
                                activeFilter === filter ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-200'
                            }`}
                        >
                            {activeFilter === filter && (
                                <motion.div
                                    layoutId="filter-pill-final"
                                    className="absolute inset-0 bg-brand-500 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-10">{filter}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid — Refined Height & Alignment */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((proj, idx) => (
                        <motion.div
                            layout
                            key={proj.title}
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                            className={`project-card-glass rounded-[2rem] overflow-hidden group relative flex flex-col h-full border border-white/[0.05] hover:border-brand-500/30 transition-all duration-500 ${
                                proj.featured ? 'lg:col-span-2' : ''
                            }`}
                        >
                            {/* Visual Preview */}
                            <div className="relative h-48 w-full overflow-hidden bg-[#0a0a12] mesh-pattern">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                
                                {/* Icon & Category */}
                                <div className="absolute top-6 left-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 backdrop-blur-md">
                                        <FaCode size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] leading-none mb-1">Project.{String(idx+1).padStart(2,'0')}</span>
                                        <span className="text-[11px] font-bold text-brand-500 uppercase tracking-widest leading-none">{proj.category}</span>
                                    </div>
                                </div>

                                {/* Github Link */}
                                <a 
                                    href={proj.github} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 text-zinc-400 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md"
                                >
                                    <FaGithub size={18} />
                                </a>

                                {/* Status Chip */}
                                <div className="absolute bottom-6 left-6">
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border backdrop-blur-md text-[8px] font-black uppercase tracking-widest ${
                                        proj.status === 'Completed' 
                                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                            : 'bg-brand-500/10 text-brand-400 border-brand-500/20'
                                    }`}>
                                        <span className={`w-1 h-1 rounded-full ${proj.status === 'Completed' ? 'bg-emerald-400' : 'bg-brand-400'}`} />
                                        {proj.status}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-brand-400 transition-colors duration-500">
                                    {proj.title}
                                </h3>
                                
                                <p className="text-zinc-500 text-[14px] leading-relaxed mb-8 flex-grow">
                                    {proj.description}
                                </p>

                                {/* Tags & Action */}
                                <div className="mt-auto pt-6 border-t border-white/[0.05] flex items-center justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {proj.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-black px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-500 border border-white/[0.06] hover:text-brand-300 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="text-brand-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                                        <FaArrowRight size={14} />
                                    </div>
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
