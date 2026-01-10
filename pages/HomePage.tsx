
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import LeadModal from '../components/LeadModal';
import ScrollReveal from '../components/ScrollReveal';
import ReflectiveButton from '../components/ReflectiveButton';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState('');

    const openModal = (project: string) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177', '_blank'); // Substitua pelo número real
    };

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen font-display text-text-primary-light dark:text-text-primary-dark antialiased transition-colors duration-300">
            <div className="relative flex min-h-screen w-full flex-col group/design-root">
                <Navbar />

                {/* Hero Section - High Premium Purple/Magenta */}
                <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg-dark pt-20">
                    {/* Custom Mission-Themed Background */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-110 blur-[2px]"
                            style={{ backgroundImage: `url('https://raw.githubusercontent.com/txdigitalstudio/assets/main/studio-bg.png')`, filter: 'brightness(0.4) saturate(1.2)' }}>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/50 to-bg-dark"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    </div>

                    <div className="layout-container relative z-10 px-4 md:px-10 flex justify-center">
                        <div className="max-w-[1280px] w-full flex flex-col items-center">
                            {/* Text Content - Centered for Impact */}
                            <div className="flex flex-col gap-8 flex-1 text-center items-center">
                                <ScrollReveal direction="up" duration={1}>
                                    <div className="flex flex-col gap-6 items-center">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-effect-dark border-primary/30 w-fit"
                                        >
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                                            </span>
                                            <span className="text-xs font-black text-white uppercase tracking-widest">Inovação Digital 2026</span>
                                        </motion.div>

                                        <h1 className="text-white text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                                            DESIGN QUE <br />
                                            <span className="text-gradient">TRANSFORMA.</span>
                                        </h1>

                                        <p className="text-slate-400 text-lg sm:text-2xl font-medium leading-relaxed max-w-3xl mx-auto italic">
                                            Na <span className="text-white font-bold">TX Digital Studio</span>, unimos estética premium e tecnologia de ponta para criar presença digital impossível de ignorar.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-6 mt-10">
                                        <Link to="/beneficios">
                                            <ReflectiveButton size="lg">
                                                INICIAR CONSULTORIA
                                                <span className="material-symbols-outlined">analytics</span>
                                            </ReflectiveButton>
                                        </Link>
                                        <Link to="/planos-apps">
                                            <button className="h-14 px-10 rounded-2xl border-2 border-white/10 text-white font-bold hover:bg-white/5 transition-all text-base uppercase tracking-widest">
                                                VER NOSSOS PLANOS
                                            </button>
                                        </Link>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Elite Showcase Vitrine - Full Width Section Below Hero */}
                <section className="py-24 bg-bg-dark relative overflow-hidden border-y border-white/5">
                    <div className="layout-container px-4 md:px-10 flex flex-col items-center">
                        <ScrollReveal direction="up" duration={1}>
                            <div className="text-center mb-16">
                                <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">
                                    VITRINE DE <span className="text-gradient">EXCELÊNCIA.</span>
                                </h3>
                                <p className="text-slate-400 text-lg md:text-xl font-medium italic max-w-2xl mx-auto text-center">
                                    "Interfaces ultra-velozes e designs disruptivos que elevam seu negócio ao status de elite."
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="w-full relative">
                            <ScrollReveal direction="up" duration={1} delay={0.2}>
                                <div className="relative h-[720px] flex items-center">
                                    {/* Ambient Glows */}
                                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 ambient-glow rounded-full"></div>
                                    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 ambient-glow rounded-full"></div>

                                    <motion.div
                                        drag="x"
                                        dragConstraints={{ right: 0, left: -2200 }}
                                        className="flex gap-12 cursor-grab active:cursor-grabbing p-12 relative z-10"
                                    >
                                        {[
                                            { img: '/showcase/fintech.png', title: 'Fintech Hub', tag: 'Finance' },
                                            { img: '/showcase/saas.png', title: 'Nexus SaaS', tag: 'Productivity' },
                                            { img: '/showcase/luxury.png', title: 'Aura Luxury', tag: 'E-commerce' },
                                            { img: '/showcase/dash.png', title: 'Vision AI', tag: 'Intelligence' },
                                            { img: '/showcase/creative.png', title: 'Studio Portfolio', tag: 'Creative' }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.05, y: -30, rotateY: 5 }}
                                                className="min-w-[550px] h-[650px] premium-glass rounded-[4rem] border border-white/10 overflow-hidden relative group shadow-2xl shadow-black/80 transition-all duration-700 animate-shimmer"
                                                style={{ perspective: '1200px' }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-bg-dark/95 z-10"></div>
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-125"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        if (!target.src.includes('raw.githubusercontent.com')) {
                                                            target.src = `https://raw.githubusercontent.com/texugotxoficial-design/txdigitalstudio/main/public-assets${item.img}`;
                                                        }
                                                    }}
                                                />

                                                {/* Card Content */}
                                                <div className="absolute bottom-12 left-12 z-20">
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        className="px-6 py-2 rounded-full bg-primary/20 border border-primary/30 text-[11px] font-black tracking-[0.4em] text-white uppercase mb-5 inline-block backdrop-blur-md"
                                                    >
                                                        {item.tag}
                                                    </motion.div>
                                                    <h4 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-3">
                                                        {item.title}
                                                    </h4>
                                                    <div className="h-2 w-20 bg-accent rounded-full transition-all duration-700 group-hover:w-40 group-hover:bg-primary"></div>
                                                </div>

                                                {/* Lighting Effect Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Interaction Guide */}
                                <div className="flex flex-col items-center gap-8 mt-12">
                                    <div className="flex gap-2.5">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="h-1.5 w-12 rounded-full bg-white/5 overflow-hidden border border-white/5 shadow-inner">
                                                <motion.div
                                                    animate={{ x: [-48, 48] }}
                                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                                                    className="h-full w-full bg-gradient-to-r from-primary via-accent to-primary"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[12px] font-black tracking-[0.5em] uppercase text-slate-500 flex items-center gap-4 animate-bounce">
                                        <span className="material-symbols-outlined text-xl">swipe_left</span>
                                        DESLIZE PARA A EXCELÊNCIA
                                        <span className="material-symbols-outlined text-xl">swipe_right</span>
                                    </span>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 md:py-24 bg-bg-light dark:bg-bg-dark relative" id="features">
                    <div className="layout-container px-4 md:px-10 flex justify-center">
                        <div className="layout-content-container flex flex-col max-w-[1280px] w-full gap-12">
                            <ScrollReveal>
                                <div className="flex flex-col gap-4 text-center items-center">
                                    <h2 className="text-primary-blue text-sm font-bold tracking-wider uppercase">Vantagens</h2>
                                    <h3 className="text-text-primary-light dark:text-white text-3xl md:text-4xl font-black uppercase tracking-tighter">
                                        PODER TECNOLÓGICO <span className="text-gradient">TX STUDIO.</span>
                                    </h3>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg max-w-2xl font-medium italic">
                                        "Soluções disruptivas focadas na realidade do seu negócio, sem limitações técnicas."
                                    </p>
                                </div>
                            </ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Feature 1 */}
                                <ScrollReveal delay={0.1}>
                                    <div className="group flex flex-col gap-4 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-light dark:bg-surface-dark p-8 hover:border-primary-blue/50 transition-colors duration-300 shadow-sm h-full">
                                        <div className="size-12 rounded-lg bg-primary-blue/10 text-primary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-text-primary-light dark:text-white text-xl font-bold">Divulgação Rápida</h4>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
                                                Seus clientes acessam seus serviços com um clique, sem precisar digitar endereços web complexos.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                                {/* Feature 2 */}
                                <ScrollReveal delay={0.2}>
                                    <div className="group flex flex-col gap-4 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-light dark:bg-surface-dark p-8 hover:border-primary-blue/50 transition-colors duration-300 shadow-sm h-full">
                                        <div className="size-12 rounded-lg bg-primary-blue/10 text-primary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[28px]">chat</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-text-primary-light dark:text-white text-xl font-bold">Contato Direto</h4>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
                                                Botão de WhatsApp integrado para fechar vendas na hora. A comunicação nunca foi tão fácil.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                                {/* Feature 3 */}
                                <ScrollReveal delay={0.3}>
                                    <div className="group flex flex-col gap-4 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-light dark:bg-surface-dark p-8 hover:border-primary-blue/50 transition-colors duration-300 shadow-sm h-full">
                                        <div className="size-12 rounded-lg bg-primary-blue/10 text-primary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[28px]">savings</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-text-primary-light dark:text-white text-xl font-bold">Baixo Custo</h4>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
                                                Desenvolvimento acessível e sem taxas mensais abusivas. Você paga pelo que realmente precisa.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dynamic Service Cards Section */}
                <section className="py-24 bg-white dark:bg-bg-dark relative overflow-hidden">
                    <div className="layout-container px-4 md:px-10 flex flex-col items-center">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="text-primary text-sm font-black tracking-[0.2em] uppercase mb-4">Escolha sua Presença</h2>
                                <h3 className="text-3xl md:text-5xl font-black text-text-primary-light dark:text-white mb-6">Nossas Soluções <span className="text-primary">Estratégicas</span></h3>
                                <p className="text-text-secondary-light dark:text-slate-400 text-lg max-w-2xl mx-auto">Design que impressiona, tecnologia que escala.</p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                            {/* Institutional Card */}
                            <ScrollReveal delay={0.1}>
                                <div className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-surface-dark border border-black/5 dark:border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                                    <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-[32px]">auto_awesome_motion</span>
                                    </div>
                                    <h4 className="text-2xl font-black mb-2 text-text-primary-light dark:text-white">Brand Institutional</h4>
                                    <p className="text-text-secondary-light dark:text-slate-400 text-sm mb-8 flex-grow leading-relaxed">Posicionamento de marca com autoridade. Ideal para profissionais e empresas que buscam o topo do mercado.</p>
                                    <ReflectiveButton variant="primary" onClick={() => openModal('App Institucional')}>
                                        SOLICITAR ORÇAMENTO
                                    </ReflectiveButton>
                                </div>
                            </ScrollReveal>

                            {/* Delivery Card */}
                            <ScrollReveal delay={0.2}>
                                <div className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-surface-dark border border-black/5 dark:border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                                    <div className="size-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-[32px]">fastfood</span>
                                    </div>
                                    <h4 className="text-2xl font-black mb-2 text-text-primary-light dark:text-white">Gourmet Experience</h4>
                                    <p className="text-text-secondary-light dark:text-slate-400 text-sm mb-8 flex-grow leading-relaxed">Sua gastronomia digitalizada. Pedidos rápidos e interface deliciosa que aumenta o ticket médio.</p>
                                    <ReflectiveButton variant="accent" onClick={() => openModal('App Delivery')}>
                                        VER DEMONSTRAÇÃO
                                    </ReflectiveButton>
                                </div>
                            </ScrollReveal>

                            {/* Catalog Card */}
                            <ScrollReveal delay={0.3}>
                                <div className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-surface-dark border border-black/5 dark:border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                                    <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-[32px]">shopping_bag</span>
                                    </div>
                                    <h4 className="text-2xl font-black mb-2 text-text-primary-light dark:text-white">High-End Catalog</h4>
                                    <p className="text-text-secondary-light dark:text-slate-400 text-sm mb-8 flex-grow leading-relaxed">Vitrine de produtos com foco em conversão. Organize seu estoque digital com um toque de luxo.</p>
                                    <ReflectiveButton variant="primary" onClick={() => openModal('App Catalogo')}>
                                        CONHECER PLANO
                                    </ReflectiveButton>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Discord Bot Section - NEW SERVICE */}
                <section className="py-24 relative overflow-hidden bg-bg-dark border-y border-white/5">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="layout-container px-4 md:px-10 flex justify-center relative z-10">
                        <div className="layout-content-container flex flex-col lg:flex-row max-w-[1280px] w-full gap-16 items-center">
                            <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
                                <ScrollReveal direction="left">
                                    <span className="inline-flex self-center lg:self-start px-4 py-1 rounded-full bg-accent/20 text-accent text-xs font-black uppercase tracking-widest border border-accent/30">Exclusividade</span>
                                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                        Automação Brutal: <br /> <span className="text-primary">Custom AI Bots</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mt-4">
                                        Não vendemos robôs, entregamos inteligência. Sistemas para Discord que reduzem custos e escalam sua comunidade para o próximo nível.
                                    </p>
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
                                        <Link to="/planos-bots">
                                            <ReflectiveButton variant="accent" size="lg">
                                                EXPLORAR BOTS
                                            </ReflectiveButton>
                                        </Link>
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="flex-1 w-full max-w-[500px]">
                                <ScrollReveal direction="right">
                                    <div className="aspect-square glass-effect rounded-[3rem] p-1 flex items-center justify-center relative group">
                                        <div className="absolute inset-4 rounded-[2.8rem] bg-gradient-to-br from-primary/20 to-accent/20 animate-glow"></div>
                                        <div className="relative z-10 flex flex-col items-center gap-6 text-white text-center">
                                            <div className="size-24 rounded-3xl bg-white/5 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000">
                                                <span className="material-symbols-outlined text-[60px] text-accent">precision_manufacturing</span>
                                            </div>
                                            <div>
                                                <span className="font-black text-3xl">TX_SYSTEM_V.1</span>
                                                <p className="text-xs font-bold text-slate-400 tracking-[0.3em] mt-1">NÚCLEO DE INTELIGÊNCIA</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section id="contact" className="py-32 relative overflow-hidden bg-bg-dark">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <div className="layout-container px-4 relative z-10 flex justify-center">
                        <ScrollReveal>
                            <div className="flex flex-col items-center text-center gap-10 max-w-4xl">
                                <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-none">
                                    ESTÁ PRONTO PARA <br /> <span className="text-gradient">DOMINAR O MERCADO?</span>
                                </h1>
                                <p className="text-slate-300 text-xl font-medium max-w-2xl">
                                    O seu projeto merece a assinatura da TX Digital Studio. Entre em contato agora e garanta sua vaga para este trimestre.
                                </p>
                                <div className="mt-4">
                                    <ReflectiveButton size="lg" className="w-[300px]" onClick={handleWhatsAppClick}>
                                        FALAR COM ESPECIALISTA
                                        <span className="material-symbols-outlined">rocket_launch</span>
                                    </ReflectiveButton>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <Footer />
                <ChatAssistant />
                <LeadModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    projectType={selectedProject}
                />
            </div>
        </div>
    );
};

export default HomePage;
