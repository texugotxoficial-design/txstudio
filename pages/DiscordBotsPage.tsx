
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import LeadModal from '../components/LeadModal';
import ScrollReveal from '../components/ScrollReveal';
import ReflectiveButton from '../components/ReflectiveButton';

const DiscordBotsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const openModal = (project: string) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleDiscordContactClick = () => {
        openModal('Consultoria Discord Bot');
    };

    const handleLanHouseClick = () => {
        window.open('https://discord.gg/C9pVx4muZG', '_blank');
    };

    const features = [
        {
            title: 'Canais Dinâmicos',
            desc: 'Criação e exclusão inteligente de salas de voz. Mantenha seu servidor sempre limpo e organizado.',
            icon: 'cyclone',
            color: 'primary'
        },
        {
            title: 'Ranking de Voz & XP',
            desc: 'Gamifique a participação com sistemas de níveis baseados em tempo de call e atividade de chat.',
            icon: 'leaderboard',
            color: 'accent'
        },
        {
            title: 'Logs de Auditoria',
            desc: 'Saiba exatamente tudo o que acontece. Registros detalhados em canais privados de staff.',
            icon: 'description',
            color: 'primary'
        },
        {
            title: 'Gestão Hierárquica',
            desc: 'Autoroles, reaction roles e comandos administrativos para um controle total da hierarquia.',
            icon: 'manage_accounts',
            color: 'accent'
        }
    ];

    const plans = [
        {
            name: "START Bot",
            price: "R$ 50",
            desc: "Ideal para pequenas comunidades.",
            features: [
                "Mensagem de Boas-vindas VIP",
                "Auto-Role (Cargo Inicial)",
                "Comandos de Moderação",
                "Suporte TX via Ticket"
            ],
            variant: "primary" as const
        },
        {
            name: "PRO Community",
            price: "R$ 120",
            popular: true,
            desc: "Engajamento e automação total.",
            features: [
                "Tudo do plano START",
                "Sistema de XP e Níveis",
                "Canais de Voz Dinâmicos",
                "Logs de Auditoria Avançados",
                "Customização de Identidade"
            ],
            variant: "accent" as const
        },
        {
            name: "ELITE Custom",
            price: "Sob Consulta",
            desc: "Poder total para grandes marcas.",
            features: [
                "Bot 100% Exclusivo (Nome/Foto)",
                "Integração com APIs & Sites",
                "Sistemas de Loja & Economia",
                "Suporte Prioritário 24/7"
            ],
            variant: "primary" as const
        }
    ];

    return (
        <div className="bg-bg-dark min-h-screen text-white transition-colors duration-300">
            <Navbar />

            <main className="pt-32 pb-20">
                <section className="px-6 mb-32 relative">
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-110 blur-[4px]"
                            style={{ backgroundImage: `url('https://raw.githubusercontent.com/txdigitalstudio/assets/main/studio-bg.png')` }}>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark/50 to-bg-dark"></div>
                        <div className="ambient-light top-[10%] right-[5%] w-[40%] h-[40%] bg-[#5865F2]/10"></div>
                    </div>

                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="flex-1 text-center lg:text-left">
                            <ScrollReveal direction="right">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/20 mb-8 mx-auto lg:mx-0">
                                    <span className="size-2 rounded-full bg-[#5865F2] animate-pulse"></span>
                                    <span className="text-[#5865F2] text-[10px] font-black uppercase tracking-[0.2em]">Sistemas de Automação Discord</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                                    A INTELIGÊNCIA <br /> DO SEU <span className="text-[#5865F2]">DISCORD.</span>
                                </h1>
                                <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 font-medium leading-relaxed italic">
                                    "Transformamos seu servidor em uma máquina de engajamento autônoma. Moderação cirúrgica e sistemas que retêm seus membros."
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                                    <ReflectiveButton
                                        size="lg"
                                        onClick={handleDiscordContactClick}
                                    >
                                        ESTRUTURAR MEU BOT
                                        <span className="material-symbols-outlined">smart_toy</span>
                                    </ReflectiveButton>
                                    <ReflectiveButton
                                        variant="accent"
                                        size="lg"
                                        onClick={handleLanHouseClick}
                                    >
                                        ENTRAR NA LANHOUSE
                                        <span className="material-symbols-outlined">sports_esports</span>
                                    </ReflectiveButton>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="flex-1 w-full max-w-[500px]">
                            <ScrollReveal direction="left" delay={0.2}>
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#5865F2] to-primary rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                    <div className="relative bg-[#0B0E14] rounded-[2rem] border border-white/10 p-8 shadow-2xl overflow-hidden">
                                        {/* Mock Bot Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="size-14 rounded-full bg-gradient-to-br from-[#5865F2] to-primary flex items-center justify-center shadow-lg shadow-[#5865F2]/20 overflow-hidden border border-white/20">
                                                <img src="/logo_tx.jpg" alt="TX Bot" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-white font-black text-base italic uppercase tracking-tighter">TX_CORE_V2</span>
                                                    <span className="bg-[#5865F2] text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm">BOT</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                                                    <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Protocolo Ativo</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mock Command Area */}
                                        <div className="space-y-4">
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="flex items-center gap-2 mb-2 text-primary">
                                                    <span className="material-symbols-outlined text-sm">leaderboard</span>
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Melhores da Semana</span>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                                                        <span>#1 @RafaelTX</span>
                                                        <span className="text-accent italic">48h Call</span>
                                                    </div>
                                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                        <div className="h-full bg-primary w-[80%]"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="flex items-center gap-2 mb-2 text-accent">
                                                    <span className="material-symbols-outlined text-sm">security</span>
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Atividade de Moderação</span>
                                                </div>
                                                <p className="text-[10px] text-slate-400 italic">"Filtro Anti-Spam ativado. Sistema de proteção operando em 100% de eficácia."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Features section */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className="p-10 rounded-[3rem] glass-effect-dark border-white/5 hover:border-white/20 transition-all h-full group">
                                        <div className={`size-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-transform group-hover:scale-110
                                            ${feature.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}
                                        `}>
                                            <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-black mb-4">{feature.title}</h3>
                                        <p className="text-slate-400 text-sm font-medium leading-relaxed">{feature.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing section */}
                <section id="planos" className="px-6 mb-32 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <ScrollReveal>
                                <h1 className="text-4xl md:text-5xl font-black mb-6">PLANOS DE <span className="text-gradient">AUTOMAÇÃO.</span></h1>
                                <p className="text-slate-400 font-medium text-lg">Investimento mensal para manter sua comunidade no próximo nível.</p>
                            </ScrollReveal>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {plans.map((plan, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className={`p-10 rounded-[3rem] flex flex-col h-full relative transition-all duration-500
                                        ${plan.popular
                                            ? 'bg-gradient-to-b from-primary/10 to-bg-dark border-2 border-primary/30 shadow-2xl scale-105 z-10'
                                            : 'glass-effect-dark border-white/5'
                                        }
                                    `}>
                                        {plan.popular && (
                                            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">MOST POPULAR</span>
                                        )}

                                        <div className="mb-8">
                                            <h3 className="text-3xl font-black mb-3">{plan.name}</h3>
                                            <p className="text-sm text-slate-400 font-medium italic">{plan.desc}</p>
                                        </div>

                                        <div className="text-4xl font-black mb-10 tracking-tighter">
                                            {plan.price}
                                        </div>

                                        <ul className="flex-1 space-y-5 mb-12">
                                            {plan.features.map((f, i) => (
                                                <li key={i} className="flex items-start gap-4 text-sm font-bold text-slate-300">
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
                                            onClick={() => openModal(`Bot: ${plan.name}`)}
                                        >
                                            SOLICITAR BOT
                                        </ReflectiveButton>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Section - Elevated */}
                <section className="px-6 py-32 relative overflow-hidden bg-bg-dark border-t border-white/5">
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#5865F2]/20 via-transparent to-primary/20"></div>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <ScrollReveal>
                            <div className="glass-effect-dark border-white/10 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden group shadow-2xl shadow-black/80">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#5865F2]/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                                <div className="flex flex-col lg:flex-row items-center gap-20">
                                    <div className="flex-1 text-center lg:text-left">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/30 text-[#5865F2] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                            Comunidade Oficial
                                        </div>
                                        <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
                                            VEJA A <br /> <span className="text-gradient">MAGIA AO VIVO.</span>
                                        </h2>
                                        <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12 italic max-w-xl mx-auto lg:mx-0">
                                            "Acesse a LanHouse, nosso hub de elite. Interaja com bots de alta performance e sinta a diferença que a automação TX faz."
                                        </p>

                                        <ReflectiveButton
                                            size="lg"
                                            className="w-full sm:w-fit"
                                            onClick={handleLanHouseClick}
                                        >
                                            ENTRAR NA COMUNIDADE TX
                                            <span className="material-symbols-outlined">rocket_launch</span>
                                        </ReflectiveButton>
                                    </div>

                                    <div className="w-full max-w-[400px]">
                                        <div className="relative group/discord">
                                            <div className="absolute -inset-2 bg-gradient-to-r from-[#5865F2] to-primary rounded-[3.5rem] blur-xl opacity-20 group-hover/discord:opacity-40 transition duration-1000"></div>
                                            <div className="relative bg-[#1E1F22] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover/discord:-rotate-1 group-hover/discord:scale-[1.02] border border-white/10">
                                                <div className="h-32 bg-gradient-to-br from-[#5865F2] via-[#4752C4] to-primary relative overflow-hidden">
                                                    <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                                                </div>
                                                <div className="p-10 pt-0 relative flex flex-col gap-8">
                                                    <div className="relative -mt-16 size-32 rounded-[2.5rem] bg-[#1E1F22] p-2 shadow-2xl">
                                                        <div className="size-full bg-[#313338] rounded-[2rem] flex items-center justify-center border border-white/10 group-hover/discord:rotate-12 transition-transform duration-700">
                                                            <span className="material-symbols-outlined text-white text-6xl">stadia_controller</span>
                                                        </div>
                                                        <div className="absolute bottom-1 right-1 size-8 rounded-full bg-green-500 border-4 border-[#1E1F22] animate-pulse"></div>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-white font-black text-3xl flex items-center gap-3 mb-2">
                                                            TX LanHouse
                                                            <span className="material-symbols-outlined text-[#5865F2] text-2xl">verified</span>
                                                        </h4>
                                                        <div className="flex flex-col gap-2">
                                                            <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400">
                                                                <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-green-500"></span> 157 ONLINE</span>
                                                                <span className="size-1 rounded-full bg-slate-700"></span>
                                                                <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-full bg-slate-500"></span> 3.4k MEMBROS</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2.5">
                                                        {['AI Evolution', 'Automation', 'Gaming HQ', 'Elite VIP'].map((tag, i) => (
                                                            <span key={i} className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] text-slate-300 border border-white/10 font-bold uppercase tracking-wider">{tag}</span>
                                                        ))}
                                                    </div>

                                                    <div className="h-px bg-white/5 w-full"></div>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex -space-x-3">
                                                            {[1, 2, 3, 4].map(i => (
                                                                <div key={i} className="size-10 rounded-full border-2 border-[#1E1F22] bg-slate-800 flex items-center justify-center overflow-hidden">
                                                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover opacity-80" />
                                                                </div>
                                                            ))}
                                                            <div className="size-10 rounded-full border-2 border-[#1E1F22] bg-primary flex items-center justify-center text-[10px] font-black text-white">
                                                                +42
                                                            </div>
                                                        </div>
                                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Ativo Agora</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
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

export default DiscordBotsPage;
