
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import ScrollReveal from '../components/ScrollReveal';

const PlanosAppsPage: React.FC = () => {
    const handleWhatsAppClick = (plan: string) => {
        window.open(`https://wa.me/5516991122177?text=Olá! Gostaria de contratar o plano ${plan} para meu negócio.`, '_blank');
    };

    const plans = [
        {
            name: "Informativo",
            price: "R$ 297",
            desc: "Ideal para apresentação institucional.",
            features: ["História da Empresa", "Localização GPS", "Redes Sociais", "Sem Mensalidade"],
            color: "blue"
        },
        {
            name: "Catálogo / Delivery",
            price: "R$ 597",
            desc: "Para quem vende produtos ou alimentação.",
            features: ["Cardápio/Catálogo Completo", "Pedidos no WhatsApp", "Galeria de Fotos", "Sem Mensalidade"],
            color: "orange",
            popular: true
        },
        {
            name: "Personalizado",
            price: "R$ 997",
            desc: "Projeto sob medida para sua necessidade.",
            features: ["Design Exclusivo", "Funcionalidades Extras", "Suporte Prioritário", "Sem Mensalidade"],
            color: "purple"
        }
    ];

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
            <Navbar />
            <main className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Planos para <span className="text-primary-blue">Aplicativos</span></h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400">Escolha o modelo ideal para digitalizar o seu negócio físico.</p>
                    </ScrollReveal>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className={`p-8 rounded-3xl bg-white dark:bg-white/5 border-2 ${plan.popular ? 'border-primary-blue shadow-xl' : 'border-black/5 dark:border-white/10'} flex flex-col h-full relative`}>
                                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-blue text-white text-[10px] font-black px-4 py-1 rounded-full uppercase">Mais Popular</span>}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>
                                <div className="text-4xl font-black mb-8">{plan.price}</div>
                                <ul className="flex-1 space-y-4 mb-8">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => handleWhatsAppClick(plan.name)}
                                    className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary-blue text-white shadow-lg' : 'bg-black/5 dark:bg-white/10 text-primary-blue dark:text-white'}`}
                                >
                                    Contratar Agora
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </main>
            <Footer />
            <ChatAssistant />
        </div>
    );
};

export default PlanosAppsPage;
