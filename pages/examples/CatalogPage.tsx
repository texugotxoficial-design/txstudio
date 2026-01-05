
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';

const CatalogExamplePage: React.FC = () => {
    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
            <Navbar />
            <main className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <ScrollReveal>
                        <h1 className="text-4xl font-black mb-6">Exemplo: <span className="text-orange-500">Catálogo Digital</span></h1>
                        <p className="text-lg text-slate-500">Sua loja 24h aberta e recebendo pedidos no Zap.</p>
                    </ScrollReveal>
                </div>
                <div className="max-w-4xl mx-auto bg-white dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10 shadow-2xl">
                    <div className="aspect-[9/16] max-w-[300px] mx-auto bg-slate-100 dark:bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-xl overflow-hidden flex items-center justify-center">
                        <p className="text-xs text-slate-500 font-mono">Simulador de Catálogo...</p>
                    </div>
                    <div className="mt-12 text-left space-y-4">
                        <h3 className="font-bold text-xl">Recursos Incluídos:</h3>
                        <p>• Listagem de categorias e produtos.</p>
                        <p>• Botão de compra direta para WhatsApp.</p>
                        <p>• Galeria de fotos de produtos.</p>
                        <p>• Gerenciamento simples de estoque/preços.</p>
                    </div>
                </div>
            </main>
            <Footer />
            <ChatAssistant />
        </div>
    );
};

export default CatalogExamplePage;
