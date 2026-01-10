import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import LeadModal from '../components/LeadModal';
import ScrollReveal from '../components/ScrollReveal';
import ReflectiveButton from '../components/ReflectiveButton';

const ServicesPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const openModal = (project: string) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const serviceCategories = [
        {
            title: "Institucional & Autoridade",
            type: "Elite Business",
            desc: "A base de toda marca de sucesso. Criamos uma presença digital que impõe respeito e profissionalismo.",
            icon: "corporate_fare",
            features: [
                "Arquitetura de Conversão (CRO)",
                "Narrativa de Marca Envolvente",
                "SEO Técnico para Google",
                "Certificações & Prova Social",
                "Integração com CRM"
            ],
            path: "/exemplos/institucional",
            btnLabel: "Solicitar Proposta"
        },
        {
            title: "Restaurante & Delivery 2.0",
            type: "Food Tech",
            desc: "Tecnologia que aumenta o ticket médio. Cardápios que vendem sozinhos e facilitam a logística.",
            icon: "restaurant",
            features: [
                "Cardápio Digital Ultra Rápido",
                "Gestão de Pedidos Inteligente",
                "Fotos que Abrem o Apetite",
                "Automação de WhatsApp",
                "Taxas de Entrega Dinâmicas"
            ],
            path: "/exemplos/restaurante",
            btnLabel: "Transformar Cardápio"
        },
        {
            title: "Estética & High-End Services",
            type: "Premium Service",
            desc: "Portfólios de tirar o fôlego. Atraia clientes que valorizam a qualidade acima do preço.",
            icon: "auto_awesome",
            features: [
                "Galeria de Resultados 4K",
                "Agendamento via Link Direto",
                "Tabela de Serviços VIP",
                "Depoimentos de Impacto",
                "FAQ de Especialista"
            ],
            path: "/exemplos/estetica",
            btnLabel: "Atrair Clientes VIP"
        },
        {
            title: "Catálogo & Showcase Digital",
            type: "Product Display",
            desc: "Seus produtos merecem um palco, não apenas uma lista. Vitrine interativa para o seu lucro.",
            icon: "shopping_bag",
            features: [
                "Navegação por Categorias Elite",
                "Filtros de Busca Inteligentes",
                "Highlights de Lançamento",
                "Orçamento Consultivo Zap",
                "Analytics de Visualização"
            ],
            path: "/exemplos/catalogo",
            btnLabel: "Criar Vitrine Online"
        }
    ];

    return (
        <div className="bg-bg-dark min-h-screen text-white transition-colors duration-300">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Hero Header */}
                <section className="px-6 mb-24 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <ScrollReveal>
                            <span className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-6 block">Nosso Arsenal Criativo</span>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                                SOLUÇÕES QUE <br /> <span className="text-gradient">DOMINAM O MERCADO.</span>
                            </h1>

                            <div className="max-w-2xl mx-auto">
                                <div className="glass-effect-dark border-primary/20 p-6 rounded-[2rem] relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex items-start gap-4 text-left">
                                        <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                                        <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed italic">
                                            "Compromisso TX: Design mobile-first sem atrito. Foco total em conversão e autoridade digital, removendo sistemas complexos que barram as vendas."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {serviceCategories.map((service, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className="group h-full flex flex-col p-10 rounded-[3rem] glass-effect-dark border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        <div className="flex items-center justify-between mb-8">
                                            <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                            </div>
                                            <span className="text-[10px] font-black px-4 py-2 rounded-full bg-white/5 text-slate-400 border border-white/5 uppercase tracking-widest">{service.type}</span>
                                        </div>

                                        <h3 className="text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-slate-400 font-medium mb-8 leading-relaxed italic">"{service.desc}"</p>

                                        <div className="h-px bg-white/5 mb-8"></div>

                                        <ul className="space-y-4 flex-1 mb-10">
                                            {service.features.map((feat, i) => (
                                                <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-300">
                                                    <span className="size-2 rounded-full bg-accent group-hover:scale-125 transition-transform"></span>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link
                                                to={service.path}
                                                className="flex-1 py-4 text-center rounded-2xl glass-effect-dark border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
                                            >
                                                Ver Vitrine
                                            </Link>
                                            <ReflectiveButton
                                                className="flex-[1.5]"
                                                onClick={() => openModal(service.title)}
                                            >
                                                {service.btnLabel}
                                            </ReflectiveButton>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Discord Bot Promotion */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <ScrollReveal>
                            <div className="bg-gradient-to-r from-[#5865F2]/20 to-bg-dark border border-[#5865F2]/30 rounded-[3rem] p-12 relative overflow-hidden group">
                                <div className="absolute -top-20 -right-20 size-64 bg-[#5865F2]/10 rounded-full blur-[100px] group-hover:bg-[#5865F2]/20 transition-all duration-700"></div>

                                <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                                    <div className="flex-1 text-center lg:text-left">
                                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/30 mb-8">
                                            <span className="material-symbols-outlined text-[#5865F2] text-sm">precision_manufacturing</span>
                                            <span className="text-[#5865F2] text-[10px] font-black uppercase tracking-[0.2em]">Automação VIP</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Bots de Elite para <br /> <span className="text-[#5865F2]">Seu Discord</span></h2>
                                        <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl mb-10 italic">
                                            "Transformamos sua comunidade em um ecossistema autônomo. Moderação, economia e sistemas exclusivos sob medida."
                                        </p>
                                        <Link
                                            to="/discord-bots"
                                            className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-black py-4 px-10 rounded-2xl transition-all shadow-xl shadow-[#5865F2]/20 hover:scale-105 active:scale-95 text-xs uppercase tracking-widest"
                                        >
                                            Explorar Planos de Bots
                                            <span className="material-symbols-outlined text-sm">sports_esports</span>
                                        </Link>
                                    </div>
                                    <div className="size-72 lg:size-80 bg-bg-dark/50 backdrop-blur-xl border-4 border-[#5865F2]/30 rounded-[4rem] flex items-center justify-center relative group-hover:rotate-3 transition-transform duration-700">
                                        <span className="material-symbols-outlined text-[140px] text-[#5865F2] animate-glow">smart_toy</span>
                                        <div className="absolute -top-4 -right-4 bg-green-500 text-white text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                                            <span className="size-2 bg-white rounded-full animate-ping"></span>
                                            SYSTEM ONLINE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl font-black mb-6">Sua transformação começa aqui.</h2>
                        <ReflectiveButton
                            variant="primary"
                            size="lg"
                            onClick={() => openModal('Consulta de Consultoria')}
                        >
                            Falar com um Estrategista
                        </ReflectiveButton>
                    </ScrollReveal>
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

export default ServicesPage;
