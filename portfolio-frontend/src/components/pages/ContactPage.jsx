import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
        try {
            const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
            const data = await response.json();
            if (data.success) { setResult("Message Sent Successfully!"); event.target.reset(); setTimeout(() => setResult(""), 3000); }
            else { setResult(data.message); }
        } catch { setResult("Failed to send. Please try the direct links."); }
    };

    const contactLinks = [
        { href: "mailto:immanvalan@gmail.com", label: "immanvalan@gmail.com", icon: "✉️", color: "from-red-500/15 to-orange-500/5" },
        { href: "https://github.com/Immanuelj15", label: "github.com/Immanuelj15", icon: "🐙", color: "from-zinc-500/15 to-zinc-700/5", external: true },
        { href: "https://www.linkedin.com/in/a-immanuel15/", label: "linkedin.com/in/a-immanuel15", icon: "💼", color: "from-blue-500/15 to-indigo-500/5", external: true },
        { href: "tel:+919080674380", label: "+91-9080674380", icon: "📱", color: "from-emerald-500/15 to-green-500/5" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl w-full"
        >
            <div className="grid md:grid-cols-2 gap-6">
                {/* Left: Contact Links */}
                <div className="flex flex-col gap-3">
                    <p className="text-zinc-500 text-[14px] leading-relaxed mb-4">
                        I'm always open to discussing new projects, creative ideas or opportunities.
                    </p>
                    {contactLinks.map((link, idx) => (
                        <a 
                            key={idx} 
                            href={link.href} 
                            target={link.external ? "_blank" : undefined} 
                            rel={link.external ? "noreferrer" : undefined}
                            className="glow-card flex items-center gap-4 px-5 py-4 group"
                        >
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-lg border border-white/5 group-hover:scale-110 transition-transform`}>
                                {link.icon}
                            </div>
                            <span className="text-[14px] text-zinc-300 font-medium group-hover:text-white transition-colors">{link.label}</span>
                        </a>
                    ))}
                </div>

                {/* Right: Form */}
                <div className="glow-card p-6">
                    <h3 className="text-lg font-bold text-zinc-100 mb-1 flex items-center gap-2">
                        <span className="text-brand-400">✦</span> Send a Direct Message
                    </h3>
                    <p className="text-zinc-600 text-[12px] mb-5">I typically respond within 24 hours.</p>
                    
                    <form onSubmit={onSubmit} className="flex flex-col gap-3">
                        <input type="text" name="name" placeholder="Your Name" required 
                            className="w-full bg-white/[0.03] border border-white/[0.06] text-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/40 focus:shadow-[0_0_15px_rgba(251,191,36,0.05)] transition-all text-[14px] placeholder:text-zinc-700" 
                        />
                        <input type="email" name="email" placeholder="Your Email" required 
                            className="w-full bg-white/[0.03] border border-white/[0.06] text-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/40 focus:shadow-[0_0_15px_rgba(251,191,36,0.05)] transition-all text-[14px] placeholder:text-zinc-700" 
                        />
                        <textarea name="message" placeholder="What would you like to discuss?" required rows="3" 
                            className="w-full bg-white/[0.03] border border-white/[0.06] text-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/40 focus:shadow-[0_0_15px_rgba(251,191,36,0.05)] transition-all text-[14px] resize-none placeholder:text-zinc-700"
                        ></textarea>
                        
                        <div className="flex items-center justify-between mt-1">
                            <span className={`text-sm font-medium ${result.includes('Success') ? 'text-emerald-400' : 'text-zinc-500'}`}>
                                {result}
                            </span>
                            <button type="submit" disabled={result === "Sending..."}
                                className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 disabled:opacity-50 text-zinc-900 font-bold py-2.5 px-6 rounded-xl transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 text-[13px]"
                            >
                                Send Message →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
