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
                    text: 'Olá! Sou a IA de Atendimento da TX Digital Studio. Como posso transformar seu negócio hoje?',
                    sender: 'assistant',
                    timestamp: new Date(),
                    links: [
                        { label: 'Explorar Serviços', url: '/servicos' },
                        { label: 'Sistemas Discord', url: '/discord-bots' }
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
        }, 1200);
    };

    const generateResponse = (text: string) => {
        const query = text.toLowerCase();
        let response = "";
        let links: { label: string; url: string }[] = [];

        if (query.includes('serviço') || query.includes('faz') || query.includes('trabalha')) {
            response = "Na TX Digital Studio, unimos design de alta performance com tecnologia de elite. Criamos apps institucionais, comerciais e automações complexas para Discord.";
            links = [{ label: 'Nossa Vitrine', url: '/servicos' }];
        } else if (query.includes('discord') || query.includes('bot') || query.includes('automação')) {
            response = "Nossos sistemas para Discord são projetados para escalar comunidades. Oferecemos economia integrada, moderação avançada e dashboards exclusivos.";
            links = [{ label: 'Ver Planos Discord', url: '/discord-bots' }];
        } else if (query.includes('preço') || query.includes('quanto') || query.includes('valor') || query.includes('orçamento')) {
            response = "Investir na TX é investir em autoridade. Nossos projetos são personalizados sob medida. O ideal é iniciarmos uma consultoria rápida via WhatsApp.";
            links = [{ label: 'Consultoria VIP', url: 'https://wa.me/5516991122177' }];
        } else if (query.includes('contato') || query.includes('falar') || query.includes('whatsapp')) {
            response = "Você pode falar diretamente com nossa diretoria criativa pelo WhatsApp ou conhecer nossa história na página institucional.";
            links = [
                { label: 'Botão WhatsApp', url: 'https://wa.me/5516991122177' },
                { label: 'Sobre a TX Studio', url: '/sobre' }
            ];
        } else if (query.includes('funcionalidade') || query.includes('recurso') || query.includes('pode ter')) {
            response = "Nossas plataformas contam com interfaces glassmorphism, carregamento ultra-rápido, PWA e total integração com seus canais de venda.";
            links = [{ label: 'Poder Tecnológico', url: '/funcionalidades' }];
        } else if (query.includes('demonstração') || query.includes('ver') || query.includes('exemplo') || query.includes('projeto')) {
            response = "Temos uma arena de demonstração onde você pode interagir com nossos mockups antes mesmo de iniciarmos seu projeto.";
            links = [{ label: 'Arena de Demo', url: '/demonstracao' }];
        } else {
            response = "Fascinante! Para que eu possa te guiar com precisão, pergunte sobre nossos 'serviços', 'bots para discord', 'posicionamento de mercado' ou peça uma 'demo'.";
            links = [
                { label: 'Ver Serviços', url: '/servicos' },
                { label: 'Especialista TX', url: 'https://wa.me/5516991122177' }
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
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[320px] sm:w-[400px] h-[550px] bg-[#0B0E14]/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/5 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-accent p-6 flex items-center justify-between text-white">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-2xl bg-white/20 flex items-center justify-center relative border border-white/10">
                                    <span className="material-symbols-outlined text-[28px]">biotech</span>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0B0E14]"></span>
                                </div>
                                <div>
                                    <h3 className="font-black text-sm uppercase tracking-tighter">TX Assistant</h3>
                                    <p className="text-[9px] opacity-70 uppercase tracking-widest font-black">AI System Online</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="size-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors border border-white/10">
                                <span className="material-symbols-outlined text-sm">close</span>
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
                            {messages.map((m) => (
                                <motion.div
                                    key={m.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div className={`max-w-[85%] p-4 rounded-3xl text-xs font-medium leading-relaxed ${m.sender === 'user'
                                        ? 'bg-primary text-white rounded-br-none shadow-lg shadow-primary/20'
                                        : 'bg-white/5 text-slate-300 rounded-bl-none border border-white/5'
                                        }`}>
                                        {m.text}
                                    </div>

                                    {m.links && m.links.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {m.links.map((link, idx) => (
                                                link.url.startsWith('http') ? (
                                                    <a
                                                        key={idx}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-4 py-2 bg-green-500/10 text-green-500 border border-green-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all flex items-center gap-2"
                                                    >
                                                        <span className="material-symbols-outlined text-xs">chat</span>
                                                        {link.label}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={idx}
                                                        to={link.url}
                                                        className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    )}
                                    <span className="text-[8px] text-slate-500 mt-2 uppercase font-black tracking-widest">
                                        {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-widest italic">
                                    <div className="flex gap-1.5">
                                        <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
                                        <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                    Processando...
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-6 bg-black/20 border-t border-white/5 flex gap-3">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Descreva sua necessidade..."
                                className="flex-1 bg-white/5 border border-white/5 focus:border-primary/50 outline-none rounded-2xl px-5 py-3 text-xs text-white placeholder:text-slate-600 transition-all"
                            />
                            <button
                                type="submit"
                                className="size-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-all shadow-xl shadow-primary/20 group"
                            >
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`flex size-16 items-center justify-center rounded-full text-white shadow-2xl transition-all cursor-pointer z-50 border border-white/10 ${isOpen ? 'bg-white/5' : 'bg-primary hover:shadow-primary/30'
                    }`}
            >
                {isOpen ? (
                    <span className="material-symbols-outlined text-[32px]">close</span>
                ) : (
                    <div className="relative">
                        <span className="material-symbols-outlined text-[32px]">hub</span>
                        <span className="absolute -top-1 -right-1 size-4 bg-accent border-2 border-primary rounded-full animate-pulse"></span>
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default ChatAssistant;
