
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';

const BeautyPage: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177?text=Olá! Gostaria de saber mais sobre o aplicativo para Estética e Beleza.', '_blank');
    };

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen font-display text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
            <Navbar />
            <main>
                <section className="py-20 bg-[#020617] relative overflow-hidden text-white">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]"></div>
                    <div className="layout-container px-4 text-center relative z-10">
                        <ScrollReveal>
                            <h1 className="text-4xl md:text-6xl font-black mb-6">Destaque sua <span className="text-pink-500">Beleza</span> Digital</h1>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                                Portfólio de serviços, agendamento facilitado e uma vitrine impecável para seu estúdio ou salão.
                            </p>
                            <button onClick={handleWhatsAppClick} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-pink-500/20">
                                Solicitar Orçamento
                            </button>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal delay={0.1}>
                            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                                <span className="material-symbols-outlined text-4xl text-pink-500 mb-4">content_cut</span>
                                <h3 className="text-xl font-bold mb-3">Tabela de Serviços</h3>
                                <p className="text-slate-500 dark:text-slate-400">Liste todos os seus procedimentos com preços e tempos estimados.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                                <span className="material-symbols-outlined text-4xl text-pink-500 mb-4">photo_library</span>
                                <h3 className="text-xl font-bold mb-3">Galeria de Resultados</h3>
                                <p className="text-slate-500 dark:text-slate-400">Exiba fotos de alta qualidade dos seus melhores trabalhos.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                                <span className="material-symbols-outlined text-4xl text-pink-500 mb-4">calendar_month</span>
                                <h3 className="text-xl font-bold mb-3">Agendamento Rápido</h3>
                                <p className="text-slate-500 dark:text-slate-400">Botão direto para marcar horário via WhatsApp sem complicações.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="py-20 px-4 bg-slate-50 dark:bg-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-black mb-4">Transforme sua Agenda</h2>
                            <p className="text-slate-500">Organização impecável para profissionais da beleza.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Vitrine", desc: "Sua marca apresentada com sofreguidão e profissionalismo." },
                                { step: "02", title: "Serviços", desc: "Tabela clara de preços e durações para seus clientes." },
                                { step: "03", title: "Contato", desc: "Facilidade extrema para o cliente tirar dúvidas e agendar." },
                                { step: "04", title: "Fidelidade", desc: "Seu link fixo na bio do Instagram para acesso rápido." }
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-5xl font-black text-pink-500/10 mb-4">{item.step}</div>
                                    <h4 className="font-bold mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ChatAssistant />
        </div>
    );
};

export default BeautyPage;
