
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

import ScrollReveal from '../components/ScrollReveal';

const DemoPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'institucional' | 'cardapio' | 'catalogo'>('institucional');

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177', '_blank');
    };

    const renderMobileContent = () => {
        switch (activeTab) {
            case 'institucional':
                return (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="w-full h-32 bg-slate-800 rounded-xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 flex flex-col">
                                <span className="text-white font-bold text-xs">Sua Empresa</span>
                                <span className="text-white/70 text-[10px]">Qualidade e Confiança</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center gap-1">
                                <span className="material-symbols-outlined text-primary-blue text-sm">history</span>
                                <span className="text-[10px] text-white">Nossa História</span>
                            </div>
                            <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center gap-1">
                                <span className="material-symbols-outlined text-primary-blue text-sm">location_on</span>
                                <span className="text-[10px] text-white">Localização</span>
                            </div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                            <h4 className="text-white text-xs font-bold mb-2">Sobre Nós</h4>
                            <p className="text-slate-400 text-[10px] leading-relaxed">Referência no mercado desde 2010, entregando sempre o melhor para nossos clientes.</p>
                        </div>
                    </div>
                );
            case 'cardapio':
                return (
                    <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between px-1">
                            <span className="text-white font-bold text-xs">Cardápio</span>
                            <span className="material-symbols-outlined text-primary-blue text-lg">search</span>
                        </div>
                        {[
                            { name: 'Hambúrguer Artesanal', price: 'R$ 35,90', icon: 'lunch_dining' },
                            { name: 'Pizza Margherita', price: 'R$ 42,00', icon: 'local_pizza' },
                            { name: 'Milkshake Chocolate', price: 'R$ 18,50', icon: 'icecream' }
                        ].map((item, idx) => (
                            <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary-blue/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary-blue text-xl">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white text-[11px] font-bold">{item.name}</span>
                                        <span className="text-primary-green text-[10px] font-bold">{item.price}</span>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-white/30 text-lg">add_circle</span>
                            </div>
                        ))}
                        <button className="w-full py-3 mt-2 bg-primary-green text-white text-[11px] font-bold rounded-xl shadow-lg shadow-green-500/20">Finalizar Pedido</button>
                    </div>
                );
            case 'catalogo':
                return (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex flex-col gap-2 p-2 bg-white/5 rounded-xl border border-white/10">
                                    <div className="aspect-square bg-slate-800 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-600">image</span>
                                    </div>
                                    <div className="flex flex-col px-1">
                                        <span className="text-white text-[10px] font-bold">Produto {i}</span>
                                        <span className="text-slate-400 text-[9px]">A partir de R$ 99</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen font-display text-text-primary-light dark:text-text-primary-dark antialiased transition-colors duration-300">
            <div className="relative flex min-h-screen w-full flex-col group/design-root">
                <Navbar />

                <main className="flex-grow">
                    <div className="layout-container px-4 md:px-10 flex flex-col items-center py-16">
                        <ScrollReveal>
                            <div className="max-w-[960px] w-full text-center mb-16">
                                <span className="text-primary-blue font-bold tracking-widest uppercase text-sm mb-4 inline-block">Mão na Massa</span>
                                <h2 className="text-text-primary-light dark:text-white text-4xl md:text-5xl font-black mb-6 tracking-tight">Experimente a Experiência</h2>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg max-w-2xl mx-auto">
                                    Clique nos botões abaixo para ver como cada tipo de aplicativo se comporta em um dispositivo móvel real.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-[1100px]">
                            {/* Mobile Device Mockup */}
                            <ScrollReveal direction="left">
                                <div className="relative w-[300px] h-[600px] bg-[#020617] rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-4 ring-slate-800/50">
                                    {/* Speaker/Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>

                                    {/* Screen Content */}
                                    <div className="w-full h-full p-6 pt-12 overflow-y-auto no-scrollbar bg-[#0B0E14]">
                                        {renderMobileContent()}
                                    </div>

                                    {/* Home Bar */}
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full"></div>
                                </div>
                            </ScrollReveal>

                            {/* Controls & Features */}
                            <div className="flex-1 flex flex-col gap-8 w-full">
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { id: 'institucional', name: 'Institucional', desc: 'Apresentação profissional do seu negócio.', icon: 'business' },
                                        { id: 'cardapio', name: 'Cardápio Digital', desc: 'Pedidos direto no seu WhatsApp.', icon: 'restaurant_menu' },
                                        { id: 'catalogo', name: 'Catálogo Produtos', desc: 'Sua loja disponível 24 horas.', icon: 'storefront' }
                                    ].map((tab, index) => (
                                        <ScrollReveal key={tab.id} delay={index * 0.1} direction="right">
                                            <button
                                                onClick={() => setActiveTab(tab.id as any)}
                                                className={`p-6 rounded-2xl text-left border-2 transition-all flex items-center gap-4 group w-full ${activeTab === tab.id
                                                    ? 'bg-primary-blue/5 border-primary-blue shadow-lg shadow-primary-blue/10 scale-[1.02]'
                                                    : 'bg-surface-light dark:bg-surface-dark border-transparent hover:border-primary-blue/30'
                                                    }`}
                                            >
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeTab === tab.id ? 'bg-primary-blue text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 group-hover:bg-primary-blue/20 group-hover:text-primary-blue'
                                                    }`}>
                                                    <span className="material-symbols-outlined">{tab.icon}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className={`font-bold ${activeTab === tab.id ? 'text-primary-blue' : 'text-text-primary-light dark:text-white'}`}>{tab.name}</span>
                                                    <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{tab.desc}</span>
                                                </div>
                                            </button>
                                        </ScrollReveal>
                                    ))}
                                </div>

                                <ScrollReveal delay={0.4} direction="up">
                                    <div className="p-8 rounded-3xl bg-[#020617] border border-white/5 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/10 rounded-full blur-3xl"></div>
                                        <h3 className="text-white text-xl font-bold mb-4 relative z-10">Gostou do que viu?</h3>
                                        <p className="text-slate-400 mb-6 text-sm leading-relaxed relative z-10">Seu negócio também pode ter uma presença mobile de alto nível. Entre em contato para conversarmos sobre seu projeto.</p>
                                        <button onClick={handleWhatsAppClick} className="w-full py-4 bg-primary-blue text-white font-bold rounded-xl shadow-lg shadow-primary-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                            Quero um igual para mim
                                        </button>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>

                    {/* Discord Section also on Demo Page */}
                    <div className="w-full py-16 bg-[#5865F2]/5 border-y border-[#5865F2]/10 mt-16">
                        <div className="layout-container px-4 md:px-10 flex justify-center">
                            <ScrollReveal>
                                <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
                                    <div className="p-2 bg-[#5865F2] rounded-lg text-white mb-2">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 127.14 96.36">
                                            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.48,80.21a105.73,105.73,0,0,0,32.22,16.15c2.45-3.35,4.63-6.9,6.54-10.59a67.17,67.17,0,0,1-10.46-5c.86-.63,1.72-1.3,2.55-2a80.38,80.38,0,0,0,64.75,0c.84.69,1.7,1.36,2.56,2a67.59,67.59,0,0,1-10.46,5c1.9,3.69,4.08,7.24,6.54,10.6a105.79,105.79,0,0,0,32.23-16.15C130.33,52.34,121.72,28.7,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91,65.69,84.69,65.69Z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-[#5865F2] font-black text-2xl">Também criamos do seu jeito no Discord</h3>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark font-medium">Automações, comandos exclusivos e integração total para sua comunidade crescer.</p>
                                    <Link to="/discord-bots" className="mt-4 text-[#5865F2] font-bold hover:underline flex items-center gap-1">
                                        Ver soluções para Discord <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </main>

                <Footer />
                <ChatAssistant />
            </div>
        </div>
    );
};

export default DemoPage;
