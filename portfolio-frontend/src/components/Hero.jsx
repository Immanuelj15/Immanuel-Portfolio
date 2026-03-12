import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center max-w-2xl">
            {/* Avatar */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-32 h-32 rounded-full mb-6 glass flex items-center justify-center glow-border overflow-hidden"
            >
                <span className="text-5xl">👨‍💻</span>
            </motion.div>

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-brand-500/30 text-brand-400 text-sm font-medium"
            >
                <FaTerminal className="text-brand-500" />
                AI Engineer & Full Stack Developer
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 text-transparent bg-clip-text"
            >
                What's Immanuel building these days?
            </motion.h1>

            {/* Subtext */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
            >
                Welcome to my digital archive where I build intelligent AI tools, full-stack applications, and modern web platforms.
            </motion.p>
        </div>
    );
};

export default Hero;
