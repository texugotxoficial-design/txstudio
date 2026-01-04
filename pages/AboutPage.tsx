
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

import ScrollReveal from '../components/ScrollReveal';

const AboutPage: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177', '_blank'); // Substitua pelo número real
    };

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen font-display text-text-primary-light dark:text-text-primary-dark antialiased transition-colors duration-300">
            <div className="relative flex min-h-screen w-full flex-col group/design-root">
                <Navbar />

                <main className="flex-grow">
                    {/* Hero Section / About Intro */}
                    <section className="relative py-12 lg:py-24 px-4 overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                    <ScrollReveal direction="right">
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-video lg:aspect-auto lg:h-[500px]">
                                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAActmdp0vpZ2JQrDTcjAzL2ykN3J9eHEcwRwk4BaRTMgp2atsPsaqY1HFEtBh8B5T9A7S9bGCv2R734mL1C4I0BHxzfMfYq-ewOjbZQmSZVOkBqHXje-R4sHgh9GCYM4LDmpYEvPCr3MomES4042WIu16c7ZfUjPtdvDy55_QeN-ssfKcE7wmO0Tt6-CpBq_sLW3G4z5HBfGmGcETvGvgojkjG7aOZ94lxrdSUT1pyJeWe2I7ISr24_OZNsefInF8Xu7W36c-jY7sA')` }}></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#111318] to-transparent opacity-60"></div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                                <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1 text-left">
                                    <ScrollReveal direction="left">
                                        <div className="flex flex-col gap-4 text-left">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/20 w-fit">
                                                <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></span>
                                                <span className="text-primary-blue text-xs font-bold uppercase tracking-wide">Sobre a LocalPro</span>
                                            </div>
                                            <h1 className="text-text-primary-light dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                                                Tecnologia <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-purple-400">Descomplicada</span> para o Seu Negócio
                                            </h1>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed">
                                                Somos especialistas em criar aplicativos diretos e eficientes. Focamos em apresentação, informação e conversão, sem burocracia ou sistemas complexos.
                                            </p>
                                            <p className="text-text-secondary-light/80 dark:text-text-secondary-dark/80 text-base leading-relaxed">
                                                Acreditamos que todo negócio merece estar na palma da mão do cliente, mas sem os custos e a dor de cabeça do desenvolvimento tradicional.
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 pt-4">
                                            <button onClick={handleWhatsAppClick} className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary-blue hover:bg-blue-600 text-white text-base font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-0.5">
                                                Comece seu Projeto
                                            </button>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Discord Bot Section - NEW SERVICE */}
                    <div className="w-full py-16 bg-[#5865F2]/5 border-y border-[#5865F2]/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#5865F2]/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
                        <div className="max-w-7xl mx-auto px-4 relative z-10">
                            <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
                                <div className="flex-1">
                                    <ScrollReveal direction="left">
                                        <div className="flex items-center gap-4 justify-center lg:justify-start mb-6">
                                            <div className="p-3 bg-white/10 lg:bg-[#5865F2] rounded-2xl text-[#5865F2] lg:text-white shadow-xl backdrop-blur-sm">
                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 127.14 96.36">
                                                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.48,80.21a105.73,105.73,0,0,0,32.22,16.15c2.45-3.35,4.63-6.9,6.54-10.59a67.17,67.17,0,0,1-10.46-5c.86-.63,1.72-1.3,2.55-2a80.38,80.38,0,0,0,64.75,0c.84.69,1.7,1.36,2.56,2a67.59,67.59,0,0,1-10.46,5c1.9,3.69,4.08,7.24,6.54,10.6a105.79,105.79,0,0,0,32.23-16.15C130.33,52.34,121.72,28.7,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91,65.69,84.69,65.69Z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-[#5865F2] font-black text-2xl uppercase tracking-tighter">Expandindo Horizontes</h3>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black text-text-primary-light dark:text-white leading-tight mb-6">
                                            Expertise também em <span className="text-[#5865F2]">Bots para Discord</span>
                                        </h2>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                                            Não apenas apps. Desenvolvemos ecossistemas completos para sua comunidade prosperar com automação inteligente e integrações poderosas.
                                        </p>
                                        <Link to="/discord-bots" className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl shadow-[#5865F2]/25 hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto lg:mx-0">
                                            Ver Soluções para Discord
                                        </Link>
                                    </ScrollReveal>
                                </div>
                                <div className="flex-1 flex justify-center lg:justify-end">
                                    <ScrollReveal direction="right">
                                        <div className="relative w-full max-w-[320px] aspect-[4/5] bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden group">
                                            <div className="absolute inset-x-0 top-0 h-8 flex items-center justify-center">
                                                <div className="w-16 h-4 bg-slate-800 rounded-b-xl"></div>
                                            </div>
                                            <div className="h-full w-full p-6 pt-12 flex flex-col gap-4">
                                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                                                    <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center text-[10px] text-white font-bold">LP</div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] font-bold text-white">LocalPro BOT <span className="bg-[#5865F2] px-1 rounded-[2px] text-[8px]">BOT</span></span>
                                                        <span className="text-[9px] text-slate-400">Comando executado com sucesso!</span>
                                                    </div>
                                                </div>
                                                <div className="w-full h-32 bg-gradient-to-br from-[#5865F2]/20 to-purple-500/10 rounded-xl border border-[#5865F2]/20 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-[60px] text-[#5865F2] group-hover:rotate-12 transition-transform">auto_awesome</span>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <section className="py-16 bg-black/5 dark:bg-surface-dark/30 border-y border-black/5 dark:border-white/5">
                        <div className="max-w-7xl mx-auto px-4">
                            <ScrollReveal>
                                <div className="mb-12 text-center max-w-3xl mx-auto">
                                    <h2 className="text-text-primary-light dark:text-white text-3xl font-bold mb-4">Por que escolher a LocalPro?</h2>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Focamos no que realmente importa: resultados rápidos e comunicação direta.</p>
                                </div>
                            </ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <ScrollReveal delay={0.1}>
                                    <div className="group p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-black/5 dark:border-white/5 hover:border-primary-blue/50 transition-all hover:shadow-xl dark:hover:shadow-primary-blue/5 shadow-sm h-full">
                                        <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-green-500" style={{ fontSize: '28px' }}>chat</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-primary-light dark:text-white mb-2">Foco em Conversão</h3>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">Aplicativos otimizados para levar o cliente ao seu WhatsApp com um clique.</p>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal delay={0.2}>
                                    <div className="group p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-black/5 dark:border-white/5 hover:border-primary-blue/50 transition-all hover:shadow-xl dark:hover:shadow-primary-blue/5 shadow-sm h-full">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-primary-blue" style={{ fontSize: '28px' }}>bolt</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-primary-light dark:text-white mb-2">Sem Burocracia</h3>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">Esqueça prazos intermináveis. Nosso processo é ágil para colocar seu negócio no ar.</p>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal delay={0.3}>
                                    <div className="group p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-black/5 dark:border-white/5 hover:border-primary-blue/50 transition-all hover:shadow-xl dark:hover:shadow-primary-blue/5 shadow-sm h-full">
                                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-purple-500" style={{ fontSize: '28px' }}>smartphone</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-primary-light dark:text-white mb-2">Design Eficiente</h3>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">Interfaces limpas e intuitivas que valorizam sua marca e facilitam a navegação.</p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-20 px-4">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto bg-[#020617] rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                                <div className="absolute top-0 left-0 w-full h-full bg-primary-blue/5"></div>
                                <div className="relative z-10">
                                    <h2 className="text-white text-3xl md:text-4xl font-black mb-6">Pronto para modernizar seu negócio?</h2>
                                    <p className="text-slate-100 text-lg mb-8 max-w-2xl mx-auto font-light">
                                        Tenha seu app profissional rodando em poucos dias. Atendimento personalizado e foco total em resultados.
                                    </p>
                                    <button onClick={handleWhatsAppClick} className="bg-primary-blue text-white hover:bg-blue-600 active:scale-95 text-lg font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 inline-block">
                                        Falar com Especialista
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>
                </main>

                <Footer />
                <ChatAssistant />
            </div>
        </div>
    );
};

export default AboutPage;
