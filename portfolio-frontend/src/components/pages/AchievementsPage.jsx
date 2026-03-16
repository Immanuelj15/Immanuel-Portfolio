import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaTrophy, FaAward, FaMedal, FaCloud, FaMicrochip, FaGlobe, FaCertificate } from 'react-icons/fa';
import { SiHackaday } from 'react-icons/si';

const AchievementsPage = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const achievements = [
        {
            title: "India AI Impact Buildathon",
            organization: "HCL GUVI",
            rank: "Top 850 / 38,000+",
            highlight: "Top 2%",
            icon: <FaTrophy />,
            color: "var(--accent-indigo)",
            description: "National level AI innovation challenge focused on impactful solutions.",
            year: "2024"
        },
        {
            title: "Thiran'26 Cloudathon",
            organization: "NEC",
            rank: "5th Place",
            highlight: "₹1,000 Prize",
            icon: <FaCloud />,
            color: "var(--accent-cyan)",
            description: "Intense cloud computing challenge solving real-world infrastructure problems.",
            year: "2024"
        },
        {
            title: "AI Show (Project Expo)",
            organization: "NEC",
            rank: "1st Prize",
            highlight: "Gold Medalist",
            icon: <FaAward />,
            color: "var(--accent-rose)",
            description: "Showcased advanced AI projects to industry experts and academic peers.",
            year: "2024"
        },
        {
            title: "Ignition'25 (IT Symposium)",
            organization: "NEC",
            rank: "1st Prize",
            highlight: "Paper Presentation",
            icon: <FaCertificate />,
            color: "var(--accent-emerald)",
            description: "Presented research on emerging technologies and their industrial applications.",
            year: "2025"
        },
        {
            title: "Inter-College Paper Presentation",
            organization: "Rathinam Technical Campus",
            rank: "2nd Prize",
            highlight: "₹500 Prize",
            icon: <FaMedal />,
            color: "var(--accent-indigo)",
            description: "Recognized for excellence in technical research and communication.",
            year: "2024"
        },
        {
            title: "Web Wizard",
            organization: "CSI Student Branch",
            rank: "2nd Prize",
            highlight: "Googling Competition",
            icon: <FaGlobe />,
            color: "var(--accent-cyan)",
            description: "Demonstrated superior information retrieval and search optimization skills.",
            year: "2023"
        },
        {
            title: "Founders' Day Celebration",
            organization: "National Engineering College",
            rank: "2nd Prize",
            highlight: "Tech Quiz",
            icon: <FaMicrochip />,
            color: "var(--accent-rose)",
            description: "Proven broad technical knowledge across diverse domains.",
            year: "2023"
        },
        {
            title: "HI-TECH FEST (Capture The Flag)",
            organization: "NEC CSE Department",
            rank: "2nd Prize",
            highlight: "Cyber Security",
            icon: <SiHackaday />,
            color: "var(--accent-emerald)",
            description: "Solved complex security challenges in a competitive CTF environment.",
            year: "2023"
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 pb-32 mt-[-40px] relative">
            {/* Cyber Timeline Architecture */}
            <div className="relative pt-20">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.05] hidden lg:block">
                    <motion.div 
                        style={{ scaleY, translateZ: 0 }}
                        className="absolute inset-0 bg-gradient-to-b from-brand-400 via-brand-500 to-cyan-400 origin-top will-change-transform"
                    />
                </div>

                {/* Achievements Flow */}
                <div className="space-y-24 relative">
                    {achievements.map((achievement, idx) => (
                        <div key={idx} className={`flex flex-col lg:flex-row items-center justify-between w-full group ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            {/* Card Container */}
                            <motion.div 
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full lg:w-[45%] z-10"
                            >
                                <div className="project-card-glass p-8 rounded-[3rem] border border-white/[0.03] hover:border-white/[0.1] transition-all duration-500 group/card relative overflow-hidden backdrop-blur-3xl">
                                    {/* Year Badge */}
                                    <div className="absolute top-8 right-8 text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">
                                        {achievement.year}
                                    </div>

                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-4xl shadow-2xl group-hover/card:scale-110 transition-transform duration-500" style={{ color: `rgb(${achievement.color})` }}>
                                            {achievement.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-white leading-none tracking-tight mb-2 group-hover/card:text-gradient transition-all">
                                                {achievement.title}
                                            </h3>
                                            <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                                                {achievement.organization}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover/card:bg-white/[0.06] transition-colors">
                                            <span className="text-sm font-black text-white" style={{ color: `rgb(${achievement.color})` }}>
                                                {achievement.rank}
                                            </span>
                                        </div>
                                        <span className="text-sm font-bold text-zinc-400 italic">
                                            "{achievement.highlight}"
                                        </span>
                                    </div>

                                    <p className="text-[15px] leading-relaxed text-zinc-500 font-medium group-hover/card:text-zinc-300 transition-colors">
                                        {achievement.description}
                                    </p>

                                    {/* Abstract Decoration */}
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover/card:opacity-10 transition-opacity duration-1000" style={{ background: `rgb(${achievement.color})` }} />
                                </div>
                            </motion.div>

                            {/* Timeline Node Hub */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 hidden lg:flex items-center justify-center z-20">
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    className="relative w-4 h-4 rounded-full bg-white/20 border-2 border-brand-500 group-hover:scale-125 transition-transform"
                                >
                                    <div className="absolute inset-0 rounded-full animate-ping bg-brand-500/30" />
                                    <div className="absolute -inset-4 rounded-full border border-white/[0.05] pointer-events-none" />
                                </motion.div>
                            </div>

                            {/* Empty Space for alternate side */}
                            <div className="hidden lg:block w-[45%]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Final Background Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-brand-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
        </div>
    );
};

export default AchievementsPage;
