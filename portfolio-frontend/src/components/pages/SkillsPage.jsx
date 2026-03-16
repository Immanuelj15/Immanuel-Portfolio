import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    SiPython, SiJavascript, SiC, SiReact, SiTailwindcss, 
    SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
    SiOpenai, SiGit, SiGithub, SiStreamlit, SiVercel
} from 'react-icons/si';
import { FaCode, FaServer, FaDatabase, FaBrain, FaTools, FaTerminal } from 'react-icons/fa';

const SkillsPage = () => {
    useEffect(() => {
        console.log("SkillsPage (Cyber-Vault) Mounted");
    }, []);

    const skillCategories = [
        { 
            title: "Programming Languages", 
            icon: <FaCode />, 
            color: "--accent-indigo",
            span: "lg:col-span-2",
            skills: [
                { name: "Python", level: 95, icon: <SiPython /> },
                { name: "JavaScript", level: 90, icon: <SiJavascript /> },
                { name: "Java", level: 85, icon: <FaTerminal /> },
                { name: "C", level: 70, icon: <SiC /> },
            ]
        },
        { 
            title: "Frontend Engineering", 
            icon: <SiReact />, 
            color: "--accent-cyan",
            span: "lg:col-span-1",
            skills: [
                { name: "React.js", level: 95, icon: <SiReact /> },
                { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss /> },
                { name: "Modern HTML/CSS", level: 90, icon: <FaTerminal /> },
            ]
        },
        { 
            title: "AI & Machine Learning", 
            icon: <FaBrain />, 
            color: "--accent-rose",
            span: "lg:col-span-2",
            skills: [
                { name: "LangChain", level: 90, icon: <FaBrain /> },
                { name: "OpenAI API", level: 95, icon: <SiOpenai /> },
                { name: "AWS ML Services", level: 85, icon: <FaTerminal /> },
                { name: "Vector Databases", level: 80, icon: <FaDatabase /> },
                { name: "LlamaIndex", level: 85, icon: <FaBrain /> },
            ]
        },
        { 
            title: "Core Backend", 
            icon: <FaServer />, 
            color: "--accent-emerald",
            span: "lg:col-span-1",
            skills: [
                { name: "Node.js", level: 90, icon: <SiNodedotjs /> },
                { name: "Express.js", level: 85, icon: <SiExpress /> },
            ]
        },
        { 
            title: "Data Architecture", 
            icon: <FaDatabase />, 
            color: "--accent-indigo",
            span: "lg:col-span-1",
            skills: [
                { name: "MongoDB", level: 90, icon: <SiMongodb /> },
                { name: "MySQL/SQL", level: 85, icon: <FaDatabase /> },
            ]
        },
        { 
            title: "Modern Toolchain", 
            icon: <FaTools />, 
            color: "--accent-cyan",
            span: "lg:col-span-2",
            skills: [
                { name: "Git", level: 95, icon: <SiGit /> },
                { name: "GitHub Actions", level: 85, icon: <SiGithub /> },
                { name: "Deployment/Cloud", level: 90, icon: <SiVercel /> },
                { name: "Streamlit", level: 80, icon: <SiStreamlit /> },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 pb-20 mt-10">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`project-card-glass p-8 rounded-[2.5rem] relative group border border-white/[0.03] hover:border-white/[0.08] transition-all duration-700 ${category.span}`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-2xl" style={{ color: `rgb(var(${category.color}))` }}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-black text-white tracking-tight">{category.title}</h3>
                            </div>
                            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest leading-none">
                                SEC.0{idx + 1}
                            </span>
                        </div>

                        {/* Skill Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {category.skills.map((skill, sIdx) => (
                                <div 
                                    key={sIdx}
                                    className="skill-pill-glass p-4 rounded-2xl group/skill relative overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <div className="flex items-center gap-3 relative z-10">
                                        <div className="text-lg text-zinc-500 group-hover/skill:text-white transition-colors duration-500">
                                            {skill.icon}
                                        </div>
                                        <span className="text-[14px] font-bold text-zinc-400 group-hover/skill:text-zinc-100 transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>

                                    {/* Neon Progress Bar (Hover) */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/[0.02] overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            className="h-full neon-progress-bar transition-all duration-1000 ease-out opacity-0 group-hover/skill:opacity-100"
                                            style={{ 
                                                '--bar-color': `var(${category.color})`,
                                                backgroundColor: `rgb(var(${category.color}))` 
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Background Decoration */}
                        <div 
                            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000"
                            style={{ backgroundColor: `rgb(var(${category.color}))` }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default SkillsPage;
