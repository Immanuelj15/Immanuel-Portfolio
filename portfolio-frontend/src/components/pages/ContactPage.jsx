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
        { 
            href: "mailto:immanvalan@gmail.com", 
            label: "immanvalan@gmail.com", 
            sub: "Primary contact",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            ),
        },
        { 
            href: "https://github.com/Immanuelj15", 
            label: "github.com/Immanuelj15",
            sub: "Open source & projects",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>            ),
            external: true
        },
        { 
            href: "https://www.linkedin.com/in/a-immanuel15/", 
            label: "linkedin.com/in/a-immanuel15",
            sub: "Professional network",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            ),
            external: true
        },
        { 
            href: "tel:+919080674380", 
            label: "+91-9080674380",
            sub: "Call directly",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            ),
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl w-full"
        >
            <div className="grid md:grid-cols-5 gap-5">
                {/* Left: Contact Links - 3 columns */}
                <div className="md:col-span-2 flex flex-col gap-3">
                    {contactLinks.map((link, idx) => (
                        <a 
                            key={idx} 
                            href={link.href} 
                            target={link.external ? "_blank" : undefined} 
                            rel={link.external ? "noreferrer" : undefined}
                            className="glow-card flex items-center gap-4 px-5 py-4 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500 group-hover:text-brand-400 group-hover:border-brand-500/20 transition-all shrink-0">
                                {link.icon}
                            </div>
                            <div className="min-w-0">
                                <span className="text-[13px] text-zinc-300 font-medium group-hover:text-white transition-colors block truncate">{link.label}</span>
                                <span className="text-[11px] text-zinc-600 font-medium">{link.sub}</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Right: Form - 3 columns */}
                <div className="md:col-span-3 glow-card p-6">
                    <h3 className="text-lg font-bold text-zinc-100 mb-1 flex items-center gap-2">
                        <svg className="text-brand-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        Send a Direct Message
                    </h3>
                    <p className="text-zinc-600 text-[12px] mb-5">I typically respond within 24 hours.</p>
                    
                    <form onSubmit={onSubmit} className="flex flex-col gap-3">
                        <div className="grid grid-cols-2 gap-3">
                            <input type="text" name="name" placeholder="Your Name" required 
                                className="w-full bg-white/[0.03] border border-white/[0.06] text-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/40 focus:shadow-[0_0_15px_rgba(251,191,36,0.05)] transition-all text-[14px] placeholder:text-zinc-700" 
                            />
                            <input type="email" name="email" placeholder="Your Email" required 
                                className="w-full bg-white/[0.03] border border-white/[0.06] text-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500/40 focus:shadow-[0_0_15px_rgba(251,191,36,0.05)] transition-all text-[14px] placeholder:text-zinc-700" 
                            />
                        </div>
                        <textarea name="message" placeholder="What would you like to discuss?" required rows="4" 
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
