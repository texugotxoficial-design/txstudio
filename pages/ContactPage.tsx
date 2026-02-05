import React from 'react';
import FloatingNavbar from '../components/FloatingNavbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-dark-bg min-h-screen text-white font-sans selection:bg-primary/30 selection:text-white mesh-grid">
            <FloatingNavbar />

            <main className="pt-48 pb-32 min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Backdrop Tático */}
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl w-full px-6 relative z-10"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-8 h-[2px] bg-primary shadow-[0_0_10px_rgba(223,255,0,0.6)]"></div>
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-[9px]">Communication Phase</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                        INICIAR <br />
                        <span className="text-white/20">CONTATO.</span>
                    </h1>
                    <p className="text-[11px] md:text-xs text-white/40 max-w-sm mb-20 leading-relaxed uppercase font-bold tracking-[0.2em]">
                        Selecione seu canal de engajamento. Nossos arquitetos táticos estão <span className="text-white">em standby</span> para o seu briefing.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Card Discord */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="tactical-card p-14 group cursor-pointer"
                            onClick={() => window.open('https://discord.gg/C9pVx4muZG', '_blank')}
                        >
                            <div className="flex items-center justify-between mb-10">
                                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all">
                                    <i className="fab fa-discord text-3xl text-primary"></i>
                                </div>
                                <span className="text-[9px] font-black text-primary/30 tracking-[0.4em]">CANAL_01</span>
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Discord HQ</h3>
                            <p className="text-white/40 mb-10 text-[10px] font-bold uppercase tracking-widest leading-loose">
                                Centro de comando ao vivo para bots, engenharia de comunidades e tickets de suporte direto.
                            </p>
                            <span className="inline-flex items-center gap-4 text-primary font-black text-[9px] tracking-[0.4em]">
                                ENTRAR NO QG <i className="fas fa-arrow-right text-[7px]"></i>
                            </span>
                        </motion.div>

                        {/* Card WhatsApp */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="tactical-card p-14 group cursor-pointer border-secondary/20"
                            onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
                        >
                            <div className="flex items-center justify-between mb-10">
                                <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:bg-secondary/20 transition-all">
                                    <i className="fab fa-whatsapp text-3xl text-secondary"></i>
                                </div>
                                <span className="text-[9px] font-black text-secondary/30 tracking-[0.4em]">CANAL_02</span>
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Direct System</h3>
                            <p className="text-white/40 mb-10 text-[10px] font-bold uppercase tracking-widest leading-loose">
                                Link direto para sistemas web, benchmarks de UI/UX corporativo e briefings de viabilidade.
                            </p>
                            <span className="inline-flex items-center gap-4 text-secondary font-black text-[9px] tracking-[0.4em]">
                                INICIAR BRIEFING <i className="fas fa-arrow-right text-[7px]"></i>
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
