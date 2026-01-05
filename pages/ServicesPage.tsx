
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import LeadModal from '../components/LeadModal';

import ScrollReveal from '../components/ScrollReveal';

const ServicesPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const openModal = (project: string) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen font-display text-text-primary-light dark:text-text-primary-dark antialiased transition-colors duration-300">
            <div className="relative flex min-h-screen w-full flex-col group/design-root">
                <Navbar />

                <main className="flex-grow">
                    {/* Background Gradient Effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

                    {/* Header Section */}
                    <div className="px-4 md:px-10 flex flex-col items-center pt-16 pb-8 bg-[#020617] relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none z-0">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-[100px]"></div>
                        </div>
                        <ScrollReveal>
                            <div className="flex flex-col max-w-[960px] w-full items-center text-center relative z-10">
                                <span className="text-primary-blue font-bold tracking-wider uppercase text-sm mb-3">Soluções Mobile</span>
                                <h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.02em] mb-6">
                                    Tipos de Aplicativos Desenvolvidos
                                </h2>
                                <div className="relative group mt-2 max-w-2xl">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-blue/30 to-purple-500/30 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                                    <div className="relative flex items-start gap-4 p-5 bg-surface-dark/50 backdrop-blur-md rounded-xl border border-white/10">
                                        <span className="material-symbols-outlined text-primary-blue shrink-0 mt-0.5">info</span>
                                        <div className="text-left">
                                            <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
                                                <span className="text-primary-blue font-bold">Nota Importante:</span> Todos os apps são sem login, sem cadastro de usuários e sem sistemas internos. Foco total em <span className="text-white font-semibold">divulgação simples</span> e <span className="text-white font-semibold">contato direto</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Grid Content Section */}
                    <div className="px-4 md:px-10 flex flex-1 justify-center pb-20">
                        <div className="layout-content-container flex flex-col max-w-[1200px] w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8">
                                {/* Card 1: Informativos */}
                                <ScrollReveal delay={0.1}>
                                    <div className="flex flex-col p-6 lg:p-8 rounded-2xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark hover:border-primary-blue/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-primary-blue/5 h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>info</span>
                                            </div>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-text-secondary-light dark:text-text-secondary-dark border border-black/5 dark:border-white/10">Institucional</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-text-primary-light dark:text-white mb-3">Informativos e Institucionais</h3>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-6 leading-relaxed">Ideal para apresentar sua empresa ao mundo de forma profissional, consolidando sua marca.</p>
                                        <div className="border-t border-black/5 dark:border-white/10 my-4"></div>
                                        <ul className="space-y-4 mb-8 flex-1">
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>História e Valores da Empresa</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Localização GPS Integrada</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Links diretos para Redes Sociais</span>
                                            </li>
                                        </ul>
                                        <div className="mt-auto pt-6 flex flex-col gap-3">
                                            <Link
                                                to="/exemplos/institucional"
                                                className="w-full py-3 px-4 rounded-xl border border-primary-blue/30 text-primary-split-blue font-bold text-sm text-center hover:bg-primary-blue/5 transition-all flex items-center justify-center gap-2 group/btn"
                                            >
                                                Ver Exemplo
                                                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                            </Link>
                                            <button
                                                onClick={() => openModal('App Informativo e Institucional')}
                                                className="w-full py-3 px-4 rounded-xl bg-primary-blue text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-primary-blue/20"
                                            >
                                                Solicitar Agora
                                            </button>
                                        </div>
                                    </div>
                                </ScrollReveal>
                                {/* Card 2: Restaurantes */}
                                <ScrollReveal delay={0.2}>
                                    <div className="flex flex-col p-6 lg:p-8 rounded-2xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark hover:border-primary-blue/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-primary-blue/5 h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>restaurant_menu</span>
                                            </div>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-text-secondary-light dark:text-text-secondary-dark border border-black/5 dark:border-white/10">Alimentação</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-text-primary-light dark:text-white mb-3">Restaurantes e Delivery</h3>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-6 leading-relaxed">Coloque seu cardápio digital na palma da mão do seu cliente e receba pedidos no Zap.</p>
                                        <div className="border-t border-black/5 dark:border-white/10 my-4"></div>
                                        <ul className="space-y-4 mb-8 flex-1">
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Cardápio Digital Completo</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Botão "Pedir no WhatsApp"</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Galeria de Fotos dos Pratos</span>
                                            </li>
                                        </ul>
                                        <div className="mt-auto pt-6 flex flex-col gap-3">
                                            <Link
                                                to="/exemplos/restaurante"
                                                className="w-full py-3 px-4 rounded-xl border border-primary-blue/30 text-primary-split-blue font-bold text-sm text-center hover:bg-primary-blue/5 transition-all flex items-center justify-center gap-2 group/btn"
                                            >
                                                Ver Exemplo
                                                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                            </Link>
                                            <button
                                                onClick={() => openModal('App para Restaurante e Delivery')}
                                                className="w-full py-3 px-4 rounded-xl bg-primary-blue text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-primary-blue/20"
                                            >
                                                Solicitar Agora
                                            </button>
                                        </div>
                                    </div>
                                </ScrollReveal>
                                {/* Card 3: Estética */}
                                <ScrollReveal delay={0.1}>
                                    <div className="flex flex-col p-6 lg:p-8 rounded-2xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark hover:border-primary-blue/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-primary-blue/5 h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>spa</span>
                                            </div>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-text-secondary-light dark:text-text-secondary-dark border border-black/5 dark:border-white/10">Beleza & Saúde</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-text-primary-light dark:text-white mb-3">Estética e Serviços</h3>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-6 leading-relaxed">Mostre seu portfólio, liste seus preços e facilite o agendamento de horários.</p>
                                        <div className="border-t border-black/5 dark:border-white/10 my-4"></div>
                                        <ul className="space-y-4 mb-8 flex-1">
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Lista de Serviços e Preços</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Galeria de Fotos (Antes/Depois)</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Botão de Agendamento Rápido</span>
                                            </li>
                                        </ul>
                                        <div className="mt-auto pt-6 flex flex-col gap-3">
                                            <Link
                                                to="/exemplos/estetica"
                                                className="w-full py-3 px-4 rounded-xl border border-primary-blue/30 text-primary-split-blue font-bold text-sm text-center hover:bg-primary-blue/5 transition-all flex items-center justify-center gap-2 group/btn"
                                            >
                                                Ver Exemplo
                                                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                            </Link>
                                            <button
                                                onClick={() => openModal('App para Estética e Serviços')}
                                                className="w-full py-3 px-4 rounded-xl bg-primary-blue text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-primary-blue/20"
                                            >
                                                Solicitar Agora
                                            </button>
                                        </div>
                                    </div>
                                </ScrollReveal>
                                {/* Card 4: Empresas em Geral */}
                                <ScrollReveal delay={0.2}>
                                    <div className="flex flex-col p-6 lg:p-8 rounded-2xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark hover:border-primary-blue/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-primary-blue/5 h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>storefront</span>
                                            </div>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-text-secondary-light dark:text-text-secondary-dark border border-black/5 dark:border-white/10">Varejo & Serviços</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-text-primary-light dark:text-white mb-3">Empresas em Geral</h3>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-6 leading-relaxed">Divulgue produtos, promoções e facilite o atendimento ao cliente via chat.</p>
                                        <div className="border-t border-black/5 dark:border-white/10 my-4"></div>
                                        <ul className="space-y-4 mb-8 flex-1">
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Catálogo de Produtos</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Área de Promoções e Ofertas</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-secondary-light dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary-green text-[20px] shrink-0">check_circle</span>
                                                <span>Link direto para WhatsApp Comercial</span>
                                            </li>
                                        </ul>
                                        <div className="mt-auto pt-6 flex flex-col gap-3">
                                            <Link
                                                to="/exemplos/catalogo"
                                                className="w-full py-3 px-4 rounded-xl border border-primary-blue/30 text-primary-split-blue font-bold text-sm text-center hover:bg-primary-blue/5 transition-all flex items-center justify-center gap-2 group/btn"
                                            >
                                                Ver Exemplo
                                                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                            </Link>
                                            <button
                                                onClick={() => openModal('App Varejo e Empresas')}
                                                className="w-full py-3 px-4 rounded-xl bg-primary-blue text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-primary-blue/20"
                                            >
                                                Solicitar Agora
                                            </button>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>

                    {/* Discord Bot Promotion - NEW SERVICE */}
                    <div className="w-full py-16 bg-[#5865F2]/5 border-y border-[#5865F2]/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5865F2]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="layout-container px-4 md:px-10 flex justify-center relative z-10">
                            <div className="flex flex-col lg:flex-row items-center gap-10 max-w-[1200px] w-full text-center lg:text-left">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
                                        <div className="p-2 bg-[#5865F2] rounded-lg text-white">
                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 127.14 96.36">
                                                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.48,80.21a105.73,105.73,0,0,0,32.22,16.15c2.45-3.35,4.63-6.9,6.54-10.59a67.17,67.17,0,0,1-10.46-5c.86-.63,1.72-1.3,2.55-2a80.38,80.38,0,0,0,64.75,0c.84.69,1.7,1.36,2.56,2a67.59,67.59,0,0,1-10.46,5c1.9,3.69,4.08,7.24,6.54,10.6a105.79,105.79,0,0,0,32.23-16.15C130.33,52.34,121.72,28.7,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91,65.69,84.69,65.69Z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-[#5865F2] font-black text-xl uppercase tracking-tighter">Discord Automação</h3>
                                    </div>
                                    <h2 className="text-text-primary-light dark:text-white text-3xl md:text-4xl font-black mb-4 leading-tight">
                                        Criamos Bots Personalizados para sua Comunidade
                                    </h2>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                                        Moderação inteligente, sistemas de economia, notificações em tempo real e integração com seu site ou banco de dados.
                                    </p>
                                    <Link
                                        to="/discord-bots"
                                        className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl shadow-[#5865F2]/20 hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto lg:mx-0"
                                    >
                                        Conhecer Planos de Bots
                                    </Link>
                                </div>
                                <div className="hidden lg:flex w-64 h-64 bg-slate-900 rounded-[2rem] border-4 border-[#5865F2]/30 items-center justify-center relative shadow-2xl">
                                    <span className="material-symbols-outlined text-[120px] text-[#5865F2] animate-bounce duration-[2000ms]">smart_toy</span>
                                    <div className="absolute -top-4 -right-4 bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded flex items-center gap-1 shadow-lg">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                                        ONLINE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simple CTA Footer Area */}
                    <div className="w-full py-20 bg-[#020617]">
                        <div className="layout-container flex justify-center px-4 md:px-10">
                            <div className="flex flex-col items-center text-center gap-6">
                                <h3 className="text-white text-3xl font-black">Pronto para digitalizar seu negócio?</h3>
                                <p className="text-slate-300 max-w-md text-lg">Escolha o modelo ideal para você e entre em contato para começarmos o desenvolvimento.</p>
                                <button onClick={() => openModal('Consulta Geral')} className="mt-2 bg-primary-blue text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-primary-blue/25 hover:scale-105 active:scale-95">
                                    Falar com Consultor
                                </button>
                            </div>
                        </div>
                    </div>
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

export default ServicesPage;
