
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import LeadModal from '../components/LeadModal';

import ScrollReveal from '../components/ScrollReveal';

const DiscordBotsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const openModal = (project: string) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleDiscordContactClick = () => {
        openModal('Consultoria Discord Bot');
    };

    const handleLanHouseClick = () => {
        window.open('https://discord.gg/C9pVx4muZG', '_blank');
    };

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen font-display text-text-primary-light dark:text-text-primary-dark antialiased transition-colors duration-300">
            <div className="relative flex min-h-screen w-full flex-col group/design-root">
                <Navbar />

                <main className="flex-grow">
                    {/* Hero Section */}
                    <section className="relative py-16 md:py-24 lg:py-32 bg-[#020617] overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none z-0">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5865F2]/20 rounded-full blur-[120px]"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]"></div>
                        </div>

                        <div className="layout-container px-4 md:px-10 flex justify-center relative z-10">
                            <div className="layout-content-container flex flex-col lg:flex-row max-w-[1280px] w-full gap-12 items-center">
                                <div className="flex-1 text-center lg:text-left">
                                    <ScrollReveal direction="left">
                                        <div className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/20 mb-6">
                                            <span className="w-2 h-2 rounded-full bg-[#5865F2] animate-pulse"></span>
                                            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Novidade: Bots Personalizados</span>
                                        </div>
                                        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                                            A automação que seu <span className="text-[#5865F2]">Discord</span> merece
                                        </h1>
                                        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light">
                                            Transforme sua comunidade com bots exclusivos. Automatize a moderação, engaje membros com ranking de voz e gerencie cargos sem esforço manual.
                                        </p>
                                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                            <button
                                                onClick={handleDiscordContactClick}
                                                className="bg-white text-black font-black py-4 px-8 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
                                            >
                                                Falar com Especialista
                                            </button>
                                            <Link
                                                to="/planos-bots"
                                                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 px-8 rounded-xl transition-all backdrop-blur-sm"
                                            >
                                                Ver Planos
                                            </Link>
                                        </div>
                                    </ScrollReveal>
                                </div>

                                <div className="flex-1 w-full max-w-[500px]">
                                    <ScrollReveal direction="right" delay={0.2}>
                                        <div className="relative aspect-video bg-slate-900/80 rounded-2xl border border-white/10 shadow-2xl p-6 backdrop-blur-md group overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/10 to-transparent"></div>
                                            {/* Mock Bot Interface */}
                                            <div className="flex flex-col gap-4 relative z-10">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-[#5865F2] rounded-full flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-white text-xl">smart_toy</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-white font-bold text-xs flex items-center gap-1">LocalPro Bot <span className="bg-[#5865F2] px-1 rounded text-[8px]">BOT</span></span>
                                                        <span className="text-slate-400 text-[10px]">Hoje às 14:30</span>
                                                    </div>
                                                </div>
                                                <div className="bg-white/5 rounded-xl border border-white/10 p-4">
                                                    <h4 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-yellow-500 text-sm">trophy</span>
                                                        Ranking de Atividade Semanal
                                                    </h4>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex items-center justify-between text-[10px] text-slate-300 border-b border-white/5 pb-1">
                                                            <span>#1 @UsuarioMaster</span>
                                                            <span className="text-[#5865F2]">43h em call</span>
                                                        </div>
                                                        <div className="flex items-center justify-between text-[10px] text-slate-300 border-b border-white/5 pb-1">
                                                            <span>#2 @ModeradorPro</span>
                                                            <span className="text-slate-400">38h em call</span>
                                                        </div>
                                                        <div className="flex items-center justify-between text-[10px] text-slate-300 border-b border-white/5 pb-1">
                                                            <span>#3 @NovatoGamer</span>
                                                            <span className="text-slate-400">12h em call</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-[8px] text-slate-500 mt-3 italic text-center">Atualizado automaticamente a cada 5 minutos.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-20 bg-bg-light dark:bg-[#0B0E14]">
                        <div className="layout-container px-4 md:px-10 flex flex-col items-center">
                            <ScrollReveal>
                                <div className="max-w-2xl text-center mb-16">
                                    <h2 className="text-text-primary-light dark:text-white text-3xl md:text-4xl font-black mb-4 tracking-tight">Funcionalidades Essenciais</h2>
                                    <p className="text-text-secondary-light dark:text-slate-400 text-lg">Nossos bots são desenvolvidos com módulos robustos para cobrir todas as necessidades de gestão da sua comunidade.</p>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1280px]">
                                {[
                                    { title: 'Canais Dinâmicos', desc: 'Criação e exclusão automática de salas de voz. Mantenha seu servidor limpo e organizado sem intervenção manual.', icon: 'cyclone', color: '#5865F2' },
                                    { title: 'Ranking de Voz', desc: 'Gamifique a participação. Sistema de XP baseado em tempo conectado em chamadas de voz e atividade de chat.', icon: 'leaderboard', color: '#E91E63' },
                                    { title: 'Logs de Registro', desc: 'Auditoria completa. Saiba exatamente quem entrou, saiu, ou foi movido, com logs detalhados em canais privados.', icon: 'description', color: '#2563EB' },
                                    { title: 'Gestão de Cargos', desc: 'Autoroles ao entrar no servidor, reaction roles e comandos administrativos para gerenciar hierarquia.', icon: 'manage_accounts', color: '#10B981' }
                                ].map((feature, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.1}>
                                        <div className="p-8 rounded-2xl bg-surface-light dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-[#5865F2]/50 transition-all group h-full">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6`} style={{ backgroundColor: `${feature.color}15`, color: feature.color }}>
                                                <span className="material-symbols-outlined">{feature.icon}</span>
                                            </div>
                                            <h3 className="text-text-primary-light dark:text-white text-xl font-bold mb-3">{feature.title}</h3>
                                            <p className="text-text-secondary-light dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <section id="planos" className="py-20 bg-bg-light dark:bg-[#020617] relative">
                        <div className="layout-container px-4 md:px-10 flex flex-col items-center">
                            <ScrollReveal>
                                <div className="max-w-2xl text-center mb-16">
                                    <h2 className="text-text-primary-light dark:text-white text-3xl md:text-4xl font-black mb-4 tracking-tight">Escolha seu Nível</h2>
                                    <p className="text-text-secondary-light dark:text-slate-400 text-lg">Soluções flexíveis para servidores de todos os tamanhos, do casual ao profissional.</p>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px]">
                                {/* Iniciante */}
                                <ScrollReveal delay={0.1}>
                                    <div className="p-8 rounded-3xl bg-surface-light dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col gap-8 transition-all hover:scale-[1.02] h-full">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-text-primary-light dark:text-white text-2xl font-black">Iniciante</h3>
                                            <p className="text-text-secondary-light dark:text-slate-400 text-sm">Para comunidades pequenas começando agora.</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-4xl font-black text-text-primary-light dark:text-white">R$ 50<span className="text-sm font-normal opacity-50">/mês</span></span>
                                        </div>
                                        <div className="flex flex-col gap-4 flex-1">
                                            {[
                                                'Mensagem de Boas-vindas',
                                                'Auto-Role (Cargo Inicial)',
                                                'Comandos básicos de moderação',
                                                'Suporte via Ticket'
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-3 text-sm">
                                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                                    <span className="text-text-secondary-light dark:text-slate-300">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => openModal('Bot Discord: Iniciante')}
                                            className="w-full py-4 rounded-xl border border-black/10 dark:border-white/10 text-text-primary-light dark:text-white font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                                        >
                                            Começar Agora
                                        </button>
                                    </div>
                                </ScrollReveal>

                                {/* Comunidade Pro */}
                                <ScrollReveal delay={0.2}>
                                    <div className="p-8 rounded-3xl bg-surface-light dark:bg-white/5 border-2 border-[#5865F2] flex flex-col gap-8 transition-all hover:scale-[1.05] relative shadow-2xl shadow-[#5865F2]/20 h-full">
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5865F2] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter">Mais Popular</div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-text-primary-light dark:text-white text-2xl font-black">Comunidade Pro</h3>
                                            <p className="text-text-secondary-light dark:text-slate-400 text-sm">Engajamento total e automação avançada.</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-4xl font-black text-text-primary-light dark:text-white">R$ 120<span className="text-sm font-normal opacity-50">/mês</span></span>
                                        </div>
                                        <div className="flex flex-col gap-4 flex-1">
                                            {[
                                                'Tudo do plano Iniciante',
                                                'Sistema de Ranking (Nível/XP)',
                                                'Criação de Canais de Voz Dinâmicos',
                                                'Logs de Auditoria Completos',
                                                'Personalização de Cores/Embeds'
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-3 text-sm">
                                                    <span className="material-symbols-outlined text-[#5865F2] text-lg">check_circle</span>
                                                    <span className="text-text-secondary-light dark:text-slate-300 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => openModal('Bot Discord: Comunidade Pro')}
                                            className="w-full py-4 rounded-xl bg-[#5865F2] text-white font-black hover:bg-[#4752C4] transition-all shadow-lg shadow-[#5865F2]/30"
                                        >
                                            Contratar Pro
                                        </button>
                                    </div>
                                </ScrollReveal>

                                {/* Enterprise */}
                                <ScrollReveal delay={0.3}>
                                    <div className="p-8 rounded-3xl bg-surface-light dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col gap-8 transition-all hover:scale-[1.02] h-full">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-text-primary-light dark:text-white text-2xl font-black">Enterprise</h3>
                                            <p className="text-text-secondary-light dark:text-slate-400 text-sm">Funcionalidades customizadas para negócios.</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-black text-text-primary-light dark:text-white uppercase tracking-tight">Sob Consulta</span>
                                        </div>
                                        <div className="flex flex-col gap-4 flex-1">
                                            {[
                                                'Bot Exclusivo (Nome/Foto Próprios)',
                                                'Integração com APIs Externas',
                                                'Sistemas de Pagamento/Loja',
                                                'Suporte Prioritário 24/7'
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-3 text-sm">
                                                    <span className="material-symbols-outlined text-purple-500 text-lg">check_circle</span>
                                                    <span className="text-text-secondary-light dark:text-slate-300">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => openModal('Bot Discord: Enterprise')}
                                            className="w-full py-4 rounded-xl border border-black/10 dark:border-white/10 text-text-primary-light dark:text-white font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                                        >
                                            Falar com Vendas
                                        </button>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* Community Section - LanHouse */}
                    <section className="py-20 bg-bg-light dark:bg-[#0B0E14] border-t border-black/5 dark:border-white/5">
                        <div className="layout-container px-4 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-16 max-w-[1280px] mx-auto">
                            <div className="max-w-xl text-center lg:text-left">
                                <ScrollReveal direction="left">
                                    <h2 className="text-text-primary-light dark:text-white text-3xl md:text-5xl font-black mb-6 tracking-tight">Participe da Nossa Comunidade</h2>
                                    <p className="text-text-secondary-light dark:text-slate-400 text-lg leading-relaxed mb-8">
                                        Conheça a <span className="text-[#5865F2] font-bold">LanHouse</span>, nosso servidor oficial dedicado a amizades, games e uma experiência única no Discord. Veja nossos bots em ação e interaja com outros membros.
                                    </p>
                                    <button
                                        onClick={handleLanHouseClick}
                                        className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-black py-4 px-10 rounded-2xl transition-all shadow-xl shadow-[#5865F2]/20 flex items-center gap-3 animate-bounce-slow mx-auto lg:mx-0"
                                    >
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 127.14 96.36">
                                            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.48,80.21a105.73,105.73,0,0,0,32.22,16.15c2.45-3.35,4.63-6.9,6.54-10.59a67.17,67.17,0,0,1-10.46-5c.86-.63,1.72-1.3,2.55-2a80.38,80.38,0,0,0,64.75,0c.84.69,1.7,1.36,2.56,2a67.59,67.59,0,0,1-10.46,5c1.9,3.69,4.08,7.24,6.54,10.6a105.79,105.79,0,0,0,32.23-16.15C130.33,52.34,121.72,28.7,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91,65.69,84.69,65.69Z" />
                                        </svg>
                                        Entrar na LanHouse
                                    </button>
                                </ScrollReveal>
                            </div>

                            {/* Discord Community Card Mockup */}
                            <ScrollReveal direction="right" delay={0.2}>
                                <div className="w-full max-w-[320px] bg-[#1E1F22] rounded-2xl overflow-hidden shadow-2xl transition-transform hover:-rotate-2 duration-500">
                                    <div className="h-24 bg-gradient-to-r from-[#FF0080] to-[#7928CA]"></div>
                                    <div className="p-4 pt-0 relative flex flex-col gap-4">
                                        <div className="relative -mt-10 w-20 h-20 rounded-2xl bg-[#000000] p-1 border-4 border-[#1E1F22] overflow-hidden">
                                            <div className="w-full h-full bg-[#5865F2] flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white text-4xl">stadia_controller</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h4 className="text-white font-bold text-lg flex items-center gap-1.5">
                                                LanHouse
                                                <span className="material-symbols-outlined text-pink-500 text-sm">home</span>
                                            </h4>
                                            <div className="flex items-center gap-3 text-xs">
                                                <span className="flex items-center gap-1 text-slate-300">
                                                    <span className="w-2 h-2 rounded-full bg-green-500"></span> 20 online
                                                </span>
                                                <span className="flex items-center gap-1 text-slate-300">
                                                    <span className="w-2 h-2 rounded-full bg-slate-500"></span> 78 membros
                                                </span>
                                            </div>
                                            <p className="text-[10px] text-slate-400 mt-1">Desde jan. de 2025</p>
                                        </div>
                                        <p className="text-xs text-slate-300 leading-tight">
                                            Servidor dedicado a fazer amizades e criar uma comunidade divertida
                                        </p>
                                        <div className="flex flex-wrap gap-2 py-2">
                                            {['Games', 'Amizades', 'Guilds', 'XP', 'Diversão'].map((tag, i) => (
                                                <span key={i} className="px-2 py-1 bg-white/5 rounded-md text-[9px] text-slate-300 border border-white/5">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="bg-[#2B2D31] rounded-lg p-3 text-[10px] text-slate-300 italic text-center">
                                            "A melhor LanHouse virtual que você já viu!"
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>
                </main>

                <Footer />
                <ChatAssistant />
                <LeadModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    projectType={selectedProject}
                />
            </div>
        </div>
    );
};

export default DiscordBotsPage;
