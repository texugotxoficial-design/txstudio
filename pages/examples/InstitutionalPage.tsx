
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';

const InstitutionalExamplePage: React.FC = () => {
    return (
        <div className="bg-[#0f172a] min-h-screen text-white font-display selection:bg-primary-blue/30">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* Hero Section - Desktop Site Feel */}
                <div className="layout-container px-4 mb-24">
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10"></div>
                        <img
                            src="/brain/06d3e75a-25c1-474c-8acc-15f3c6dec5d8/corporate_institutional_concept_1767621133583.png"
                            alt="Corporate Institutional Concept"
                            className="w-full h-[500px] object-cover object-center opacity-60"
                        />
                        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16 max-w-3xl">
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/20 border border-primary-blue/30 text-primary-split-blue text-xs font-bold uppercase tracking-widest mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
                                    </span>
                                    Site Institucional Premium
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                                    Corp Solutions: <br />
                                    <span className="text-primary-blue">Excelência</span> em Cada Detalhe.
                                </h1>
                                <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                                    Uma presença digital robusta que transmite confiança e autoridade para sua empresa. Design focado em resultados e credibilidade.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-primary-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary-blue/25">
                                        Nossos Serviços
                                    </button>
                                    <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all border border-white/10 backdrop-blur-md">
                                        Sobre a Empresa
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Content Matrix - Stats & Values */}
                <div className="layout-container px-4 mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal direction="left">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-black mb-4">Construindo o Futuro, <br />Hoje.</h2>
                                    <p className="text-slate-400 leading-relaxed">
                                        Nossa abordagem institucional combina design moderno com funcionalidades essenciais para que sua empresa se destaque no mercado digital.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { count: '12+', label: 'Anos de Mercado', icon: 'history' },
                                        { count: '500+', label: 'Projetos Entregues', icon: 'done_all' },
                                        { count: '98%', label: 'Satisfação', icon: 'sentiment_very_satisfied' },
                                        { count: '24/7', label: 'Suporte Ativo', icon: 'support_agent' }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-blue/30 transition-all group">
                                            <span className="material-symbols-outlined text-primary-split-blue mb-4 group-hover:scale-110 transition-transform">
                                                {stat.icon}
                                            </span>
                                            <div className="text-2xl font-black text-white">{stat.count}</div>
                                            <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Mobile App Frame */}
                        <ScrollReveal direction="right">
                            <div className="relative flex justify-center">
                                {/* Decorative Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-blue/20 rounded-full blur-[100px] pointer-events-none"></div>

                                {/* Device Mockup */}
                                <div className="relative w-[300px] h-[600px] bg-[#020617] rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-4 ring-slate-800/50 z-10">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-40"></div>

                                    <div className="w-full h-full bg-slate-950 overflow-y-auto no-scrollbar pt-10">
                                        {/* App Header */}
                                        <div className="px-6 py-4 flex items-center justify-between border-b border-white/5 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30">
                                            <div className="flex items-center gap-2">
                                                <div className="size-6 bg-primary-blue rounded flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-[14px]">corporate_fare</span>
                                                </div>
                                                <span className="text-[10px] font-black tracking-tight">CORP SOLUTIONS</span>
                                            </div>
                                            <span className="material-symbols-outlined text-slate-400 text-lg">menu</span>
                                        </div>

                                        {/* App Content */}
                                        <div className="p-5 space-y-6 pb-20">
                                            <div className="relative h-32 rounded-2xl overflow-hidden border border-white/10">
                                                <img src="/brain/06d3e75a-25c1-474c-8acc-15f3c6dec5d8/corporate_institutional_concept_1767621133583.png" className="w-full h-full object-cover opacity-50" />
                                                <div className="absolute inset-x-4 bottom-4">
                                                    <h3 className="text-xs font-black">Nossa Identidade</h3>
                                                    <p className="text-[8px] text-slate-400">Transformando ideias em realidade.</p>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-500">Serviços Rápidos</h4>
                                                <div className="grid grid-cols-3 gap-2">
                                                    {['Strategy', 'Marketing', 'Consulting'].map((s, i) => (
                                                        <div key={i} className="flex flex-col items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                                                            <div className="size-8 rounded-full bg-slate-800 flex items-center justify-center">
                                                                <span className="material-symbols-outlined text-[14px] text-primary-blue">bolt</span>
                                                            </div>
                                                            <span className="text-[7px] font-bold">{s}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-white/5 rounded-2xl border border-white/10 p-4 space-y-3">
                                                <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-500">Nossa Sede</h4>
                                                <div className="h-20 bg-slate-900 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden grayscale opacity-50">
                                                    <span className="material-symbols-outlined text-slate-700">map</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <span className="material-symbols-outlined text-primary-blue text-sm">location_on</span>
                                                    <div className="text-[8px] text-slate-400">Av. Paulista, 1000 - Bela Vista, São Paulo/SP</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* App Navigation */}
                                        <div className="absolute bottom-0 inset-x-0 h-16 bg-slate-950/90 backdrop-blur-md border-t border-white/10 flex justify-around items-center px-4 z-30">
                                            {['home', 'business', 'call', 'person'].map((icon, i) => (
                                                <span key={i} className={`material-symbols-outlined text-lg ${i === 0 ? 'text-primary-blue' : 'text-slate-500'}`}>{icon}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Final Call to Action */}
                <div className="layout-container px-4 text-center">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto p-12 rounded-[2.5rem] bg-slate-900 border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                            <h2 className="text-3xl font-black mb-6">Pronto para dar o próximo passo?</h2>
                            <p className="text-slate-400 mb-10 leading-relaxed">
                                Seu negócio merece uma vitrine à altura dos seus valores. Combinamos design institucional clássico com as melhores tendências de UX mobile.
                            </p>
                            <Link to="/negocios/institucional" className="inline-flex items-center gap-2 bg-primary-blue hover:bg-blue-600 text-white font-black py-4 px-10 rounded-xl transition-all shadow-xl shadow-primary-blue/25 hover:scale-105 active:scale-95">
                                Ver Planos Institucionais
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </main>

            <Footer />
            <ChatAssistant />
        </div>
    );
};

export default InstitutionalExamplePage;
