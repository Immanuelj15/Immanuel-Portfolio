import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import axios from 'axios';

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'ai', text: "Hi! I'm Immanuel's AI assistant. Ask me anything about his projects, skills, or experience!" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), sender: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/chat', { message: userMsg.text });
            const aiResponse = response.data.reply;

            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiResponse }]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-400 to-blue-500 text-transparent bg-clip-text">
                Interactive AI Assistant
            </h2>

            <div className="w-full max-w-2xl bg-dark-card border border-zinc-800 rounded-3xl overflow-hidden glass shadow-2xl flex flex-col h-[500px]">

                {/* Chat History */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((msg) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={msg.id}
                            className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-brand-500' : 'bg-zinc-800 border border-zinc-700'}`}>
                                {msg.sender === 'user' ? <FaUser className="text-sm" /> : <FaRobot className="text-brand-400 text-sm" />}
                            </div>
                            <div className={`px-4 py-3 rounded-2xl max-w-[80%] ${msg.sender === 'user' ? 'bg-brand-600 text-white rounded-tr-none' : 'bg-zinc-800/80 text-zinc-200 border border-zinc-700/50 rounded-tl-none'}`}>
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </motion.div>
                    ))}
                    {isLoading && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                                <FaRobot className="text-brand-400 text-sm" />
                            </div>
                            <div className="px-4 py-3 rounded-2xl bg-zinc-800/80 border border-zinc-700/50 rounded-tl-none flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-zinc-800/80 bg-zinc-900/50 backdrop-blur-md">
                    <form onSubmit={sendMessage} className="relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything..."
                            className="w-full bg-zinc-800/50 border border-zinc-700/50 text-white rounded-full pl-6 pr-14 py-4 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="absolute right-2 p-3 rounded-full bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
                        >
                            <FaPaperPlane className="text-sm" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
