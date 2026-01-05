
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

const BeautyExamplePage: React.FC = () => {
    return (
        <div className="bg-[#020617] min-h-screen text-white font-display">
            <Navbar />
            <main className="pt-20 pb-20">
                <div className="layout-container px-4 text-center mb-16">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 text-pink-500">Elegância & Estilo</h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Transforme seu salão em uma vitrine de alto luxo com um app focado na beleza dos seus resultados.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="flex justify-center mb-24 relative px-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-pink-500/20 rounded-full blur-[120px] pointer-events-none"></div>
                    <ScrollReveal delay={0.2}>
                        <div className="w-full max-w-[320px] h-[650px] bg-white rounded-[3rem] border-[12px] border-slate-900 shadow-[0_0_50px_rgba(255,182,193,0.3)] relative overflow-hidden flex flex-col">
                            {/* Mobile Top Bar */}
                            <div className="absolute top-0 w-full h-7 bg-slate-900 flex justify-center items-center z-20">
                                <div className="w-16 h-4 bg-black rounded-full"></div>
                            </div>

                            <div className="flex-1 overflow-y-auto pt-10 px-0 bg-[#FFF9FB]">
                                <header className="p-8 text-center bg-white border-b border-pink-50">
                                    <div className="w-20 h-20 border-2 border-pink-200 rounded-full mx-auto mb-4 p-1">
                                        <div className="w-full h-full bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-2xl font-black">LV</div>
                                    </div>
                                    <h2 className="font-black text-2xl tracking-tighter text-slate-900">Lumina Visual</h2>
                                    <p className="text-[10px] text-pink-500 font-bold uppercase tracking-[0.2em] mt-2">Estética Avançada</p>
                                </header>

                                <div className="grid grid-cols-3 gap-0.5 mt-0.5">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <div key={i} className="aspect-square bg-slate-200 relative group overflow-hidden">
                                            <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-6 space-y-6">
                                    <section>
                                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Procedimentos</h3>
                                        <div className="space-y-4">
                                            {[
                                                { name: "Limpeza de Pele Gold", time: "60 min", price: "R$ 180" },
                                                { name: "Peeling de Diamante", time: "45 min", price: "R$ 220" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-pink-50">
                                                    <div>
                                                        <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                                                        <span className="text-[8px] text-slate-400">{item.time}</span>
                                                    </div>
                                                    <span className="text-sm font-black text-pink-500">{item.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <button className="w-full bg-slate-900 text-white font-black py-4 rounded-xl text-[10px] tracking-widest uppercase shadow-lg shadow-pink-200">
                                        AGENDAR CONSULTO
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Features Highlight */}
                <div className="layout-container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: "photo_camera", title: "Portfólio Visual", desc: "Destaque seus melhores trabalhos com galerias otimizadas." },
                            { icon: "event_available", title: "Agendamento Direto", desc: "Reduza o tempo de espera com botões de contato rápido." },
                            { icon: "auto_awesome", title: "Marca Premium", desc: "Tenha um design que reflete a sofisticação do seu trabalho." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 group">
                                <span className="material-symbols-outlined text-5xl text-pink-500 mb-4 transition-transform group-hover:scale-110">{item.icon}</span>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <Link to="/negocios/estetica" className="inline-flex items-center gap-2 bg-pink-500 text-white font-black py-4 px-10 rounded-xl hover:scale-105 transition-all shadow-xl shadow-pink-500/20">
                        Começar minha Vitrine
                        <span className="material-symbols-outlined">sparkles</span>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BeautyExamplePage;
