import React from 'react';
import { motion } from 'framer-motion';

const SkillsGrid = () => {
    const allSkills = [
        { name: "React.js", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
        { name: "Node.js", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
        { name: "Python", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
        { name: "LangChain", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
        { name: "MongoDB", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
        { name: "Express.js", color: "text-zinc-300", bg: "bg-zinc-500/10", border: "border-zinc-500/20" },
        { name: "Java", color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20" },
        { name: "MySQL", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
        { name: "LlamaIndex", color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20" },
        { name: "JavaScript", color: "text-yellow-300", bg: "bg-yellow-300/10", border: "border-yellow-300/20" },
        { name: "ChromaDB", color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/20" },
        { name: "Streamlit", color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20" },
        { name: "OpenAI API", color: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/20" },
        { name: "AWS Bedrock", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
        { name: "Tailwind CSS", color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20" },
        { name: "Git", color: "text-orange-300", bg: "bg-orange-300/10", border: "border-orange-300/20" },
        { name: "Vercel", color: "text-zinc-200", bg: "bg-zinc-200/10", border: "border-zinc-200/20" },
        { name: "FAISS", color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/20" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 10 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 20 } }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-2xl w-full"
        >
            <div className="flex flex-wrap gap-2.5">
                {allSkills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-4 py-2 text-[14px] font-bold rounded-xl border ${skill.color} ${skill.bg} ${skill.border} shadow-sm backdrop-blur-sm transition-all cursor-default`}
                    >
                        {skill.name}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsGrid;
