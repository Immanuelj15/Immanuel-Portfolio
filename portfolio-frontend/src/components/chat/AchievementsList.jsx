import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaMedal, FaCloud, FaMicrochip, FaGlobe, FaCertificate } from 'react-icons/fa';
import { SiHackaday } from 'react-icons/si';

const AchievementsList = () => {
    const achievements = [
        {
            title: "India AI Impact Buildathon",
            rank: "Top 850 / 38,000+",
            icon: <FaTrophy />,
            color: "var(--accent-indigo)",
            year: "2024"
        },
        {
            title: "Thiran'26 Cloudathon",
            rank: "5th Place",
            icon: <FaCloud />,
            color: "var(--accent-cyan)",
            year: "2024"
        },
        {
            title: "AI Show (Project Expo)",
            rank: "1st Prize",
            icon: <FaAward />,
            color: "var(--accent-rose)",
            year: "2024"
        },
        {
            title: "Ignition'25 (Symposium)",
            rank: "1st Prize",
            icon: <FaCertificate />,
            color: "var(--accent-emerald)",
            year: "2025"
        },
        {
            title: "Inter-College Paper Pres.",
            rank: "2nd Prize",
            icon: <FaMedal />,
            color: "var(--accent-indigo)",
            year: "2024"
        },
        {
            title: "Web Wizard",
            rank: "2nd Prize",
            icon: <FaGlobe />,
            color: "var(--accent-cyan)",
            year: "2023"
        },
        {
            title: "Founders' Day Quiz",
            rank: "2nd Prize",
            icon: <FaMicrochip />,
            color: "var(--accent-rose)",
            year: "2023"
        },
        {
            title: "HI-TECH FEST (CTF)",
            rank: "2nd Prize",
            icon: <SiHackaday />,
            color: "var(--accent-emerald)",
            year: "2023"
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-2">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
                {achievements.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="bg-white/[0.03] border border-white/[0.05] p-4 rounded-2xl flex flex-col items-center text-center group cursor-default transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.1]"
                    >
                        <div 
                            className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300"
                            style={{ color: `rgb(${item.color})` }}
                        >
                            {item.icon}
                        </div>
                        <h4 className="text-[11px] font-black text-white leading-tight mb-1 line-clamp-2">
                            {item.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1">
                             <span className="text-[10px] font-bold py-0.5 px-2 rounded-md bg-white/[0.05]" style={{ color: `rgb(${item.color})` }}>
                                {item.rank}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 flex justify-center"
            >
                <a 
                    href="/achievements" 
                    className="text-[11px] font-black uppercase tracking-widest text-brand-400 hover:text-brand-300 transition-colors py-2 px-4 rounded-full bg-brand-500/10 border border-brand-500/20"
                >
                    Explore Fully Animated Hall of Fame →
                </a>
            </motion.div>
        </div>
    );
};

export default AchievementsList;
