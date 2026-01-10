import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import ScrollReveal from '../components/ScrollReveal';
import ReflectiveButton from '../components/ReflectiveButton';

const FeaturesPage: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177', '_blank');
    };

    const coreFeatures = [
        {
            title: 'TX Institutional',
            desc: 'Apresente sua história e autoridade com uma interface que exala profissionalismo e luxo.',
            icon: 'apartment',
            color: 'primary'
        },
        {
            title: 'Showcase Dinâmico',
            desc: 'Organize produtos e serviços em um grid interativo, otimizado para navegação ultra-rápida.',
            icon: 'format_list_bulleted',
            color: 'accent'
        },
        {
            title: 'Galeria Ultra-HD',
            desc: 'Exiba seus projetos com carregamento progressivo e compressão inteligente sem perda de qualidade.',
            icon: 'perm_media',
            color: 'primary'
        },
        {
            title: 'Conversão em 1-Clique',
            desc: 'CTAs estratégicos e botões flutuantes que levam seu cliente direto ao fechamento via WhatsApp.',
            icon: 'send',
            color: 'accent'
        },
        {
            title: 'Geolocalização TX',
            desc: 'Integração nativa com Maps e Waze. Seu cliente chega ao seu estabelecimento sem barreiras.',
            icon: 'location_on',
            color: 'primary'
        },
        {
            title: 'Ecossistema Social',
            desc: 'Sincronização total com Instagram, LinkedIn e Facebook, criando uma presença digital unificada.',
            icon: 'share',
            color: 'accent'
        },
        {
            title: 'UI/UX Customizada',
            desc: 'Design exclusivo adaptado à sua marca, com micro-animações que prendem a atenção do usuário.',
            icon: 'palette',
            color: 'primary'
        },
        {
            title: 'TX Cloud Admin',
            desc: 'Painel intuitivo para você atualizar textos, imagens e preços em tempo real, sem complicações.',
            icon: 'update',
            color: 'accent'
        },
        {
            title: 'Tecnologia PWA',
            desc: 'Seu site funciona como um app nativo. Pode ser instalado no celular e acessado instantaneamente.',
            icon: 'install_mobile',
            color: 'primary'
        }
    ];

    return (
        <div className="bg-bg-dark min-h-screen text-white transition-colors duration-300">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="px-6 mb-32 relative text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
                                <span className="size-2 rounded-full bg-accent animate-pulse"></span>
                                <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">Poder Tecnológico TX</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">
                                ENGENHARIA <br /> <span className="text-gradient">PARA O SEU</span> SUCESSO.
                            </h1>
                            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto italic">
                                "Não entregamos apenas recursos, entregamos vantagens competitivas. Cada funcionalidade TX é projetada para converter e impressionar."
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="px-6 mb-32 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coreFeatures.map((feature, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.05}>
                                    <div className="p-10 rounded-[3rem] glass-effect-dark border-white/5 hover:border-white/20 transition-all h-full group">
                                        <div className={`size-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-transform group-hover:scale-110
                                            ${feature.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}
                                        `}>
                                            <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{feature.title}</h3>
                                        <p className="text-slate-400 text-sm font-medium leading-relaxed italic">"{feature.desc}"</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Special Automation Highlight */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <ScrollReveal>
                            <div className="bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-[400px] h-full bg-[#5865F2]/5 skew-x-[-20deg] translate-x-32"></div>
                                <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                                    <div className="flex-1 text-center lg:text-left">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/20 mb-8">
                                            <span className="text-[#5865F2] text-[10px] font-black uppercase tracking-[0.2em]">Automação VIP</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">SISTEMAS PARA <br /> <span className="text-[#5865F2]">DISCORD.</span></h2>
                                        <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10 italic">
                                            "A tecnologia TX ultrapassa os navegadores. Desenvolvemos ecossistemas de gestão e engajamento automatizados dentro da maior plataforma de comunidades do mundo."
                                        </p>
                                        <Link to="/discord-bots">
                                            <ReflectiveButton size="lg">EXPLORAR BOTS</ReflectiveButton>
                                        </Link>
                                    </div>
                                    <div className="flex-1 w-full max-w-[400px]">
                                        <div className="relative aspect-square rounded-[3rem] bg-[#0B0E14] border border-[#5865F2]/30 flex items-center justify-center overflow-hidden shadow-2xl">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/20 to-transparent"></div>
                                            <span className="material-symbols-outlined text-[120px] text-[#5865F2] animate-pulse">terminal</span>
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <div className="glass-effect-dark border-[#5865F2]/20 p-4 rounded-2xl text-[10px] font-mono text-[#5865F2]/80">
                                                    <p>{"> tx_automation_v4.init()"}</p>
                                                    <p>{"> status: operational"}</p>
                                                    <p>{"> waiting for input..."}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="px-6">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <div className="relative bg-[#0B0E14] rounded-[4rem] p-12 lg:p-20 text-center flex flex-col items-center border border-white/5 overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50"></div>
                                <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tighter uppercase relative z-10">TUDO PRONTO <br /> <span className="text-gradient">PARA O START?</span></h2>
                                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 italic max-w-2xl relative z-10">
                                    "A transformação digital do seu negócio começa hoje. Escolha a TX e coloque sua empresa em um novo patamar tecnológico."
                                </p>
                                <div className="flex flex-wrap justify-center gap-6 relative z-10">
                                    <ReflectiveButton
                                        size="lg"
                                        onClick={handleWhatsAppClick}
                                    >
                                        FALAR COM ESPECIALISTA
                                    </ReflectiveButton>
                                    <Link to="/demonstracao">
                                        <button className="inline-flex items-center justify-center px-10 py-5 rounded-2xl border border-white/10 glass-effect-dark text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
                                            VER DEMO
                                        </button>
                                    </Link>
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

export default FeaturesPage;
