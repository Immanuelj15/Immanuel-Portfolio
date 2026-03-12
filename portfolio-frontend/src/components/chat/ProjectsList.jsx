import React from 'react';
import { motion } from 'framer-motion';

const ProjectsList = () => {
    const projects = [
        {
            title: "DevMate AI — Developer Onboarding Assistant",
            description: "Built a RAG-based onboarding assistant reducing developer onboarding time by 80%+ using Amazon Bedrock (Nova Lite) and Titan Embeddings. Engineered multi-language GitHub repo ingestion indexed into FAISS, with Knowledge Quiz generation and a voice-interactive UI.",
            tags: ["Python", "LangChain", "Bedrock", "FAISS", "Streamlit"],
            link: "#"
        },
        {
            title: "Smart HealthCare Portal",
            description: "Developed a full-stack healthcare system with JWT authentication and role-based dashboards. Built REST APIs for appointments, profiles, and admin monitoring, and integrated AI-powered health recommendation features.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            link: "#"
        },
        {
            title: "AI Agent for Prescription Guidance",
            description: "Built a Generative AI agent for medicine availability, dosage guidance, and alternatives. Implemented RAG using LangChain + LlamaIndex with a ChromaDB vector store, deployed via Streamlit.",
            tags: ["LangChain", "LlamaIndex", "ChromaDB", "Ollama"],
            link: "#"
        }
    ];

    return (
        <div className="mt-2 w-full max-w-3xl flex flex-col gap-3">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#15141b] border border-[#27272a] rounded-xl p-5 w-fit mb-2 shadow-xl shadow-black/20"
            >
                <p className="text-zinc-300 text-[14px] leading-relaxed">
                    Here are some of the things I've built. The ones I'm most proud of are the ones where the hard part wasn't the AI itself:
                </p>
            </motion.div>

            {projects.map((proj, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx * 0.1) + 0.1 }}
                    className="bg-[#15141b] border border-[#27272a] rounded-xl p-5 hover:border-zinc-600 transition-colors group shadow-xl shadow-black/20"
                >
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="text-zinc-100 font-semibold text-[15px]">{proj.title}</h4>
                        <div className="flex gap-3 mt-1 sm:mt-0 shadow-sm">
                            <a href="https://github.com/Immanuelj15" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-[#201e2b] hover:bg-brand-600/20 border border-[#2c2a3b] hover:border-brand-500/30 px-2.5 py-1 rounded-md transition-all">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                Code
                            </a>
                            <a href="#" className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-[#201e2b] hover:bg-brand-600/20 border border-[#2c2a3b] hover:border-brand-500/30 px-2.5 py-1 rounded-md transition-all">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                Demo
                            </a>
                        </div>
                    </div>
                    <p className="text-zinc-400 text-[13px] mb-5 leading-relaxed pr-8">
                        {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {proj.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-medium tracking-wider px-2 py-0.5 rounded bg-[#201e2b] text-zinc-400 border border-[#2c2a3b]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectsList;
