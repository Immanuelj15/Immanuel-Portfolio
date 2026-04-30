import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaUser, FaRobot, FaMagic, FaCode, FaTools, FaEnvelope, FaTrash, FaMicrophone, FaMicrophoneSlash, FaVolumeUp, FaStop, FaTrophy } from 'react-icons/fa';
import axios from 'axios';

// Import Rich UI Components
import ProfileCard from './chat/ProfileCard';
import ProjectsList from './chat/ProjectsList';
import SkillsGrid from './chat/SkillsGrid';
import AchievementsList from './chat/AchievementsList';
import ContactCard from './chat/ContactCard';
import Typewriter from './chat/Typewriter';

function ChatHome({ registerClear }) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState(null);
  const recognitionRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => { scrollToBottom(); }, [messages, isLoading]);

  useEffect(() => {
    if (registerClear) registerClear(clearChat);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerClear]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = false;
      recognitionRef.current.onstart = () => setIsListening(true);
      recognitionRef.current.onend = () => setIsListening(false);
      recognitionRef.current.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        setInput(prev => prev ? prev + ' ' + speechToText : speechToText);
      };
      recognitionRef.current.onerror = () => setIsListening(false);
    }
  }, []);

  const handleListen = () => {
    if (!recognitionRef.current) { alert("Voice not supported. Try Chrome."); return; }
    isListening ? recognitionRef.current.stop() : recognitionRef.current.start();
  };

  const speakText = (text, messageId) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking && speakingMessageId === messageId) {
        window.speechSynthesis.cancel(); setIsSpeaking(false); setSpeakingMessageId(null); return;
      }
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[*_#`~]+/g, '').replace(/https?:\/\/[^\s]+/g, 'link');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0; utterance.pitch = 1.0;
      utterance.onstart = () => { setIsSpeaking(true); setSpeakingMessageId(messageId); };
      utterance.onend = () => { setIsSpeaking(false); setSpeakingMessageId(null); };
      utterance.onerror = () => { setIsSpeaking(false); setSpeakingMessageId(null); };
      window.speechSynthesis.speak(utterance);
    }
  };

  const clearChat = () => setMessages([]);

  const quickPrompts = [
    { label: 'Me', icon: <FaUser />, prompt: 'Tell me about yourself' },
    { label: 'Projects', icon: <FaCode />, prompt: 'Show me your projects' },
    { label: 'Skills', icon: <FaTools />, prompt: 'What are your skills?' },
    { label: 'Hall of Fame', icon: <FaTrophy />, prompt: 'Show me your achievements' },
    { label: 'Contact', icon: <FaEnvelope />, prompt: 'How can I contact you?' },
  ];

  const handleQuickPrompt = (prompt) => {
    setInput(prompt);
    setTimeout(() => document.getElementById('chat-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })), 100);
  };

  const determineComponentToRender = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('myself') || lowerText.includes('background') || (lowerText.includes('immanuel') && !lowerText.includes('contact'))) return <ProfileCard />;
    if (lowerText.includes('project') || lowerText.includes('built')) return <ProjectsList />;
    if (lowerText.includes('skill') || lowerText.includes('technology') || lowerText.includes('stack')) return <SkillsGrid />;
    if (lowerText.includes('achievement') || lowerText.includes('award') || lowerText.includes('hall of fame') || lowerText.includes('trophy')) return <AchievementsList />;
    if (lowerText.includes('contact') || lowerText.includes('reach') || lowerText.includes('hire')) return <ContactCard />;
    return null;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userText }]);
    setInput(''); setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${API_BASE}/api/chat`, { message: userText });
      const aiResponseText = response.data.reply;
      let componentToRender = determineComponentToRender(userText);
      if (!componentToRender) componentToRender = determineComponentToRender(aiResponseText);
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiResponseText, component: componentToRender }]);
    } catch (error) {
      const fallbackComponent = determineComponentToRender(userText);
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: "Here is what I found (Offline Mode):", component: fallbackComponent }]);
    } finally { setIsLoading(false); }
  };

  return (
    <div className="flex flex-col h-full bg-transparent text-zinc-100 font-sans overflow-hidden relative z-10">
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-12 py-8 scroll-smooth z-0 pt-4" id="chat-scroll-area">
        <div className="max-w-4xl mx-auto space-y-8 pb-32">

          {/* Hero */}
          {messages.length === 0 && (
            <div className="animate-fade-in px-4 relative py-6 md:py-16">
              {/* Animated Gradient Orb */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-br from-brand-500/10 via-brand-400/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

              <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
                {/* LEFT — Text Content */}
                <div className="flex-1 text-center md:text-left relative z-10">
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-400 text-xs font-semibold mb-6 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow"></span>
                    Available for opportunities
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-black mb-5 tracking-tight text-white">
                    Hi, I'm <span className="text-gradient">Immanuel A.</span>
                  </h1>
                  <h2 className="text-xl md:text-2xl font-bold text-zinc-400 mb-6">
                    Full-Stack Developer & <span className="text-brand-400">AI Engineer</span>
                  </h2>
                  
                  <p className="text-zinc-500 text-[15px] font-medium max-w-lg mb-8 leading-relaxed">
                    I specialize in building RAG pipelines, LLM agents, and modern web platforms. Ask my AI assistant below to learn more.
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
                    <a href="https://github.com/Immanuelj15" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all group">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/a-immanuel15/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all group">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="mailto:immanvalan@gmail.com" className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all group">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                    <a href="/resume.pdf" download="Immanuel_Resume.pdf" className="ml-2 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-zinc-900 hover:from-brand-400 hover:to-brand-500 transition-all text-[13px] font-bold shadow-lg shadow-brand-500/20">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                      Resume
                    </a>
                  </div>
                </div>

                {/* RIGHT — Profile Photo */}
                <div className="relative shrink-0 group">
                  {/* Glow behind photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-blue-500/10 to-transparent rounded-3xl blur-2xl scale-110 animate-pulse-slow"></div>
                  
                  <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border-2 border-brand-500/20 shadow-2xl shadow-brand-500/10 group-hover:border-brand-400/40 transition-all duration-500">
                    <img src="/assets/profile.png" alt="Immanuel A" className="w-full h-full object-cover object-top" />
                    {/* Subtle gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#09090b]/80 to-transparent"></div>
                  </div>

                  {/* Floating tag */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0f0f12] border border-brand-500/30 text-brand-400 text-[11px] font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                    ✦ AI Engineer
                  </div>
                </div>
              </div>
            </div>
          )}

          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 max-w-4xl mx-auto ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-9 h-9 mt-1 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-brand-500/20 to-blue-500/10 text-brand-400 border border-brand-500/20 shadow-lg shadow-brand-500/5">
                    <FaMagic size={14} />
                  </div>
                )}

                <div className={`flex flex-col gap-2 max-w-[85%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`text-[14px] leading-relaxed relative group ${msg.sender === 'user'
                    ? 'px-5 py-3 rounded-2xl bg-gradient-to-r from-brand-600/80 to-brand-500/80 text-white border border-brand-500/30 shadow-lg shadow-brand-500/10 backdrop-blur-sm'
                    : 'bg-transparent text-zinc-300 w-full max-w-lg'
                    }`}>
                    {msg.sender === 'ai' ? (
                      <div className="glow-card p-5 w-full relative">
                        <Typewriter text={msg.text} delay={15} />
                        <button 
                          onClick={() => speakText(msg.text, msg.id)}
                          className={`absolute top-3 right-3 p-1.5 rounded-md transition-all opacity-0 group-hover:opacity-100 ${
                            isSpeaking && speakingMessageId === msg.id 
                              ? 'bg-brand-500/20 text-brand-400 opacity-100' 
                              : 'bg-zinc-800/50 text-zinc-500 hover:text-white'
                          }`}
                        >
                          {isSpeaking && speakingMessageId === msg.id ? <FaStop size={12} /> : <FaVolumeUp size={12} />}
                        </button>
                      </div>
                    ) : (
                      <span>{msg.text}</span>
                    )}
                  </div>

                  {msg.component && (
                    <div className="mt-1 w-full">{msg.component}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 max-w-4xl mx-auto">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-blue-500 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-brand-500/20">
                <FaMagic className="text-white text-xs" />
              </div>
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-[#09090b] via-[#09090b]/98 to-transparent z-20 pointer-events-none">
        <div className="max-w-3xl mx-auto pointer-events-auto flex flex-col gap-3">

          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {quickPrompts.map((btn, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickPrompt(btn.prompt)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f0f12]/80 hover:bg-[#18181b] border border-[#1c1c22] hover:border-brand-500/20 text-zinc-400 hover:text-white transition-all text-[13px] font-medium backdrop-blur-sm group"
              >
                <span className="text-brand-500 group-hover:text-brand-400 transition-colors">{btn.icon}</span>
                {btn.label}
              </button>
            ))}
          </div>

          <form id="chat-form" onSubmit={sendMessage} className="relative flex items-center justify-center w-full mt-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-[#0f0f12]/90 border border-[#1c1c22] text-zinc-200 rounded-2xl pl-6 pr-24 py-4 focus:outline-none focus:border-brand-500/40 focus:shadow-[0_0_20px_rgba(251,191,36,0.06)] transition-all text-[14px] backdrop-blur-sm placeholder:text-zinc-600"
            />
            
            <div className="absolute right-3 flex items-center gap-1">
              <button
                type="button"
                onClick={handleListen}
                className={`p-2.5 rounded-xl transition-all ${isListening ? 'text-brand-400 bg-brand-500/10 shadow-[0_0_15px_rgba(251,191,36,0.1)]' : 'text-zinc-600 hover:text-zinc-300'}`}
              >
                {isListening ? <FaMicrophone /> : <FaMicrophoneSlash />}
              </button>
              
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 disabled:opacity-20 transition-all text-white shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 disabled:shadow-none"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatHome;
