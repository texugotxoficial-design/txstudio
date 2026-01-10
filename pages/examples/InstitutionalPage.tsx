import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ReflectiveButton from '../../components/ReflectiveButton';

const InstitutionalPage: React.FC = () => {
    const caseStudies = [
        { id: 1, title: 'Skyline Architecture', category: 'Urban Design', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
        { id: 2, title: 'Nova Tech Hub', category: 'Innovation Center', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' },
        { id: 3, title: 'Luxury Living', category: 'Interior Design', img: 'https://images.unsplash.com/photo-1541888941257-182097305c07?q=80&w=2070&auto=format&fit=crop' },
    ];

    return (
        <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-primary selection:text-white transition-colors duration-500">
            <Navbar />

            {/* Luxury Hero */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <ScrollReveal direction="down">
                        <span className="text-[10px] font-black tracking-[0.8em] uppercase text-primary/60 mb-8 block">Legacy of Excellence</span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-[#1A1A1A] mb-10 leading-[0.9] uppercase">
                            TIMELESS <br /> <span className="text-primary">PRESTIGE.</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.4}>
                        <div className="h-[2px] w-24 bg-primary mx-auto mb-10" />
                        <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                            Projetos institucionais que transcendem o digital. Criamos autoridade visual para marcas que definem o futuro.
                        </p>
                    </ScrollReveal>
                </div>
            </header>

            {/* Portfolio Grid - Minimalist Approach */}
            <section className="py-32 px-4 bg-white relative z-20">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="flex justify-between items-end mb-20 border-b border-black/5 pb-10">
                            <div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter">PORTFOLIO <br /> <span className="text-slate-400">SELETO.</span></h2>
                            </div>
                            <div className="hidden md:block">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Curadoria 2026</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {caseStudies.map((study, idx) => (
                            <ScrollReveal key={study.id} delay={idx * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="aspect-[3/4] overflow-hidden rounded-[2rem] bg-slate-100 relative mb-6">
                                        <img src={study.img} alt={study.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                    </div>
                                    <div className="flex justify-between items-center px-2">
                                        <div>
                                            <h3 className="text-xl font-black uppercase tracking-tighter mb-1">{study.title}</h3>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{study.category}</p>
                                        </div>
                                        <button className="size-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                        </button>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote / Value Section */}
            <section className="py-40 bg-[#1A1A1A] text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <ScrollReveal>
                        <span className="material-symbols-outlined text-6xl text-primary/40 mb-10">format_quote</span>
                        <h2 className="text-3xl md:text-5xl font-medium italic leading-snug mb-12">
                            "A simplicidade é o último grau de sofisticação. Na TX, transformamos essa filosofia em interfaces de alto impacto corporativo."
                        </h2>
                        <div className="h-[1px] w-12 bg-white/20 mx-auto mb-6" />
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Diretoria Criativa TX</p>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA - Final Institutional Hook */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">SEU LEGADO <br /> COMEÇA AQUI.</h2>
                        <p className="text-slate-500 text-lg mb-12 font-medium">Eleve o posicionamento da sua empresa ao topo do mercado digital.</p>
                        <ReflectiveButton size="lg" className="px-12">
                            AGENDAR CONSULTORIA EXECUTIVA
                        </ReflectiveButton>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default InstitutionalPage;
