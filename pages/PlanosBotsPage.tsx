
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import ScrollReveal from '../components/ScrollReveal';
import LeadModal from '../components/LeadModal';

const PlanosBotsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const openModal = (plan: string) => {
        setSelectedProject(`Plano Discord: ${plan}`);
        setIsModalOpen(true);
    };

    const discordPlans = [
        {
            name: "Iniciante",
            creation: "R$ 150",
            hosting: "R$ 25",
            desc: "Perfect para pequenas comunidades.",
            features: ["Boas-vindas Automáticas", "Cargos por Reação", "Logs Básicos", "Hospedagem Dedicada"],
            target: "Pequenos Servidores"
        },
        {
            name: "Comunidade Pro",
            creation: "R$ 450",
            hosting: "R$ 45",
            desc: "Foco em Gamers, GTARP e comunidades ativas.",
            features: ["Sistema de XP/Ranking", "Economia Integrada", "Canais de Voz Dinâmicos", "Moderação Avançada"],
            popular: true,
            target: "GTARP / Servidores Games"
        },
        {
            name: "Enterprise",
            creation: "R$ 1.200+",
            hosting: "R$ 80+",
            desc: "Soluções customizadas para grandes redes.",
            features: ["Custom Bot (Nome/Avatar)", "Integração Web/Database", "Sistemas Exclusivos", "Suporte 24/7 VIP"],
            target: "Grandes Comunidades"
        }
    ];

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
            <Navbar />
            <main className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/20 mb-6 mx-auto">
                            <span className="w-2 h-2 rounded-full bg-[#5865F2] animate-pulse"></span>
                            <span className="text-[#5865F2] text-xs font-bold uppercase tracking-wide">Bots para Comunidades & Games</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Planos para <span className="text-[#5865F2]">Discord</span></h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Automação inteligente com custo fixo de criação e mensalidade de hospedagem dedicada na Square Cloud.</p>
                    </ScrollReveal>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {discordPlans.map((plan, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className={`p-8 rounded-3xl bg-white dark:bg-white/5 border-2 ${plan.popular ? 'border-[#5865F2] shadow-2xl' : 'border-black/5 dark:border-white/10'} flex flex-col h-full relative`}>
                                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5865F2] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase">Mais Procurado</span>}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                                    <span className="text-[10px] font-bold text-[#5865F2] uppercase tracking-[0.1em] mb-2 block">{plan.target}</span>
                                    <p className="text-sm text-slate-500">{plan.desc}</p>
                                </div>
                                <div className="space-y-4 mb-8 p-4 bg-black/5 dark:bg-white/5 rounded-2xl">
                                    <div className="flex justify-between items-end">
                                        <span className="text-xs text-slate-500 font-medium">Criação</span>
                                        <span className="text-2xl font-black tracking-tight">{plan.creation}</span>
                                    </div>
                                    <div className="flex justify-between items-end border-t border-black/5 dark:border-white/10 pt-4">
                                        <span className="text-xs text-slate-500 font-medium">Hospedagem (Mensal)</span>
                                        <span className="text-lg font-bold text-[#5865F2]">{plan.hosting}<span className="text-xs font-medium opacity-70">/mês</span></span>
                                    </div>
                                </div>
                                <ul className="flex-1 space-y-4 mb-8">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs">
                                            <span className="material-symbols-outlined text-[#5865F2] text-lg">verified</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => openModal(plan.name)}
                                    className={`w-full py-4 rounded-xl font-black transition-all ${plan.popular ? 'bg-[#5865F2] text-white shadow-lg hover:bg-[#4752C4]' : 'bg-black/5 dark:bg-white/10 text-[#5865F2] dark:text-white'}`}
                                >
                                    Contratar para Discord
                                </button>
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
