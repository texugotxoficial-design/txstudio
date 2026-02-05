import React from 'react';
import FloatingNavbar from '../components/FloatingNavbar';
import Footer from '../components/Footer';
import PlanCard from '../components/PlanCard';
import { motion } from 'framer-motion';

const WebServicesPage: React.FC = () => {
    const plans = [
        {
            title: "Start Tático",
            price: "Sob Consulta",
            features: [
                "Site de Boas-Vindas Tático",
                "Links para Redes Sociais",
                "Site para Divulgação Base",
                "3 Atualizações Iniciais Grátis",
                "Setup de Comando Alpha"
            ],
            buttonLink: "https://wa.me/5516991122177"
        },
        {
            title: "Operação Pro",
            price: "Sob Consulta",
            isPopular: true,
            features: [
                "Site de Portfólio High-End",
                "Cardápio Online (No DB)",
                "Sistema de Links Integrado",
                "3 Atualizações Iniciais Grátis",
                "Visualização Premium"
            ],
            buttonLink: "https://wa.me/5516991122177"
        },
        {
            title: "Node Administrativo",
            price: "Sob Consulta",
            features: [
                "Sistema de Agendamento",
                "Dashboard Administrativa",
                "Controle Operacional Full",
                "3 Atualizações Iniciais Grátis",
                "Escala de Shard Ilimitada"
            ],
            buttonLink: "https://wa.me/5516991122177"
        }
    ];

    return (
        <div className="bg-dark-bg min-h-screen text-white/90 selection:bg-primary/30 mesh-grid">
            <FloatingNavbar />

            <main className="pt-40">
                {/* Header Tático para Web */}
                <section className="px-6 mb-32 relative text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center items-center gap-4 mb-10">
                            <div className="w-8 h-[1px] bg-primary shadow-[0_0_10px_rgba(223,255,0,0.5)]"></div>
                            <div className="text-primary font-black text-[9px] uppercase tracking-[0.5em]">Web Development Phase</div>
                            <div className="w-8 h-[1px] bg-primary shadow-[0_0_10px_rgba(223,255,0,0.5)]"></div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black mb-10 uppercase tracking-tighter leading-none">
                            SISTEMAS <br /><span className="text-white/20">HIGH-END.</span>
                        </h1>
                        <p className="text-white/40 max-w-2xl mx-auto text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
                            Desenvolvendo paisagens digitais cinematográficas. Construímos <span className="text-white">Soluções Full-Stack</span> que definem sua vantagem competitiva.
                        </p>
                    </motion.div>
                </section>

                {/* Prova de Valor Tática */}
                <section className="max-w-7xl mx-auto px-6 mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { title: 'Performance Peak', text: 'Carregamento sub-segundo para máximo engajamento.', icon: 'fa-bolt' },
                            { title: 'UX/UI Tática', text: 'Layouts intuitivos baseados em psicologia humana.', icon: 'fa-user-astronaut' },
                            { title: 'Perímetro Seguro', text: 'Fortificações cloud para integridade absoluta dos dados.', icon: 'fa-shield-halved' }
                        ].map((prop, i) => (
                            <div key={i} className="group border-l border-white/5 pl-8 py-5 hover:border-primary transition-all">
                                <div className="text-primary text-2xl mb-10 group-hover:scale-110 transition-transform flex items-center justify-between">
                                    <i className={`fas ${prop.icon}`}></i>
                                    <span className="text-[9px] font-black text-white/10 uppercase tracking-widest">PROP_{i + 1}</span>
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-4">{prop.title}</h4>
                                <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest leading-loose">{prop.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Grid de Serviços */}
                <section className="max-w-7xl mx-auto px-6 mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {plans.map((plan, index) => (
                            <PlanCard key={plan.title} {...plan} delay={index * 0.15} />
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed border border-white/5 py-4 px-8 inline-block">
                            Protocolo de Atualização: <span className="text-primary">3 Primeiras Grátis</span>. <br className="sm:hidden" />
                            Operacional Excedente: <span className="text-white font-black">R$ 5,00 por atualização</span>.
                        </p>
                    </div>
                </section>

                {/* Protocolo de Implementação */}
                <section className="py-32 px-6 bg-black relative overflow-hidden border-y border-white/5">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">Protocolos de <br /><span className="text-primary">Implantação.</span></h2>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                                Nossa abordagem cirúrgica garante que seu projeto sobreviva e domine o mercado.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                "Clean Architecture Ops",
                                "Domínio de Core Web Vitals",
                                "Sincronização Multi-Hub",
                                "Metodologia Ágil por Fases",
                                "Suporte de Comando Pós-Lançamento",
                                "Integração Tática de Terceiros"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 border border-white/5 p-8 group hover:border-secondary transition-all">
                                    <div className="w-1.5 h-1.5 rotate-45 border border-secondary group-hover:bg-secondary transition-all"></div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default WebServicesPage;
