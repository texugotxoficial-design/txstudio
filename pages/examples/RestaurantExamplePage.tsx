
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

const RestaurantExamplePage: React.FC = () => {
    return (
        <div className="bg-[#020617] min-h-screen text-white font-display">
            <Navbar />
            <main className="pt-20 pb-20">
                <div className="layout-container px-4 text-center mb-16">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-7xl font-black mb-6">Deguste a <span className="text-orange-500">Experiência</span></h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Um exemplo real de como seu restaurante pode se destacar no mundo digital com elegância e praticidade.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="flex justify-center mb-24 relative px-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
                    <ScrollReveal delay={0.2}>
                        <div className="w-full max-w-[320px] h-[650px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col">
                            {/* Mobile Camera Notch */}
                            <div className="absolute top-0 w-full h-7 bg-slate-800 flex justify-center items-center z-20">
                                <div className="w-16 h-4 bg-black rounded-full"></div>
                            </div>

                            <div className="flex-1 bg-white text-slate-900 overflow-y-auto custom-scrollbar pt-10">
                                <header className="p-6 text-center border-b border-slate-100 mb-4">
                                    <div className="w-20 h-20 bg-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-3xl font-black rotate-3 shadow-lg">B</div>
                                    <h2 className="font-black text-2xl tracking-tighter">Bistrô & Cia</h2>
                                    <p className="text-xs text-orange-600 font-bold uppercase tracking-widest mt-1">Cozinha Artesanal</p>
                                </header>

                                <div className="px-5 space-y-8 pb-10">
                                    <section>
                                        <h3 className="font-black text-sm uppercase tracking-tighter text-slate-400 mb-4 flex items-center gap-2">
                                            <span className="w-1 h-3 bg-orange-500 rounded-full"></span>
                                            Destaques do Chef
                                        </h3>
                                        <div className="space-y-4">
                                            {[
                                                { name: "Burguer Trufado", price: "R$ 48,90", desc: "Blend 200g, queijo brie e mel", icon: "🍔" },
                                                { name: "Pasta ao Pesto", price: "R$ 42,00", desc: "Manjericão fresco e nozes", icon: "🍝" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 transition-colors">
                                                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">{item.icon}</div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-start">
                                                            <h4 className="text-sm font-bold">{item.name}</h4>
                                                            <span className="text-xs font-black text-orange-600">{item.price}</span>
                                                        </div>
                                                        <p className="text-[10px] text-slate-500 line-clamp-1">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <div className="p-4 bg-orange-500 rounded-2xl text-white shadow-xl shadow-orange-500/20">
                                        <h4 className="font-black text-sm mb-1">Peça agora no WhatsApp</h4>
                                        <p className="text-[10px] opacity-80 mb-3">Receba em no máximo 45 minutos</p>
                                        <button className="w-full bg-white text-orange-500 font-black py-3 rounded-lg text-xs flex items-center justify-center gap-2">
                                            FAZER PEDIDO
                                            <span className="material-symbols-outlined text-sm">send</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Features Highlight */}
                <div className="layout-container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: "qr_code", title: "QR Code nas Mesas", desc: "Seu cliente acessa instantaneamente sem baixar nada." },
                            { icon: "schedule", title: "Horários de Pico", desc: "Gerencie a visibilidade de itens conforme seu estoque." },
                            { icon: "payments", title: "Taxa Zero", desc: "Venda direta pelo WhatsApp sem intermediários ou taxas." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                                <span className="material-symbols-outlined text-5xl text-orange-500 mb-4">{item.icon}</span>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <Link to="/negocios/restaurantes" className="inline-flex items-center gap-2 bg-white text-black font-black py-4 px-10 rounded-xl hover:scale-105 transition-all">
                        Quero o meu Agora
                        <span className="material-symbols-outlined">rocket_launch</span>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RestaurantExamplePage;
