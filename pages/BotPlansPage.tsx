import React from 'react';
import FloatingNavbar from '../components/FloatingNavbar';
import Footer from '../components/Footer';
import PlanCard from '../components/PlanCard';
import Button from '../components/Button';
import DiscordDemo from '../components/DiscordDemo';
import { motion } from 'framer-motion';

const BotPlansPage: React.FC = () => {
    const plans = [
        {
            title: "Início Tático (Bronze)",
            price: "R$ 50",
            features: [
                "Comandos Específicos Ops",
                "Atribuição de Cargo / Reação",
                "Sistema de Registro Base",
                "Sistema de Logs Operacionais",
                "3 Atualizações Iniciais Grátis"
            ],
            buttonLink: "https://discord.gg/C9pVx4muZG"
        },
        {
            title: "Incursão Elite (Silver)",
            price: "R$ 100",
            isPopular: true,
            features: [
                "Ranking de Horas em Call",
                "Entrada e Saída de Ponto",
                "Sistema de Ticket Suporte",
                "3 Atualizações Iniciais Grátis",
                "Prioridade Alpha Sync"
            ],
            buttonLink: "https://discord.gg/C9pVx4muZG"
        },
        {
            title: "Protocolo Fantasma (Gold)",
            price: "R$ 150",
            features: [
                "Sistemas Restaurante/Mecânica GTA",
                "Criação Auto. de Canais",
                "Painéis Funcionais de Comando",
                "3 Atualizações Iniciais Grátis",
                "Ecossistema Mesh Completo"
            ],
            buttonLink: "https://discord.gg/C9pVx4muZG"
        }
    ];

    return (
        <div className="bg-dark-bg min-h-screen text-white/90 selection:bg-primary/30 mesh-grid overflow-x-hidden">
            <FloatingNavbar />

            <main className="pt-32 pb-20">
                {/* Header Tático */}
                <section className="px-6 mb-24 relative text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[250px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center items-center gap-4 mb-8 text-secondary">
                            <div className="w-6 h-[1px] bg-secondary opacity-50"></div>
                            <div className="font-black text-[8px] uppercase tracking-[0.6em]">Bot Engineering Phase</div>
                            <div className="w-6 h-[1px] bg-secondary opacity-50"></div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-none">
                            ECOSSISTEMAS <br /><span className="text-primary text-glow">TÁTICOS.</span>
                        </h1>
                        <p className="text-white/40 max-w-lg mx-auto text-[10px] font-bold uppercase tracking-[0.25em] leading-relaxed">
                            Bot Development sem APIs externas, com foco total em <span className="text-white">Automação de Comunidade</span> e sistemas nativos Discord.
                        </p>
                    </motion.div>
                </section>

                {/* Grade de Planos */}
                <section className="px-6 max-w-7xl mx-auto mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <PlanCard key={plan.title} {...plan} delay={index * 0.1} />
                        ))}
                    </div>
                    <div className="mt-12 text-center space-y-4">
                        <p className="text-white/20 text-[8px] font-black tracking-[0.3em] uppercase">
                            <span className="text-primary mr-2">/!/</span> Taxa de Protocolo de Manutenção: <span className="text-white font-bold">R$ 40/Fase</span>
                        </p>
                        <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed border border-white/5 py-4 px-8 inline-block">
                            Protocolo de Atualização: <span className="text-primary">3 Primeiras Grátis</span>. <br className="sm:hidden" />
                            Operacional Excedente: <span className="text-white font-black">R$ 5,00 por atualização</span>.
                        </p>
                    </div>
                </section>

                {/* Demonstração Operacional (Discord Sim) */}
                <section className="py-24 px-6 bg-black/30 border-y border-white/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: -0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8 text-primary/60">
                                <div className="w-1.5 h-1.5 rotate-45 border border-primary"></div>
                                <span className="text-[8px] font-black uppercase tracking-[0.4em]">Visualização de Comando</span>
                            </div>
                            <h2 className="text-3xl font-black uppercase tracking-tight mb-8 leading-none italic">Interação <br /><span className="text-white/20">Alpha-Sync.</span></h2>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] leading-loose mb-12">
                                Nossos bots entregam UX fluida com embeds customizados e lógica de resposta <span className="text-white">sub-milissegundo</span>. Visualize o protótipo operacional ao lado.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                {['DDR5 High-Speed', 'NVMe Gen4', 'Latency Ops', 'Safe-Shield v5'].map(spec => (
                                    <div key={spec} className="border-l border-white/10 pl-5 py-2 group hover:border-primary transition-all">
                                        <span className="text-[9px] font-black text-white/30 uppercase tracking-widest group-hover:text-white transition-colors">{spec}</span>
                                    </div>
                                ))}
                            </div>
                            <Button to="/contact" variant="outline" size="sm">Solicitar Demonstração Live</Button>
                        </motion.div>

                        {/* Visual da Demonstração (CSS Sim) */}
                        <div className="relative">
                            <DiscordDemo />

                            {/* Elementos Decorativos Táticos */}
                            <div className="absolute -top-4 -left-4 size-10 border-t border-l border-primary/30"></div>
                            <div className="absolute -bottom-4 -right-4 size-10 border-b border-r border-secondary/30"></div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BotPlansPage;
