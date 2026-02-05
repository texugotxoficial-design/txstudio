import React from 'react';
import FloatingNavbar from '../components/FloatingNavbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
    return (
        <div className="bg-dark-bg min-h-screen text-white font-sans selection:bg-primary/30 selection:text-white overflow-hidden mesh-grid">
            <FloatingNavbar />

            <main>
                {/* Hero Section Tática - Refined Version */}
                <section className="relative min-h-[90vh] flex items-center px-6 lg:px-24 overflow-hidden pt-20">

                    {/* Linhas Diagonais de Fundo */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <div className="absolute top-1/4 left-[-10%] w-[120%] h-[1px] bg-primary/40 -rotate-[35deg] animate-pulse"></div>
                        <div className="absolute top-1/2 left-[-10%] w-[120%] h-[1px] bg-secondary/40 -rotate-[35deg]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-[1px] bg-primary shadow-[0_0_10px_rgba(223,255,0,0.8)]"></div>
                                <span className="text-primary font-black uppercase tracking-[0.5em] text-[9px] text-glow">Strategic Digital Hub</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black mb-8 leading-[1.2] uppercase tracking-tighter">
                                TX STUDIO <br />
                                <span className="text-white/20 italic">PRECISÃO</span> <br />
                                <span className="text-primary text-glow">ESTRATÉGICA</span>
                            </h1>

                            <p className="text-[10px] md:text-[11px] text-white/50 max-w-xs mb-12 leading-loose uppercase tracking-[0.25em] font-bold">
                                Engenharia de <span className="text-white">Bots Discord</span> e <span className="text-white">Arquitetura Web</span> de alta performance.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Button to="/web-services" size="md" variant="primary">
                                    INICIAR FASE
                                </Button>
                                <Button to="/planos-bots" size="md" variant="tactical">
                                    DETALHES BOTS
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="hidden lg:block relative"
                        >
                            {/* Visual Geométrico Refinado */}
                            <div className="relative w-full aspect-square flex items-center justify-center scale-90">
                                <div className="absolute w-[400px] h-[1px] bg-primary -rotate-[35deg] left-0 shadow-[0_0_15px_rgba(223,255,0,0.6)]"></div>
                                <div className="absolute w-[300px] h-[1px] bg-secondary -rotate-[35deg] right-0 translate-y-20 shadow-[0_0_15px_rgba(255,69,0,0.4)]"></div>

                                <div className="size-64 border border-white/5 rotate-45 relative overflow-hidden group bg-black/40 backdrop-blur-sm shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10"></div>
                                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-40 rotate-[-45deg] scale-125" alt="Tactical Tech" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Status Operacional - PT-BR */}
                <section className="bg-dark-gray/50 backdrop-blur-md py-12 border-y border-white/5 relative z-10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { label: 'Incursões Concluídas', value: '150+' },
                                { label: 'Protocolos Ativos', value: '45k+' },
                                { label: 'Estabilidade de Rede', value: '99.9%' },
                                { label: 'Latência de Resposta', value: '14ms' }
                            ].map((stat, i) => (
                                <div key={i} className="group border-l border-white/5 pl-8">
                                    <div className="text-[8px] font-black text-primary uppercase tracking-[0.4em] mb-2">{stat.label}</div>
                                    <div className="text-xl font-black text-white/90">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Especialidades do Studio */}
                <section className="py-24 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div whileHover={{ y: -5 }} className="tactical-card p-12 group">
                            <div className="flex items-center gap-4 mb-8">
                                <i className="fab fa-discord text-primary text-xl"></i>
                                <span className="text-[8px] font-black text-primary/40 uppercase tracking-[0.6em]">Node.01</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-6 group-hover:text-primary transition-colors">Sistemas Discord</h3>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed mb-10">
                                Bots de próxima geração com <span className="text-white">Automação Híbrida</span> e UX tática.
                            </p>
                            <Button to="/planos-bots" variant="outline" size="sm">Analisar Planos</Button>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} className="tactical-card p-12 group">
                            <div className="flex items-center gap-4 mb-8 text-secondary">
                                <i className="fas fa-code-merge text-xl"></i>
                                <span className="text-[8px] font-black text-secondary/40 uppercase tracking-[0.6em]">Node.02</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-6 group-hover:text-secondary transition-colors">Digital High-End</h3>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed mb-10">
                                Aplicações <span className="text-white">Full-Stack</span> construídas para escala industrial.
                            </p>
                            <Button to="/web-services" variant="outline" size="sm">Ver Soluções</Button>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="py-24 px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto border border-white/5 bg-black p-16 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-[1px] bg-primary -rotate-[35deg] translate-x-8 translate-y-8"></div>
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Pronto para <span className="text-primary italic">Ativar?</span></h2>
                        <p className="text-white/30 mb-12 text-[9px] font-bold uppercase tracking-[0.3em] leading-loose max-w-sm mx-auto">
                            Briefing operacional aberto. Nossa equipe está em standby para a sua visão.
                        </p>
                        <Button to="/contact" variant="primary" size="md">Iniciar Briefing</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
