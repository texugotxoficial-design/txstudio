import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ReflectiveButton from '../../components/ReflectiveButton';

const BeautyExamplePage: React.FC = () => {
    const services = [
        { id: 1, title: 'Facial Deluxe', time: '60 min', price: 'R$ 380', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop' },
        { id: 2, title: 'Body Sculpt', time: '90 min', price: 'R$ 550', img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop' },
        { id: 3, title: 'Spa Day Ritual', time: '3h', price: 'R$ 920', img: 'https://images.unsplash.com/photo-1544161515-4af6b1d4b1f2?q=80&w=2070&auto=format&fit=crop' },
    ];

    return (
        <div className="bg-[#fefafc] min-h-screen text-[#4a3a3a] font-sans selection:bg-primary/30 selection:text-primary">
            <Navbar />

            {/* Wellness Hero */}
            <header className="relative min-h-[90vh] flex items-center overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fdeff4] rounded-bl-[10rem] z-0" />
                <div className="max-w-7xl w-full mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <ScrollReveal direction="left">
                            <span className="text-primary font-black uppercase text-xs tracking-[0.4em] mb-6 block">Premium Aesthetics System</span>
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-[#2d1e1e]">
                                RENOVE SUA <br /> <span className="text-gradient">ESSÊNCIA.</span>
                            </h1>
                            <p className="text-[#8a7a7a] text-lg mb-10 max-w-lg font-medium leading-relaxed">
                                Uma interface leve, elegante e focada no bem-estar. Agenda digital inteligente para clínicas e spas de luxo.
                            </p>
                            <div className="flex justify-center lg:justify-start gap-4">
                                <ReflectiveButton size="lg">
                                    AGENDAR DEMO
                                </ReflectiveButton>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="flex-1 w-full relative">
                        <ScrollReveal direction="right">
                            <div className="relative p-4 bg-white/40 backdrop-blur-md rounded-[4rem] border border-white/50 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=2070&auto=format&fit=crop"
                                    alt="Wellness Experience"
                                    className="rounded-[3.5rem] shadow-xl relative z-10"
                                />
                                <div className="absolute -bottom-8 -left-8 p-6 bg-white rounded-3xl shadow-xl flex items-center gap-4 border border-primary/10">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">event_available</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#8a7a7a]">Próximo Horário</p>
                                        <p className="font-black text-[#2d1e1e]">HOJE, 14:30</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </header>

            {/* Service Menu */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <ScrollReveal>
                            <h2 className="text-4xl font-black uppercase tracking-tighter text-[#2d1e1e] mb-4">MENU DE SERVIÇOS</h2>
                            <p className="text-[#8a7a7a] font-medium">A excelência em cada detalhe do atendimento.</p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {services.map((s, idx) => (
                            <ScrollReveal key={s.id} delay={idx * 0.1}>
                                <div className="group cursor-pointer">
                                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 border-8 border-[#fdeff4] group-hover:border-primary/20 transition-all duration-500">
                                        <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur rounded-full shadow-lg">
                                            <span className="text-[10px] font-black uppercase text-primary">{s.time}</span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-black uppercase tracking-tighter text-[#2d1e1e] mb-2">{s.title}</h3>
                                        <p className="text-xl font-bold text-primary mb-6">{s.price}</p>
                                        <button className="px-8 py-3 bg-[#fdeff4] text-primary font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all">
                                            Reservar Agora
                                        </button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Promotion - Mobile Experience */}
            <section className="py-24 relative overflow-hidden bg-[#fdeff4]/50">
                <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="flex-1 order-2 lg:order-1">
                        <ScrollReveal direction="left">
                            <div className="relative w-[320px] h-[640px] bg-[#1a1a1a] rounded-[3.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(45,30,30,0.3)] border-[8px] border-[#2d1e1e] mx-auto overflow-hidden">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#2d1e1e] rounded-b-2xl z-20" />
                                <div className="h-full w-full bg-[#fefafc] rounded-[2.5rem] overflow-hidden relative p-6">
                                    <div className="flex justify-between items-center mb-10 pt-4">
                                        <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-sm">face</span>
                                        </div>
                                        <span className="material-symbols-outlined text-[#2d1e1e]">notifications</span>
                                    </div>
                                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-8 text-[#2d1e1e]">Olá, Sofia</h4>
                                    <div className="p-5 bg-white rounded-3xl shadow-lg border border-primary/5 mb-8">
                                        <p className="text-[9px] font-black uppercase text-primary tracking-widest mb-1">Status do Plano</p>
                                        <p className="font-bold text-[#2d1e1e]">MEMBRO DIAMANTE</p>
                                    </div>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-20 bg-white rounded-2xl animate-pulse" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
                        <ScrollReveal direction="right">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 italic text-[#2d1e1e]">SUA ESTÉTICA <br /> NA <span className="text-primary italic">PALMA DA MÃO.</span></h2>
                            <p className="text-lg text-[#8a7a7a] font-medium mb-10 leading-relaxed">
                                Reduza o "no-show" em até 40% com nosso sistema de confirmação automática via WhatsApp e Push. Experiência nativa de aplicativo no navegador.
                            </p>
                            <ReflectiveButton variant="primary">
                                VER PLANOS SPA
                            </ReflectiveButton>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BeautyExamplePage;
