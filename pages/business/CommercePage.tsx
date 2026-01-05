
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';

const CommercePage: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177?text=Olá! Gostaria de saber mais sobre o aplicativo para Comércio e Varejo.', '_blank');
    };

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen font-display text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
            <Navbar />
            <main>
                <section className="py-20 bg-[#020617] relative overflow-hidden text-white">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
                    <div className="layout-container px-4 text-center relative z-10">
                        <ScrollReveal>
                            <h1 className="text-4xl md:text-6xl font-black mb-6">Venda Mais com seu <span className="text-primary-blue">Catálogo Digital</span></h1>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                                Transforme sua loja física em uma vitrine digital 24h. Seus produtos acessíveis em um só lugar.
                            </p>
                            <button onClick={handleWhatsAppClick} className="bg-primary-blue hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                                Solicitar Orçamento
                            </button>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal delay={0.1}>
                            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                                <span className="material-symbols-outlined text-4xl text-primary-blue mb-4">storefront</span>
                                <h3 className="text-xl font-bold mb-3">Vitrine de Produtos</h3>
                                <p className="text-slate-500 dark:text-slate-400">Destaque lançamentos e promoções com facilidade e elegância.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                                <span className="material-symbols-outlined text-4xl text-primary-blue mb-4">sell</span>
                                <h3 className="text-xl font-bold mb-3">Ofertas Relâmpago</h3>
                                <p className="text-slate-500 dark:text-slate-400">Comunique liquidações e novos estoques rapidamente para seus clientes.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                                <span className="material-symbols-outlined text-4xl text-primary-blue mb-4">qr_code_2</span>
                                <h3 className="text-xl font-bold mb-3">Acesso por QR Code</h3>
                                <p className="text-slate-500 dark:text-slate-400">Leve o cliente da sua loja física direto para o app com adesivos de QR Code.</p>
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

export default CommercePage;
