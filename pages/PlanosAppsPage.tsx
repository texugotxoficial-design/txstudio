
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import ScrollReveal from '../components/ScrollReveal';
import LeadModal from '../components/LeadModal';
import ReflectiveButton from '../components/ReflectiveButton';

const PlanosAppsPage: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const openModal = (plan: string) => {
        setSelectedProject(`Plano App/Site: ${plan}`);
        setIsModalOpen(true);
    };

    const appPlans = [
        {
            name: "START Institutional",
            creation: "R$ 590",
            hosting: "R$ 39",
            desc: "Presença digital sólida para quem está começando com autoridade.",
            features: [
                "One Page de Alta Conversão",
                "Design Mobile-First",
                "SEO Base Otimizado",
                "Links Bio & Redes Sociais",
                "Botão de WhatsApp Direto",
                "Hospedagem Cloud Inclusa"
            ],
            color: "primary",
            variant: "primary" as const
        },
        {
            name: "PRO Experience",
            creation: "R$ 1.150",
            hosting: "R$ 69",
            popular: true,
            desc: "A solução completa para restaurantes, delivery e serviços premium.",
            features: [
                "Cardápio / Catálogo Interativo",
                "Sistema de Pedidos WhatsApp",
                "Dashboard de Gestão Simples",
                "Galeria de Fotos Ultra HD",
                "Horários Dinâmicos",
                "Suporte Prioritário TX"
            ],
            color: "accent",
            variant: "accent" as const
        },
        {
            name: "ELITE Custom",
            creation: "R$ 1.890+",
            hosting: "R$ 89",
            desc: "Lojas virtuais e sistemas complexos sob medida para o seu lucro.",
            features: [
                "Catálogo Multicategorias",
                "Busca Inteligente & Filtros",
                "Área de Orçamentos VIP",
                "Integração com APIs",
                "Design 100% Exclusivo",
                "Consultoria de Lançamento"
            ],
            color: "primary",
            variant: "primary" as const
        }
    ];

    return (
        <div className="bg-bg-dark min-h-screen text-white transition-colors duration-300">
            <Navbar />

            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-110 blur-[4px]"
                        style={{ backgroundImage: `url('https://raw.githubusercontent.com/txdigitalstudio/assets/main/studio-bg.png')` }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark/50 to-bg-dark"></div>
                    <div className="ambient-light top-[10%] left-[5%] w-[40%] h-[40%] bg-primary/10"></div>
                    <div className="ambient-light bottom-[10%] right-[5%] w-[35%] h-[35%] bg-accent/10" style={{ animationDelay: '-5s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect-dark border-primary/20 mb-8 mx-auto">
                            <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">Tabela de Investimento 2026</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            PROJETOS QUE <br /> <span className="text-gradient">VIRALIZAM.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                            Investimento transparente, sem letras miúdas. Criamos o motor de vendas que o seu negócio merece.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {appPlans.map((plan, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className={`
                                group p-10 rounded-[3rem] transition-all duration-500 flex flex-col h-full relative
                                ${plan.popular
                                    ? 'bg-gradient-to-b from-primary/10 to-bg-dark border-2 border-primary/30 shadow-2xl shadow-primary/10 scale-105 z-20'
                                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                                }
                            `}>
                                {plan.popular && (
                                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">
                                        BEST SELLER
                                    </span>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-3xl font-black mb-3 text-white">{plan.name}</h3>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{plan.desc}</p>
                                </div>

                                <div className="space-y-6 mb-10 p-6 bg-white/5 rounded-3xl border border-white/5">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Setup Único</span>
                                        <span className="text-3xl font-black text-white tracking-tighter">{plan.creation}</span>
                                    </div>
                                    <div className="h-px bg-white/10"></div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Cloud Mensal</span>
                                        <div className="text-right">
                                            <span className="text-xl font-black text-accent">{plan.hosting}</span>
                                            <span className="text-[10px] text-slate-500 font-bold">/mês</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="flex-1 space-y-5 mb-12">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-4 text-sm font-medium text-slate-300">
                                            <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                                                <span className="material-symbols-outlined text-primary text-sm font-black">done</span>
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <ReflectiveButton
                                    variant={plan.variant}
                                    size="lg"
                                    className="w-full"
                                    onClick={() => openModal(plan.name)}
                                >
                                    SOLICITAR AGORA
                                </ReflectiveButton>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-32 max-w-5xl mx-auto relative z-10">
                    <ScrollReveal>
                        <div className="glass-effect-dark border-white/5 rounded-[3rem] p-12 text-center relative group overflow-hidden">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <h2 className="text-3xl font-black mb-6 text-white">Infraestrutura TX Cloud</h2>
                            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
                                Não é apenas hospedagem. É o motor que mantém sua empresa online com 99.9% de uptime, segurança nível bancário e suporte humano real via WhatsApp.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">bolt</span>
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-300">Edge Computing</span>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent">
                                        <span className="material-symbols-outlined text-3xl">verified_user</span>
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-300">SSL Premium</span>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">headset_mic</span>
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-300">Suporte 24/7</span>
                                </div>
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
    );
};

export default PlanosAppsPage;
