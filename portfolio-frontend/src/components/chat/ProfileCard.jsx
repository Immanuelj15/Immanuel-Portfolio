import React from 'react';
import { motion } from 'framer-motion';

const ProfileCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glow-card mt-2 max-w-2xl w-full overflow-hidden group"
        >
            {/* Warm Gradient Banner */}
            <div className="h-28 w-full bg-gradient-to-r from-brand-500 via-orange-500 to-rose-500 relative overflow-hidden">
                <div className="absolute inset-0 animate-shimmer"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-black/20 rounded-full blur-3xl"></div>
            </div>

            <div className="p-6 pt-0 flex flex-col md:flex-row gap-6 items-start relative">
                {/* Avatar */}
                <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border-4 border-[#0f0f12] flex items-center justify-center -mt-12 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500 ring-2 ring-brand-500/20">
                    <img src="/assets/profile.png" alt="Immanuel A" className="w-full h-full object-cover object-top" />
                </div>

                <div className="flex-1 mt-4 md:mt-3">
                    <h3 className="text-2xl font-black text-white mb-1 tracking-tight">Immanuel A</h3>
                    <p className="text-brand-400 text-[13px] font-bold mb-4 uppercase tracking-wider">
                        Software Developer
                    </p>

                    <p className="text-zinc-500 text-[13px] leading-relaxed mb-6">
                        Computer Science Engineering student focused on Full-Stack Development (MERN) and Generative AI. Building scalable web apps and AI-powered tools.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <a href="/resume.pdf" download="Immanuel_Resume.pdf" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-zinc-900 hover:from-brand-400 hover:to-brand-500 transition-all text-xs font-bold shadow-lg shadow-brand-500/20">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            Download Resume
                        </a>

                        <div className="w-px h-5 bg-zinc-800 hidden sm:block mx-1"></div>

                        <div className="flex items-center gap-4 text-[12px] font-medium text-zinc-600">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow"></span>
                                Available
                            </span>
                            <span>📍 Remote</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
