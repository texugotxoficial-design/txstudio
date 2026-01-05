
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';

const InstitutionalExamplePage: React.FC = () => {
    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
            <Navbar />
            <main className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <ScrollReveal>
                        <h1 className="text-4xl font-black mb-6">Exemplo: Aplicativo <span className="text-primary-blue">Institucional</span></h1>
                        <p className="text-lg text-slate-500">A vitrine perfeita para a história e valores da sua marca.</p>
                    </ScrollReveal>
                </div>
                <div className="max-w-4xl mx-auto bg-white dark:bg-white/5 rounded-3xl p-8 border border-black/5 dark:border-white/10 shadow-2xl">
                    <div className="aspect-[9/16] max-w-[300px] mx-auto bg-slate-100 dark:bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-xl overflow-hidden flex items-center justify-center">
                        <p className="text-xs text-slate-500 font-mono">Simulador de Interface...</p>
                    </div>
                    <div className="mt-12 text-left space-y-4">
                        <h3 className="font-bold text-xl">Recursos Incluídos:</h3>
                        <p>• Tela inicial impactante com sua logo.</p>
                        <p>• Página "Quem Somos" detalhada.</p>
                        <p>• Integração direta com Google Maps.</p>
                        <p>• Links sociais unificados.</p>
                    </div>
                </div>
            </main>
            <Footer />
            <ChatAssistant />
        </div>
    );
};

export default InstitutionalExamplePage;
