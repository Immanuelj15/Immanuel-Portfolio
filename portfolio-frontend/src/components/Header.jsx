import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Header = ({ clearChat }) => {
  return (
    <header className="shrink-0 h-16 bg-transparent flex items-center justify-between px-6 sm:px-12 w-full mx-auto max-w-7xl relative z-20">
      {/* Logo/Name */}
      <div className="text-[15px] font-black text-white tracking-tight hidden sm:block">
        <span className="text-gradient">IA</span>
      </div>

      {/* Navigation */}
      <nav className="flex gap-1 text-[13px] font-medium bg-[#0f0f12]/80 backdrop-blur-xl border border-[#1c1c22] rounded-full px-1.5 py-1.5">
        <NavLink to="/" className={({isActive}) => `px-4 py-1.5 rounded-full transition-all ${isActive ? "bg-brand-500/10 text-brand-400" : "text-zinc-500 hover:text-zinc-200"}`}>Home</NavLink>
        <NavLink to="/projects" className={({isActive}) => `px-4 py-1.5 rounded-full transition-all ${isActive ? "bg-brand-500/10 text-brand-400" : "text-zinc-500 hover:text-zinc-200"}`}>Projects</NavLink>
        <NavLink to="/skills" className={({isActive}) => `px-4 py-1.5 rounded-full transition-all ${isActive ? "bg-brand-500/10 text-brand-400" : "text-zinc-500 hover:text-zinc-200"}`}>Skills</NavLink>
        <NavLink to="/achievements" className={({isActive}) => `px-4 py-1.5 rounded-full transition-all ${isActive ? "bg-brand-500/10 text-brand-400" : "text-zinc-500 hover:text-zinc-200"}`}>Hall of Fame</NavLink>
        <NavLink to="/contact" className={({isActive}) => `px-4 py-1.5 rounded-full transition-all ${isActive ? "bg-brand-500/10 text-brand-400" : "text-zinc-500 hover:text-zinc-200"}`}>Contact</NavLink>
      </nav>

      {/* Clear Chat */}
      <div className="w-20 sm:flex justify-end hidden">
        {clearChat && (
          <button
            onClick={clearChat}
            className="flex items-center gap-1.5 text-[12px] font-medium text-zinc-600 hover:text-red-400 transition-all p-2 rounded-lg hover:bg-red-500/10"
            title="Clear Chat"
          >
            <FaTrash size={12} />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
