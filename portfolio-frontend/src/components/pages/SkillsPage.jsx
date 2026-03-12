import React from 'react';
import { motion } from 'framer-motion';

const SkillsPage = () => {
    const skillCategories = [
        { title: "Languages", icon: "⚡", skills: ["Python", "Java", "JavaScript", "C"], color: "from-amber-500/20 to-orange-500/10" },
        { title: "Frontend", icon: "🎨", skills: ["HTML", "CSS", "Bootstrap", "React.js"], color: "from-blue-500/20 to-cyan-500/10" },
        { title: "Backend", icon: "⚙️", skills: ["Node.js", "Express.js"], color: "from-emerald-500/20 to-green-500/10" },
        { title: "Databases", icon: "🗄️", skills: ["MySQL", "MongoDB"], color: "from-purple-500/20 to-indigo-500/10" },
        { title: "AI & ML", icon: "🧠", skills: ["LangChain", "LlamaIndex", "ChromaDB", "OpenAI API", "Bedrock", "FAISS"], color: "from-rose-500/20 to-pink-500/10" },
        { title: "DevOps", icon: "🚀", skills: ["Git", "GitHub", "Streamlit", "Vercel"], color: "from-brand-500/20 to-orange-500/10" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20"
        >
            {skillCategories.map((category, idx) => (
                <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="glow-card p-6 group cursor-default"
                >
                    {/* Header with gradient accent */}
                    <div className={`flex items-center gap-3 mb-5 pb-4 border-b border-[#1c1c22]`}>
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-xl border border-white/5`}>
                            {category.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-zinc-100 group-hover:text-brand-400 transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-[11px] text-zinc-600 font-medium uppercase tracking-wider">{category.skills.length} skills</p>
                        </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map(skill => (
                            <span 
                                key={skill} 
                                className="text-[13px] font-medium px-3 py-1.5 rounded-lg bg-white/[0.03] text-zinc-300 border border-white/[0.05] hover:bg-brand-500/10 hover:border-brand-500/20 hover:text-brand-300 transition-all cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default SkillsPage;
