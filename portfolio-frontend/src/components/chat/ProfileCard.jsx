import React from 'react';
import { motion } from 'framer-motion';

const ProfileCard = () => {
    const timeline = [
        { year: "2022 – Present", title: "B.E. Computer Science Engineering", place: "KPR Institute of Engineering and Technology", detail: "CGPA: 8.0" },
        { year: "2025", title: "MERN Stack Intern", place: "TechNest", detail: "Full-stack development & real-world product delivery" },
        { year: "2024", title: "AI/ML Developer", place: "Self-directed & Open Source", detail: "Built RAG pipelines, LLM agents, AI tools" },
        { year: "2024", title: "AWS Cloud Practitioner", place: "Amazon Web Services", detail: "Bedrock, Titan Embeddings, S3" },
    ];

    const highlights = [
        { label: "Focus", value: "Generative AI & Full Stack" },
        { label: "Stack", value: "MERN + LangChain + LlamaIndex" },
        { label: "Status", value: "Open to opportunities" },
        { label: "Location", value: "India (Remote OK)" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 max-w-2xl w-full space-y-4"
        >
            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                    <div key={idx} className="glow-card px-4 py-3">
                        <div className="text-[11px] text-zinc-600 font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                        <div className="text-[14px] text-zinc-200 font-medium">{item.value}</div>
                    </div>
                ))}
            </div>

            {/* Education & Experience Timeline */}
            <div className="glow-card p-5">
                <h4 className="text-[13px] font-bold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <svg className="text-brand-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Journey
                </h4>
                <div className="space-y-4">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="flex gap-4 group">
                            {/* Timeline dot & line */}
                            <div className="flex flex-col items-center pt-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-brand-500 border-2 border-brand-400/30 shrink-0 group-hover:scale-125 transition-transform"></div>
                                {idx < timeline.length - 1 && <div className="w-px flex-1 bg-zinc-800 mt-1"></div>}
                            </div>
                            {/* Content */}
                            <div className="pb-4">
                                <div className="text-[11px] text-brand-400 font-bold uppercase tracking-wider mb-0.5">{item.year}</div>
                                <div className="text-[14px] text-zinc-100 font-bold">{item.title}</div>
                                <div className="text-[12px] text-zinc-500">{item.place}</div>
                                <div className="text-[12px] text-zinc-600 mt-1">{item.detail}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
                <a href="/resume.pdf" download="Immanuel_Resume.pdf" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-zinc-900 hover:from-brand-400 hover:to-brand-500 transition-all text-[13px] font-bold shadow-lg shadow-brand-500/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Full Resume
                </a>
                <a href="mailto:immanvalan@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all text-[13px] font-bold">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    Hire Me
                </a>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
