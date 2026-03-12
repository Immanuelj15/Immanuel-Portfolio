import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaTools, FaGamepad, FaEnvelope } from 'react-icons/fa';

const NavButtons = () => {
    const buttons = [
        { label: 'Me', icon: <FaUser />, href: '#hero' },
        { label: 'Projects', icon: <FaCode />, href: '#projects' },
        { label: 'Skills', icon: <FaTools />, href: '#skills' },
        { label: 'Fun', icon: <FaGamepad />, href: '#chat' },
        { label: 'Contact', icon: <FaEnvelope />, href: '#contact' },
    ];

    const handleClick = (e, href) => {
        e.preventDefault();
        const elem = document.querySelector(href);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass px-2 py-2 rounded-full flex items-center gap-1 sm:gap-2 shadow-2xl shadow-brand-500/10 border border-[#1c1c22]/50 backdrop-blur-xl"
        >
            {buttons.map((btn, index) => (
                <motion.a
                    key={index}
                    href={btn.href}
                    onClick={(e) => handleClick(e, btn.href)}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 191, 36, 0.12)' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                    <span className="text-brand-400">{btn.icon}</span>
                    <span className="hidden sm:block">{btn.label}</span>
                </motion.a>
            ))}
        </motion.nav>
    );
};

export default NavButtons;
