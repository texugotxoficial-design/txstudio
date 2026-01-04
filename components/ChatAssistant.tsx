
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'assistant';
    timestamp: Date;
    links?: { label: string; url: string }[];
}

const ChatAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Initial greeting
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: '1',
                    text: 'Olá! Sou a Assistente Virtual da LocalPro. Como posso ajudar você hoje?',
                    sender: 'assistant',
                    timestamp: new Date(),
                    links: [
                        { label: 'Ver Serviços', url: '/servicos' },
                        { label: 'Bots para Discord', url: '/discord-bots' }
                    ]
                }
            ]);
        }
    }, [messages.length]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate assistant response
        setTimeout(() => {
            generateResponse(userMessage.text);
        }, 1500);
    };

    const generateResponse = (text: string) => {
        const query = text.toLowerCase();
        let response = "";
        let links: { label: string; url: string }[] = [];

        if (query.includes('serviço') || query.includes('faz') || query.includes('trabalha')) {
            response = "A LocalPro é especialista em criar aplicativos informativos, comerciais e automações para Discord. Oferecemos soluções completas para digitalizar seu negócio.";
            links = [{ label: 'Nossos Serviços', url: '/servicos' }];
        } else if (query.includes('discord') || query.includes('bot') || query.includes('automação')) {
            response = "Nossos bots para Discord são feitos sob medida para moderação, economia, integração com sites e interação com membros. Temos planos que cabem no seu bolso!";
            links = [{ label: 'Bots para Discord', url: '/discord-bots' }];
        } else if (query.includes('preço') || query.includes('quanto') || query.includes('valor') || query.includes('orçamento')) {
            response = "Trabalhamos com preços acessíveis e sem taxas mensais. Para um orçamento específico para seu projeto, o ideal é conversar direto com nosso especialista via WhatsApp.";
            links = [{ label: 'Chamar no WhatsApp', url: 'https://wa.me/5516991122177' }];
        } else if (query.includes('contato') || query.includes('falar') || query.includes('whatsapp')) {
            response = "Você pode falar conosco agora mesmo pelo WhatsApp ou conferir nossa página Sobre para saber mais sobre nossa equipe.";
            links = [
                { label: 'WhatsApp', url: 'https://wa.me/5516991122177' },
                { label: 'Sobre a LocalPro', url: '/sobre' }
            ];
        } else if (query.includes('funcionalidade') || query.includes('recurso') || query.includes('pode ter')) {
            response = "Nossos apps contam com botões de contato, catálogos, galeria de fotos, painéis de controle e muito mais. Veja o que podemos incluir no seu projeto:";
            links = [{ label: 'Funcionalidades', url: '/funcionalidades' }];
        } else if (query.includes('demonstração') || query.includes('ver') || query.includes('exemplo') || query.includes('projeto')) {
            response = "Claro! Você pode ver alguns de nossos projetos em funcionamento na nossa página de demonstração interativa.";
            links = [{ label: 'Ver Demonstração', url: '/demonstracao' }];
        } else {
            response = "Entendi! Para que eu possa te ajudar melhor, tente perguntar sobre nossos 'serviços', 'bots para discord', 'preços' ou peça uma 'demonstração'.";
            links = [
                { label: 'Ver Serviços', url: '/servicos' },
                { label: 'WhatsApp', url: 'https://wa.me/5516991122177' }
            ];
        }

        const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: response,
            sender: 'assistant',
            timestamp: new Date(),
            links: links
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-[320px] sm:w-[380px] h-[500px] bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 overflow-hidden flex flex-col backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="bg-primary-blue p-4 flex items-center justify-between text-white shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-white/20 flex items-center justify-center relative">
                                    <span className="material-symbols-outlined text-[24px]">smart_toy</span>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-primary-blue"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Assistente LocalPro</h3>
                                    <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Online agora</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-slate-50 dark:bg-[#020617]/50">
                            {messages.map((m) => (
                                <motion.div
                                    key={m.id}
                                    initial={{ opacity: 0, x: m.sender === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.sender === 'user'
                                            ? 'bg-primary-blue text-white rounded-br-none shadow-md shadow-primary-blue/20'
                                            : 'bg-white dark:bg-[#1E293B] text-slate-700 dark:text-slate-300 rounded-bl-none border border-black/5 dark:border-white/5 shadow-sm'
                                        }`}>
                                        {m.text}
                                    </div>

                                    {m.links && m.links.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {m.links.map((link, idx) => (
                                                link.url.startsWith('http') ? (
                                                    <a
                                                        key={idx}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-3 py-1.5 bg-green-500/10 text-green-500 dark:text-green-400 border border-green-500/20 rounded-lg text-xs font-bold hover:bg-green-500 hover:text-white transition-all flex items-center gap-1"
                                                    >
                                                        <span className="material-symbols-outlined text-[14px]">chat</span>
                                                        {link.label}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={idx}
                                                        to={link.url}
                                                        className="px-3 py-1.5 bg-primary-blue/10 text-primary-blue dark:text-blue-400 border border-primary-blue/20 rounded-lg text-xs font-bold hover:bg-primary-blue hover:text-white transition-all"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    )}
                                    <span className="text-[9px] text-slate-400 mt-1 uppercase font-medium">
                                        {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs italic">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                    Digitando...
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-4 bg-white dark:bg-[#0F172A] border-t border-black/5 dark:border-white/10 flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Digite sua dúvida..."
                                className="flex-1 bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary-blue/50 outline-none rounded-xl px-4 py-2 text-sm text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all"
                            />
                            <button
                                type="submit"
                                className="size-10 rounded-xl bg-primary-blue text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg shadow-primary-blue/20"
                            >
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`flex size-14 items-center justify-center rounded-full text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-colors cursor-pointer z-50 ${isOpen ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300' : 'bg-green-500 hover:bg-green-600'
                    }`}
            >
                {isOpen ? (
                    <span className="material-symbols-outlined text-[28px]">chat_bubble_outline</span>
                ) : (
                    <div className="relative">
                        <span className="material-symbols-outlined text-[28px]">chat</span>
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white dark:border-[#020617] rounded-full"></span>
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default ChatAssistant;
