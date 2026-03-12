import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5 & CSS3"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "Django", "Spring Boot", "REST APIs"]
        },
        {
            title: "Database",
            skills: ["MongoDB", "PostgreSQL", "MySQL"]
        },
        {
            title: "AI Tools",
            skills: ["Hugging Face", "TensorFlow.js", "Prompt Engineering", "GenAI Integration"]
        }
    ];

    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-brand-400 to-blue-500 text-transparent bg-clip-text">
                Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass p-6 rounded-2xl border border-zinc-800/50"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map(skill => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 rounded-lg bg-zinc-900/50 text-brand-300 text-sm border border-brand-500/20 hover:border-brand-500/50 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
