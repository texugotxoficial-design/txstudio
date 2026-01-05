
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import ScrollReveal from '../components/ScrollReveal';
import LeadModal from '../components/LeadModal';

const PlanosAppsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const openModal = (plan: string) => {
        setSelectedProject(`Plano App/Site: ${plan}`);
        setIsModalOpen(true);
    };

    const appPlans = [
        {
            name: "Institucional",
            creation: "R$ 600",
            hosting: "R$ 35",
            desc: "Ideal para apresentação profissional e institucional.",
            features: [
                "Página Única (One Page)",
                "História e Valores",
                "Localização GPS Integrada",
                "Links para Redes Sociais",
                "Botão de WhatsApp",
                "Hospedagem Dedicada"
            ],
            color: "blue",
            target: "Pequenas Empresas"
        },
        {
            name: "Delivery & Restaurante",
            creation: "R$ 1.200",
            hosting: "R$ 65",
            popular: true,
            desc: "Seu cardápio digital completo na palma da mão do cliente.",
            features: [
                "Cardápio Digital Interativo",
                "Pedidos Direto no WhatsApp",
                "Galeria de Fotos dos Pratos",
                "Horário de Funcionamento",
                "Taxas de Entrega Editáveis",
                "Hospedagem de Alta Performance"
            ],
            color: "orange",
            target: "Restaurantes e Bares"
        },
        {
            name: "Catálogo & Comércio",
            creation: "R$ 1.800+",
            hosting: "R$ 85",
            desc: "Vitrine virtual completa para seus produtos e serviços.",
            features: [
                "Catalogo com Categorias",
                "Página de Detalhes do Produto",
                "Sistema de Busca Interna",
                "Filtros Personalizados",
                "Botão de Orçamento Direto",
                "Suporte Prioritário"
            ],
            color: "purple",
            target: "Lojas e Serviços"
        }
    ];

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
            <Navbar />
            <main className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-6 mx-auto">
                            <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></span>
                            <span className="text-primary-blue text-xs font-bold uppercase tracking-wide">Soluções Mobile & Web</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Planos de <span className="text-primary-blue">Aplicativos</span></h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Desenvolvimento profissional sem burocracia. Escolha o plano que melhor se adapta ao seu negócio.</p>
                    </ScrollReveal>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {appPlans.map((plan, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className={`p-8 rounded-3xl bg-white dark:bg-white/5 border-2 ${plan.popular
                                    ? 'border-primary-blue shadow-2xl'
                                    : 'border-black/5 dark:border-white/10'
                                } flex flex-col h-full relative`}>
                                {plan.popular && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-blue text-white text-[10px] font-black px-4 py-1 rounded-full uppercase">
                                        Mais Recomendado
                                    </span>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                                    <span className="text-[10px] font-bold text-primary-blue uppercase tracking-[0.1em] mb-2 block">{plan.target}</span>
                                    <p className="text-sm text-slate-500">{plan.desc}</p>
                                </div>
                                <div className="space-y-4 mb-8 p-4 bg-black/5 dark:bg-white/5 rounded-2xl">
                                    <div className="flex justify-between items-end">
                                        <span className="text-xs text-slate-500 font-medium">Criação Única</span>
                                        <span className="text-2xl font-black tracking-tight">{plan.creation}</span>
                                    </div>
                                    <div className="flex justify-between items-end border-t border-black/5 dark:border-white/10 pt-4">
                                        <span className="text-xs text-slate-500 font-medium">Hospedagem & Manutenção</span>
                                        <span className="text-lg font-bold text-primary-blue">{plan.hosting}<span className="text-xs font-medium opacity-70">/mês</span></span>
                                    </div>
                                </div>
                                <ul className="flex-1 space-y-4 mb-8">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs">
                                            <span className="material-symbols-outlined text-primary-blue text-lg">check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => openModal(plan.name)}
                                    className={`w-full py-4 rounded-xl font-black transition-all ${plan.popular
                                            ? 'bg-primary-blue text-white shadow-lg hover:bg-blue-600'
                                            : 'bg-black/5 dark:bg-white/10 text-primary-blue dark:text-white hover:bg-black/10'
                                        }`}
                                >
                                    Solicitar Projeto
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-20 max-w-4xl mx-auto">
                    <ScrollReveal>
                        <div className="bg-primary-blue/5 border border-primary-blue/10 rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-2xl font-bold mb-4">Sobre a Hospedagem</h2>
                            <p className="text-slate-500 dark:text-slate-400 mb-6">
                                Nossos aplicativos são hospedados em infraestrutura dedicada, garantindo alta velocidade e disponibilidade 24/7.
                                A taxa mensal cobre não apenas o servidor, mas também suporte técnico contínuo e atualizações de segurança.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">bolt</span>
                                    Servidores SSD
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">lock</span>
                                    SSL Incluso
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">support_agent</span>
                                    Suporte via Whats
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
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

export default PlanosAppsPage;
