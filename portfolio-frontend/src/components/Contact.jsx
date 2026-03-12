import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-brand-400 to-blue-500 text-transparent bg-clip-text">
                Get In Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                {/* Contact Info */}
                <div className="flex flex-col space-y-6">
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:bg-brand-500/20 transition-all border border-zinc-800">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:bg-brand-500/20 transition-all border border-zinc-800">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="mailto:contact@immanuel.dev" className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:bg-brand-500/20 transition-all border border-zinc-800">
                            <FaEnvelope size={20} />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 glass p-6 rounded-2xl border border-zinc-800/50"
                >
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-sm text-zinc-400">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-white"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm text-zinc-400">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-white"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-sm text-zinc-400">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-white resize-none"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="button"
                        className="mt-2 bg-brand-600 hover:bg-brand-500 text-white font-medium py-3 rounded-lg transition-colors border border-brand-400/30"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
