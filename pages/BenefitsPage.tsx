
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReflectiveButton from '../components/ReflectiveButton';
import ScrollReveal from '../components/ScrollReveal';

const BenefitsPage: React.FC = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        // Simulate a slight delay for the curtain effect to be impactful
        const timer = setTimeout(() => setIsLoaded(true), 800);
        return () => clearTimeout(timer);
    }, []);

    const benefits = [
        {
            icon: 'speed',
            title: 'Alta Performance',
            description: 'Aplicações ultra-velozes com arquitetura moderna. SEO otimizado para que sua marca apareça nos primeiros resultados.',
            color: 'from-blue-500/20 to-primary/20'
        },
        {
            icon: 'auto_awesome',
            title: 'Design de Elite',
            description: 'Interfaces que respiram luxo e sofisticação. Cada pixel é planejado para transmitir credibilidade e desejo.',
            color: 'from-primary/20 to-accent/20'
        },
        {
            icon: 'query_stats',
            title: 'Conversão Estratégica',
            description: 'UX focada na jornada do cliente. Transformamos visitantes em clientes leais através de gatilhos mentais e fluidez.',
            color: 'from-accent/20 to-magenta-500/20'
        },
        {
            icon: 'security',
            title: 'Escalabilidade Segura',
            description: 'Sistemas prontos para crescer. Sua infraestrutura acompanha o sucesso do seu negócio sem interrupções.',
            color: 'from-purple-500/20 to-blue-500/20'
        }
    ];

    return (
        <div className="bg-bg-dark min-h-screen text-white overflow-hidden selection:bg-primary selection:text-white">
            <Navbar />

            {/* Glass Curtain Entrance */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex pointer-events-none"
                    >
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 0 }}
                                exit={{ x: i % 2 === 0 ? '-100%' : '100%' }}
                                transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1], delay: i * 0.1 }}
                                className="h-full flex-1 glass-effect-dark border-x border-white/5 shadow-2xl"
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/txdigitalstudio/assets/main/studio-bg.png')] bg-cover bg-center opacity-30 blur-[4px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-transparent to-bg-dark"></div>

                    {/* Ambient Light Blobs */}
                    <div className="ambient-light top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/10"></div>
                    <div className="ambient-light bottom-[20%] left-[10%] w-[25%] h-[25%] bg-accent/10" style={{ animationDelay: '-3s' }}></div>
                </div>

                <div className="layout-container relative z-10 px-4 flex flex-col items-center text-center">
                    <ScrollReveal duration={1}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect-dark border-primary/30 text-accent text-xs font-black uppercase tracking-[0.3em] mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                Por que nos escolher?
                            </span>
                            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
                                EXCELÊNCIA <br />
                                <span className="text-gradient">COMO PADRÃO.</span>
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                                Na TX Digital Studio, não apenas construímos sites e apps. Esculpimos ferramentas de poder que elevam sua marca ao status de líder de mercado.
                            </p>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 relative">
                <div className="layout-container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="group relative h-full">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <div className="relative h-full glass-effect-dark border border-white/5 p-8 rounded-[2rem] hover:border-primary/50 transition-all duration-500 flex flex-col gap-6">
                                        <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                                            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">
                                                {benefit.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black mb-3">{benefit.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Glass Comparison Section */}
            <section className="py-24 relative overflow-hidden bg-white/5 border-y border-white/5">
                <div className="layout-container px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <ScrollReveal direction="left">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                                VISÃO <span className="text-primary">MÉTRICA</span> <br />
                                RESULTADO <span className="text-accent">REAL.</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { label: 'Otimização de SEO', value: '98%' },
                                    { label: 'Retenção de Usuários', value: '85%' },
                                    { label: 'Tempo de Carregamento', value: '< 1.2s' }
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                            <span className="text-2xl font-black text-white">{stat.value}</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-primary to-accent"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div className="relative aspect-square">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                            <div className="relative h-full w-full glass-effect-dark rounded-[3rem] border border-white/10 flex items-center justify-center p-12 overflow-hidden">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-20 -right-20 size-60 rounded-full border border-primary/20 flex items-center justify-center"
                                >
                                    <div className="size-40 rounded-full border border-accent/20"></div>
                                </motion.div>
                                <div className="text-center relative z-10 flex flex-col gap-4">
                                    <span className="material-symbols-outlined text-[100px] text-accent">diamond</span>
                                    <span className="text-3xl font-black tracking-tight uppercase italic leading-none">Padrão Ouro em <br /> Entrega Digital</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative">
                <div className="layout-container px-4 flex flex-col items-center">
                    <ScrollReveal>
                        <div className="max-w-4xl w-full glass-effect-dark p-16 rounded-[4rem] border border-white/5 text-center relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <h2 className="text-4xl md:text-7xl font-black mb-8 relative z-10">TRANSFORME SUA <br /> VISÃO EM <span className="text-gradient">PODER.</span></h2>
                            <div className="flex justify-center relative z-10">
                                <Link to="/#contact">
                                    <ReflectiveButton size="lg">
                                        GARANTIR MINHA VAGA
                                        <span className="material-symbols-outlined">rocket_launch</span>
                                    </ReflectiveButton>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BenefitsPage;
