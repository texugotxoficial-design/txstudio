import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import ScrollReveal from '../components/ScrollReveal';
import ReflectiveButton from '../components/ReflectiveButton';
import { motion, AnimatePresence } from 'framer-motion';

type ThemeID = 'institucional' | 'cardapio' | 'catalogo' | 'estetica';

const DemoPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ThemeID>('institucional');

    const themes = {
        institucional: {
            title: 'LUXURY INSTITUTIONAL',
            subtitle: 'Minimalismo & Poder',
            icon: 'business_center',
            color: 'primary',
            path: '/exemplos/institucional',
            content: (
                <div className="flex flex-col gap-6">
                    <div className="w-full h-44 bg-slate-900 rounded-3xl overflow-hidden relative border border-white/10">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" alt="Studio" />
                        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                            <p className="text-white font-black text-xs uppercase tracking-widest">PROJETOS 2026</p>
                            <p className="text-primary text-[9px] font-black uppercase tracking-[0.3em] mt-1">Limited Execution</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-1 bg-primary/20 rounded-full w-full">
                            <div className="h-full bg-primary w-1/3"></div>
                        </div>
                        <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em]">Autoridade em Construção</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {[1, 2].map(i => (
                            <div key={i} className="aspect-square bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary/40 text-3xl">architecture</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        cardapio: {
            title: 'GOURMET EXPERIENCE',
            subtitle: 'O Paladar Digital',
            icon: 'restaurant',
            color: 'accent',
            path: '/exemplos/restaurante',
            content: (
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center px-2">
                        <span className="text-white font-black text-xs uppercase tracking-widest">Menu_Noir_TX</span>
                        <div className="size-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                            <span className="material-symbols-outlined text-sm">notifications</span>
                        </div>
                    </div>
                    {[
                        { n: 'Bife Wellington', p: 'R$ 145', i: 'dinner_dining' },
                        { n: 'Lagosta Termidor', p: 'R$ 210', i: 'set_meal' }
                    ].map((item, idx) => (
                        <div key={idx} className="p-4 bg-[#0B0E14] border border-white/5 rounded-2xl flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                    <span className="material-symbols-outlined text-xl">{item.i}</span>
                                </div>
                                <div>
                                    <p className="text-white text-[10px] font-black uppercase">{item.n}</p>
                                    <p className="text-accent text-[9px] font-black">{item.p}</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-white/20">chevron_right</span>
                        </div>
                    ))}
                    <div className="p-4 bg-accent/10 rounded-2xl border border-accent/20 text-center">
                        <p className="text-accent text-[8px] font-black uppercase tracking-widest">Tempo de Espera: 25 min</p>
                    </div>
                </div>
            )
        },
        catalogo: {
            title: 'HIGH-END RETAIL',
            subtitle: 'Vitrine de Desejos',
            icon: 'shopping_bag',
            color: 'primary',
            path: '/exemplos/catalogo',
            content: (
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-[#0B0E14] border border-white/5 rounded-2xl overflow-hidden p-2">
                                <div className="aspect-square bg-white/5 rounded-xl mb-3 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-700 text-3xl">inventory_2</span>
                                </div>
                                <div className="px-1 space-y-1">
                                    <div className="h-1 bg-white/5 rounded-full w-2/3"></div>
                                    <div className="h-1 bg-primary/20 rounded-full w-1/2"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-primary text-white rounded-2xl text-center shadow-lg shadow-primary/20">
                        <p className="text-[10px] font-black uppercase tracking-widest">Cart: R$ 0,00</p>
                    </div>
                </div>
            )
        },
        estetica: {
            title: 'PREMIUM WELLNESS',
            subtitle: 'Essência Visual',
            icon: 'face',
            color: 'accent',
            path: '/exemplos/estetica',
            content: (
                <div className="flex flex-col gap-5">
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 size-20 bg-accent/10 blur-2xl"></div>
                        <p className="text-white text-xl font-black italic uppercase tracking-tighter mb-2">Renove-se.</p>
                        <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em]">Spa Ritual Experience</p>
                    </div>
                    <div className="space-y-4">
                        {[1, 2].map(i => (
                            <div key={i} className="p-4 bg-white/5 rounded-full flex items-center justify-between px-6 border border-white/5">
                                <span className="text-white text-[10px] font-black uppercase tracking-widest">Service {i}</span>
                                <div className="size-6 rounded-full bg-accent flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[10px] text-white">calendar_month</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex gap-2">
                        <div className="flex-1 h-32 rounded-3xl bg-white/5 border border-white/5"></div>
                        <div className="flex-1 h-32 rounded-3xl bg-accent/20 border border-accent/30 flex items-center justify-center p-4">
                            <p className="text-accent font-black text-[9px] text-center uppercase tracking-widest">Agenda Digital TX v1.2</p>
                        </div>
                    </div>
                </div>
            )
        }
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177', '_blank');
    };

    return (
        <div className="bg-bg-dark min-h-screen text-white transition-colors duration-300">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-24">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Laboratório Criativo TX</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">
                                ARENA DE <span className="text-gradient">INTERATIVIDADE.</span>
                            </h1>
                            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto italic">
                                "Nossa arena permite que você sinta a fluidez de cada sistema antes da implementação final. Selecione o seu nicho e explore."
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-col xl:flex-row items-start justify-center gap-20">
                        {/* Control Panel */}
                        <div className="w-full xl:w-[450px] space-y-6">
                            {(Object.keys(themes) as ThemeID[]).map((tid, idx) => {
                                const theme = themes[tid];
                                const isActive = activeTab === tid;
                                return (
                                    <ScrollReveal key={tid} delay={idx * 0.1} direction="left">
                                        <button
                                            onClick={() => setActiveTab(tid)}
                                            className={`w-full group p-8 rounded-[2.5rem] text-left border-2 transition-all duration-500 relative overflow-hidden backdrop-blur-xl
                                                ${isActive
                                                    ? `border-${theme.color}/50 bg-${theme.color}/5 shadow-2xl shadow-${theme.color}/20 scale-[1.02]`
                                                    : 'border-white/5 bg-white/5 hover:border-white/20'
                                                }`}
                                        >
                                            <div className="flex items-center gap-6 relative z-10">
                                                <div className={`size-14 rounded-2xl flex items-center justify-center transition-all duration-500
                                                    ${isActive
                                                        ? `bg-${theme.color} text-white shadow-[0_0_20px_rgba(var(--color-${theme.color}-rgb),0.5)]`
                                                        : 'bg-white/5 text-slate-500'
                                                    }`}>
                                                    <span className="material-symbols-outlined text-3xl">{theme.icon}</span>
                                                </div>
                                                <div>
                                                    <h3 className={`text-lg font-black tracking-tighter mb-1 uppercase ${isActive ? 'text-white' : 'text-slate-400'}`}>
                                                        {theme.title}
                                                    </h3>
                                                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">{theme.subtitle}</p>
                                                </div>
                                            </div>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="theme-glow"
                                                    className={`absolute top-0 right-0 size-40 bg-${theme.color}/10 rounded-full blur-[80px] -mr-20 -mt-20`}
                                                />
                                            )}
                                        </button>
                                    </ScrollReveal>
                                );
                            })}

                            <ScrollReveal delay={0.5} direction="up">
                                <div className="mt-10 p-10 rounded-[3rem] bg-gradient-to-br from-[#0B0E14] to-black border border-white/5 relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 size-40 bg-primary/5 rounded-full blur-[80px]"></div>
                                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter italic">VISÃO <span className="text-gradient">TX STUDIO.</span></h3>
                                    <p className="text-slate-500 mb-10 text-xs font-bold leading-relaxed uppercase tracking-widest">
                                        Design de elite que converte visual em lucro.
                                    </p>
                                    <ReflectiveButton size="lg" className="w-full" onClick={handleWhatsAppClick}>
                                        INICIAR CONSULTORIA
                                    </ReflectiveButton>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* The Mockup & Dynamic Content */}
                        <div className="flex-1 flex flex-col items-center">
                            <ScrollReveal direction="right">
                                <div className="relative group">
                                    {/* Thematic Glow */}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 0.4, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className={`absolute -inset-10 rounded-[5rem] blur-[100px] bg-${themes[activeTab].color}/20`}
                                        />
                                    </AnimatePresence>

                                    {/* Phone Mockup */}
                                    <div className="relative w-[340px] h-[680px] bg-[#020617] rounded-[4rem] border-[12px] border-[#1e293b] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden ring-4 ring-white/10">
                                        {/* Dynamic Header based on theme */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-9 bg-[#1e293b] rounded-b-3xl z-30 flex items-center justify-center gap-4">
                                            <div className="size-2 rounded-full bg-black"></div>
                                            <div className="w-14 h-1.5 bg-black/40 rounded-full"></div>
                                        </div>

                                        {/* Mockup Screen */}
                                        <div className="w-full h-full bg-[#050505] p-8 pt-20 overflow-y-auto no-scrollbar relative">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeTab}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    className="h-full"
                                                >
                                                    {themes[activeTab].content}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>

                                        {/* Fixed Home Indicator */}
                                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/10 rounded-full z-30"></div>
                                    </div>

                                    {/* Action Tooltip */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4"
                                    >
                                        <div className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-48 shadow-2xl">
                                            <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3">Live Experience</p>
                                            <Link to={themes[activeTab].path}>
                                                <button className="w-full py-3 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all">
                                                    ACESSAR FULL DEMO
                                                </button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            </ScrollReveal>

                            {/* Mobile specific link (visible only on small screens) */}
                            <div className="mt-12 lg:hidden w-full">
                                <Link to={themes[activeTab].path}>
                                    <button className="w-full py-6 bg-white/5 border border-white/10 rounded-3xl text-xs font-black uppercase tracking-widest text-primary">
                                        VER SITE COMPLETO: {themes[activeTab].title}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <ChatAssistant />
        </div>
    );
};

export default DemoPage;
