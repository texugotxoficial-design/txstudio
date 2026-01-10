import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';
import ReflectiveButton from '../../components/ReflectiveButton';

const RestaurantPage: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177?text=Olá! Gostaria de saber mais sobre o aplicativo para Restaurantes.', '_blank');
    };

    return (
        <div className="bg-bg-dark min-h-screen text-white transition-colors duration-300">
            <Navbar />
            <main className="pt-32 pb-20">
                {/* Hero section */}
                <section className="px-6 mb-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="flex-1 text-center lg:text-left">
                            <ScrollReveal direction="right">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 mx-auto lg:mx-0">
                                    <span className="size-2 rounded-full bg-accent animate-pulse"></span>
                                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">Gastronomia Digital TX</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">
                                    VUE DO SEU <br /> <span className="text-gradient">PRÓPRIO</span> CARDÁPIO.
                                </h1>
                                <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 font-medium leading-relaxed italic">
                                    "Apresentamos a solução definitiva para alta gastronomia. Cardápios interativos que não apenas informam, mas despertam o desejo imediato de consumo."
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    <ReflectiveButton
                                        size="lg"
                                        onClick={handleWhatsAppClick}
                                    >
                                        REDEFINIR MEU RESTAURANTE
                                    </ReflectiveButton>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="flex-1 w-full max-w-[500px]">
                            <ScrollReveal direction="left" delay={0.2}>
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative aspect-square rounded-[3rem] bg-[#0B0E14] border border-white/5 overflow-hidden shadow-2xl">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <div className="glass-effect-dark border-white/10 p-6 rounded-2xl">
                                                <div className="flex items-center gap-4 mb-3 text-accent">
                                                    <span className="material-symbols-outlined">restaurant_menu</span>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Menu Interativo v2.0</span>
                                                </div>
                                                <p className="text-xs text-slate-300 italic font-medium">"Reduzimos o tempo de pedido em até 40% com nossa interface express."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: 'lunch_dining', title: 'Vitrine Gourmet', desc: 'Fotos em alta definição que valorizam a estética dos seus pratos.' },
                            { icon: 'shopping_cart_checkout', title: 'WhatsApp Direct', desc: 'Pedidos organizados enviados diretamente para o seu chat de atendimento.' },
                            { icon: 'qr_code_2', title: 'QR Code TX', desc: 'Acesse o cardápio instantaneamente em cada mesa com tecnologia de elite.' }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-10 rounded-[3rem] glass-effect-dark border-white/5 hover:border-accent/30 transition-all group">
                                    <div className="size-14 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mb-8 border border-accent/20 transition-transform group-hover:scale-110">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed italic">"{item.desc}"</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Automation Highlight */}
                <section className="px-6 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <div className="relative bg-[#0B0E14] rounded-[4rem] p-12 lg:p-20 text-center flex flex-col items-center border border-white/5 overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-50"></div>
                                <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight tracking-tighter uppercase relative z-10">LIDERE O MERCADO <br /> <span className="text-gradient">GASTRONÔMICO.</span></h2>
                                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 italic max-w-2xl relative z-10">
                                    "A era digital não espera. Coloque seu restaurante na vanguarda tecnológica com a TX Digital Studio."
                                </p>
                                <ReflectiveButton
                                    variant="accent"
                                    size="lg"
                                    onClick={handleWhatsAppClick}
                                >
                                    INICIAR MEU PROJETO
                                </ReflectiveButton>
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
