
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';

const InstitutionalExamplePage: React.FC = () => {
    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
            <Navbar />
            <main className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <ScrollReveal>
                        <h1 className="text-4xl font-black mb-6">Exemplo: Aplicativo <span className="text-primary-blue">Institucional</span></h1>
                        <p className="text-lg text-slate-500">A vitrine perfeita para a história e valores da sua marca.</p>
                    </ScrollReveal>
                </div>
                <div className="flex justify-center mb-24 relative px-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
                    <ScrollReveal delay={0.2}>
                        <div className="w-full max-w-[320px] h-[650px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
                            {/* Mobile Top Bar */}
                            <div className="absolute top-0 w-full h-7 bg-slate-800 flex justify-center items-center z-20">
                                <div className="w-16 h-4 bg-black rounded-full"></div>
                            </div>

                            <div className="flex-1 bg-white text-slate-900 overflow-y-auto pt-10">
                                <header className="p-6 bg-slate-900 text-white">
                                    <div className="flex items-center gap-2 mb-8">
                                        <div className="size-8 bg-primary-blue rounded flex items-center justify-center">
                                            <span className="material-symbols-outlined text-lg">corporate_fare</span>
                                        </div>
                                        <span className="font-black tracking-tighter">CORP SOLUTIONS</span>
                                    </div>
                                    <h2 className="text-2xl font-black leading-tight mb-2">Transformando negócios com tecnologia</h2>
                                    <p className="text-[10px] text-slate-400">Eficiência e inovação para sua empresa escalar.</p>
                                </header>

                                <div className="p-6 space-y-8">
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { label: "Projetos", count: "150+" },
                                            { label: "Clientes", count: "80+" }
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                                <span className="block text-primary-blue font-black text-xl">{stat.count}</span>
                                                <span className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">{stat.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <section className="space-y-4">
                                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nossa Localização</h3>
                                        <div className="aspect-video bg-slate-100 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden grayscale">
                                            <span className="material-symbols-outlined text-slate-300 text-4xl">map</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 text-center">Av. Industrial, 1000 - Centro</p>
                                    </section>

                                    <button className="w-full bg-primary-blue text-white font-black py-4 rounded-xl text-[10px] tracking-widest uppercase">
                                        ENTRAR EM CONTATO
                                    </button>
                                </div>
                            </div>
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
