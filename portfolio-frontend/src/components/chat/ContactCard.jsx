import React from 'react';
import { motion } from 'framer-motion';

const ContactCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 max-w-xl w-full"
        >
            <div className="flex flex-wrap gap-3">
                <a href="mailto:immanvalan@gmail.com" className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/5 hover:from-red-500/20 hover:to-orange-500/10 border border-red-500/20 hover:border-red-500/40 transition-all group">
                    <svg className="text-red-400 group-hover:scale-110 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span className="text-[14px] text-zinc-200 font-bold tracking-wide">Email Me</span>
                </a>
                
                <a href="https://github.com/Immanuelj15" target="_blank" rel="noreferrer" className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-zinc-700/20 to-zinc-800/10 hover:from-zinc-600/30 hover:to-zinc-700/20 border border-zinc-600/30 hover:border-zinc-500/50 transition-all group">
                    <svg className="text-zinc-300 group-hover:scale-110 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span className="text-[14px] text-zinc-200 font-bold tracking-wide">GitHub</span>
                </a>
                
                <a href="https://www.linkedin.com/in/a-immanuel15/" target="_blank" rel="noreferrer" className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-[#0a66c2]/10 to-[#004182]/5 hover:from-[#0a66c2]/20 hover:to-[#004182]/10 border border-[#0a66c2]/30 hover:border-[#0a66c2]/50 transition-all group">
                    <svg className="text-[#3b82f6] group-hover:scale-110 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span className="text-[14px] text-zinc-200 font-bold tracking-wide">LinkedIn</span>
                </a>
                
                <a href="tel:+919080674380" className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 hover:from-emerald-500/20 hover:to-teal-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                    <svg className="text-emerald-400 group-hover:scale-110 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span className="text-[14px] text-zinc-200 font-bold tracking-wide">Call Me</span>
                </a>
            </div>
        </motion.div>
    );
};

export default ContactCard;
