import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

const Typewriter = ({ text, delay = 15 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentText('');
        setCurrentIndex(0);
    }, [text]);

    useEffect(() => {
        if (currentIndex < text.length) {
            // Chunking text slightly to render faster (e.g. 2-3 chars at a time) feels more natural
            const charsToAdd = Math.min(3, text.length - currentIndex);
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text.slice(currentIndex, currentIndex + charsToAdd));
                setCurrentIndex(prevIndex => prevIndex + charsToAdd);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return (
        <div className="relative text-[14px] leading-relaxed text-zinc-300">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                {...props}
                                children={String(children).replace(/\n$/, '')}
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                className="!rounded-lg !border !border-[#27272a] !bg-[#0d0c13] !my-4 !text-[13px]"
                            />
                        ) : (
                            <code {...props} className="bg-[#201e2b] px-1.5 py-0.5 rounded-md text-brand-300 font-mono text-[13px] border border-[#2c2a3b]">
                                {children}
                            </code>
                        )
                    },
                    p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
                    a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors underline underline-offset-4">{children}</a>,
                    ul: ({ children }) => <ul className="list-disc pl-5 mb-4 space-y-1.5 marker:text-zinc-500">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-5 mb-4 space-y-1.5 marker:text-zinc-500">{children}</ol>,
                    li: ({ children }) => <li className="pl-1">{children}</li>,
                    h1: ({ children }) => <h1 className="text-xl font-bold mb-4 mt-6 text-white">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-lg font-bold mb-3 mt-5 text-white">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-[15px] font-bold mb-2 mt-4 text-white">{children}</h3>,
                    strong: ({ children }) => <strong className="font-semibold text-zinc-100">{children}</strong>,
                    blockquote: ({ children }) => <blockquote className="border-l-2 border-brand-500 pl-4 italic text-zinc-400 my-4">{children}</blockquote>,
                }}
            >
                {currentText}
            </ReactMarkdown>
            {currentIndex < text.length && (
                <span className="inline-block w-1.5 h-3.5 ml-1 bg-brand-400 animate-pulse align-baseline" />
            )}
        </div>
    );
};

export default Typewriter;
