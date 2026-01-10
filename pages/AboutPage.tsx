import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import ScrollReveal from '../components/ScrollReveal';
import ReflectiveButton from '../components/ReflectiveButton';

const AboutPage: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177', '_blank');
    };

    const stats = [
        { label: 'Projetos Entregues', value: '150+', icon: 'rocket_launch' },
        { label: 'Cloud Uptime', value: '99.9%', icon: 'cloud_done' },
        { label: 'Suporte Ativo', value: '24/7', icon: 'support_agent' },
        { label: 'Satisfação', value: '100%', icon: 'verified' }
    ];

    const values = [
        {
            title: 'Design Premium',
            desc: 'Não entregamos apenas código. Entregamos uma experiência visual que posiciona sua marca no topo.',
            icon: 'auto_awesome'
        },
        {
            title: 'Velocidade TX',
            desc: 'Sua presença digital no ar em tempo recorde, com infraestrutura de ponta e tecnologia Edge.',
            icon: 'bolt'
        },
        {
            title: 'Transparência Total',
            desc: 'Sem taxas escondidas ou burocracia. Na TX, o foco é a clareza e o seu resultado comercial.',
            icon: 'visibility'
        }
    ];

    return (
        <div className="bg-bg-dark min-h-screen text-white transition-colors duration-300">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="px-6 mb-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="flex-1 text-center lg:text-left">
                            <ScrollReveal direction="right">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 mx-auto lg:mx-0">
                                    <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">O Estúdio do Futuro</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                                    TRANSFORMANDO <br /> <span className="text-gradient">VISÃO EM</span> REALIDADE.
                                </h1>
                                <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 font-medium leading-relaxed italic">
                                    "A TX Digital Studio nasceu para romper o padrão. Unimos design de alta performance com tecnologia de elite para empresas que não aceitam o comum."
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <ReflectiveButton
                                        size="lg"
                                        onClick={handleWhatsAppClick}
                                    >
                                        REDEFINIR MEU NEGÓCIO
                                    </ReflectiveButton>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="flex-1 w-full max-w-[500px]">
                            <ScrollReveal direction="left" delay={0.2}>
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative aspect-square rounded-[2.5rem] bg-[#0B0E14] border border-white/5 overflow-hidden shadow-2xl">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent"></div>

                                        <div className="absolute bottom-8 left-8 right-8">
                                            <div className="glass-effect-dark border-white/10 p-6 rounded-2xl">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                                        <span className="material-symbols-outlined">rocket_launch</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-black text-sm uppercase tracking-widest text-white">Liderança Digital</h4>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Desde 2024</p>
                                                    </div>
                                                </div>
                                                <div className="h-px w-full bg-white/5 mb-3"></div>
                                                <p className="text-xs text-slate-300 italic font-medium">"Nossa missão é democratizar o design de luxo e a tecnologia de ponta."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className="p-8 rounded-3xl glass-effect-dark border-white/5 text-center group hover:border-primary/30 transition-all">
                                        <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 border border-primary/20 transition-transform group-hover:scale-110">
                                            <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                                        </div>
                                        <div className="text-4xl font-black mb-2 tracking-tighter text-white">{stat.value}</div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="px-6 mb-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <ScrollReveal>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">OS PILARES DA <span className="text-gradient">EXCELÊNCIA.</span></h2>
                                <p className="text-slate-400 font-medium text-lg italic max-w-2xl mx-auto">"O que nos torna diferentes não é apenas o que fazemos, mas como enxergamos o potencial do seu negócio."</p>
                            </ScrollReveal>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((value, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className="p-10 rounded-[3rem] glass-effect-dark border-white/5 hover:border-white/20 transition-all h-full group">
                                        <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/5 transition-all group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]">
                                            <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                                        </div>
                                        <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{value.title}</h3>
                                        <p className="text-slate-400 font-medium leading-relaxed italic">"{value.desc}"</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Culture CTA */}
                <section className="px-6">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <div className="relative p-1 rounded-[4rem] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x opacity-30"></div>
                                <div className="relative bg-bg-dark rounded-[3.8rem] p-12 lg:p-20 text-center flex flex-col items-center border border-white/5">
                                    <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tighter uppercase">FAÇA PARTE DA <br /> <span className="text-gradient">ELITE DIGITAL.</span></h2>
                                    <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 italic max-w-2xl">
                                        "Não somos apenas um estúdio, somos seu braço direito tecnológico. Vamos construir algo que as pessoas não consigam ignorar."
                                    </p>
                                    <ReflectiveButton
                                        variant="accent"
                                        size="lg"
                                        onClick={handleWhatsAppClick}
                                    >
                                        INICIAR CONSULTORIA
                                    </ReflectiveButton>
                                </div>
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

export default AboutPage;
