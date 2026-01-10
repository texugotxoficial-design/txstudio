import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';
import ReflectiveButton from '../../components/ReflectiveButton';

const BeautyPage: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177?text=Olá! Gostaria de saber mais sobre o aplicativo para Estética.', '_blank');
    };

    return (
        <div className="bg-bg-dark min-h-screen text-white transition-colors duration-300">
            <Navbar />
            <main className="pt-32 pb-20">
                {/* Hero section */}
                <section className="px-6 mb-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="flex-1 text-center lg:text-left">
                            <ScrollReveal direction="right">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 mx-auto lg:mx-0">
                                    <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Estética de Alto Padrão TX</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">
                                    DESIGN DE LUXO <br /> <span className="text-gradient">PARA SUA</span> CLÍNICA.
                                </h1>
                                <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 font-medium leading-relaxed italic">
                                    "Proporcionamos uma experiência visual tão refinada quanto seus serviços. Portfólios dinâmicos e agendamento direto para atrair a elite do seu mercado."
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <ReflectiveButton
                                        size="lg"
                                        onClick={handleWhatsAppClick}
                                    >
                                        REDEFINIR MEU ESPAÇO
                                    </ReflectiveButton>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="flex-1 w-full max-w-[500px]">
                            <ScrollReveal direction="left" delay={0.2}>
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative aspect-square rounded-[3rem] bg-[#0B0E14] border border-white/5 overflow-hidden shadow-2xl">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <div className="glass-effect-dark border-white/10 p-6 rounded-2xl">
                                                <div className="flex items-center gap-4 mb-3 text-primary">
                                                    <span className="material-symbols-outlined">auto_awesome</span>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Experience Edition</span>
                                                </div>
                                                <p className="text-xs text-slate-300 italic font-medium">"Beleza é harmonia. Nosso design é projetado para transmitir confiança imediata."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: 'face_5', title: 'Portfólio VIP', desc: 'Exibição em galeria HD dos seus procedimentos e resultados.' },
                            { icon: 'calendar_month', title: 'Agendamento TX', desc: 'Botão de reserva direto para o WhatsApp, simplificando a jornada do cliente.' },
                            { icon: 'content_cut', title: 'Vitrine de Serviços', desc: 'Apresentação detalhada com sessões, prazos e cuidados pós-procedimento.' }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-10 rounded-[3rem] glass-effect-dark border-white/5 hover:border-primary/30 transition-all group">
                                    <div className="size-14 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-8 border border-primary/20 transition-transform group-hover:scale-110">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed italic">"{item.desc}"</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Automation Highlight */}
                <section className="px-6 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <div className="relative bg-[#0B0E14] rounded-[4rem] p-12 lg:p-20 text-center flex flex-col items-center border border-white/5 overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50"></div>
                                <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight tracking-tighter uppercase relative z-10">POSICIONE SUA MARCA <br /> <span className="text-gradient">NA ELITE.</span></h2>
                                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 italic max-w-2xl relative z-10">
                                    "O mercado de estética premium exige uma presença digital à altura. Vamos elevar seu padrão hoje."
                                </p>
                                <ReflectiveButton
                                    size="lg"
                                    onClick={handleWhatsAppClick}
                                >
                                    FALAR COM CONSULTOR
                                </ReflectiveButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
            <ChatAssistant />
        </div>
    );
};

export default BeautyPage;
