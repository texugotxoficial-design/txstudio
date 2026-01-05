
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';

const RestaurantPage: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177?text=Olá! Gostaria de saber mais sobre o aplicativo para Restaurantes.', '_blank');
    };

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen font-display text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
            <Navbar />
            <main>
                <section className="py-20 bg-[#020617] relative overflow-hidden text-white">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px]"></div>
                    <div className="layout-container px-4 text-center relative z-10">
                        <ScrollReveal>
                            <h1 className="text-4xl md:text-6xl font-black mb-6">Seu Restaurante na <span className="text-orange-500">Palma da Mão</span></h1>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                                Cardápios digitais interativos, integração com WhatsApp e visibilidade total para o seu negócio de alimentação.
                            </p>
                            <button onClick={handleWhatsAppClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-orange-500/20">
                                Solicitar Orçamento
                            </button>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal delay={0.1}>
                            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                                <span className="material-symbols-outlined text-4xl text-orange-500 mb-4">restaurant_menu</span>
                                <h3 className="text-xl font-bold mb-3">Cardápio Interativo</h3>
                                <p className="text-slate-500 dark:text-slate-400">Fotos reais, descrições detalhadas e preços sempre atualizados.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                                <span className="material-symbols-outlined text-4xl text-orange-500 mb-4">send</span>
                                <h3 className="text-xl font-bold mb-3">Pedidos no WhatsApp</h3>
                                <p className="text-slate-500 dark:text-slate-400">Receba pedidos organizados diretamente no seu chat, sem taxas de marketplace.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                                <span className="material-symbols-outlined text-4xl text-orange-500 mb-4">location_on</span>
                                <h3 className="text-xl font-bold mb-3">Localização GPS</h3>
                                <p className="text-slate-500 dark:text-slate-400">Facilite a chegada do seu cliente com integração ao Google Maps e Waze.</p>
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

export default RestaurantPage;
