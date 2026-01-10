import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import ScrollReveal from '../components/ScrollReveal';
import LeadModal from '../components/LeadModal';
import ReflectiveButton from '../components/ReflectiveButton';

const PlanosBotsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const openModal = (plan: string) => {
        setSelectedProject(`Plano Discord: ${plan}`);
        setIsModalOpen(true);
    };

    const discordPlans = [
        {
            name: "START Bot",
            creation: "R$ 150",
            hosting: "R$ 25",
            desc: "Ideal para pequenas comunidades e servidores em crescimento.",
            features: ["Boas-vindas Automáticas", "Cargos por Reação (Autorole)", "Logs Básicos de Staff", "Hospedagem TX Dedicated"],
            target: "Pequenos Servidores",
            variant: "primary" as const
        },
        {
            name: "PRO Community",
            creation: "R$ 450",
            hosting: "R$ 45",
            desc: "Foco total em Gamers, GTARP e comunidades competitivas.",
            features: ["Sistema de XP & Ranking", "Economia Integrada", "Canais de Voz Dinâmicos", "Moderação TX Advanced"],
            popular: true,
            target: "GTARP / Servidores Games",
            variant: "accent" as const
        },
        {
            name: "ELITE Enterprise",
            creation: "R$ 1.200+",
            hosting: "R$ 80+",
            desc: "Soluções sob medida com integração total a bancos de dados.",
            features: ["Bot 100% Exclusivo (Personalizado)", "Integração Web & Database", "Sistemas de Dashboard", "Suporte VIP TX 24/7"],
            target: "Grandes Redes & Negócios",
            variant: "primary" as const
        }
    ];

    return (
        <div className="bg-bg-dark min-h-screen text-white transition-colors duration-300">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 mx-auto">
                            <span className="size-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">Escalabilidade & Performance</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">PLANOS <span className="text-gradient">DISCORD.</span></h1>
                        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto italic leading-relaxed">
                            "Automação de elite com infraestrutura dedicada. Do setup inicial à manutenção contínua em nossos servidores cloud."
                        </p>
                    </ScrollReveal>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {discordPlans.map((plan, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className={`p-10 rounded-[3rem] flex flex-col h-full relative transition-all duration-500
                                ${plan.popular
                                    ? 'bg-gradient-to-b from-accent/10 to-bg-dark border-2 border-accent/30 shadow-2xl scale-105 z-10'
                                    : 'glass-effect-dark border-white/5'
                                }
                            `}>
                                {plan.popular && (
                                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">MOST POPULAR</span>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">{plan.name}</h3>
                                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 block
                                        ${plan.variant === 'primary' ? 'text-primary' : 'text-accent'}
                                    `}>{plan.target}</span>
                                    <p className="text-sm text-slate-400 font-medium italic">"{plan.desc}"</p>
                                </div>

                                <div className="space-y-6 mb-12 p-8 bg-white/5 rounded-[2rem] border border-white/5">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Setup Setup</span>
                                        <span className="text-3xl font-black tracking-tighter">{plan.creation}</span>
                                    </div>
                                    <div className="h-px w-full bg-white/5"></div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Hospedagem VIP</span>
                                        <span className={`text-xl font-black tracking-tight
                                            ${plan.variant === 'primary' ? 'text-primary' : 'text-accent'}
                                        `}>{plan.hosting}<span className="text-xs font-medium opacity-50 uppercase ml-1">/mês</span></span>
                                    </div>
                                </div>

                                <ul className="flex-1 space-y-5 mb-12">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-4 text-xs font-bold text-slate-300">
                                            <span className={`size-2 rounded-full mt-1.5 shrink-0
                                                ${plan.variant === 'primary' ? 'bg-primary' : 'bg-accent'}
                                            `}></span>
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
                                    SOLICITAR SETUP
                                </ReflectiveButton>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </main>

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

export default PlanosBotsPage;
