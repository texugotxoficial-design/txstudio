
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';

const RestaurantExamplePage: React.FC = () => {
    return (
        <div className="bg-[#020617] min-h-screen text-white font-display selection:bg-orange-500/30">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* Hero Section - Gourmet Site Feel */}
                <div className="layout-container px-4 mb-24">
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900/40 backdrop-blur-sm shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                        <img
                            src="/brain/06d3e75a-25c1-474c-8acc-15f3c6dec5d8/gourmet_restaurant_concept_1767621100382.png"
                            alt="Gourmet Restaurant Concept"
                            className="w-full h-[600px] object-cover object-center opacity-70"
                        />
                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-20">
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-500 text-sm font-black uppercase tracking-widest mb-6">
                                    <span className="material-symbols-outlined text-sm">restaurant</span>
                                    Experiência Gastronômica Digital
                                </div>
                                <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
                                    BISTRÔ <br />
                                    <span className="text-orange-500">& CIA.</span>
                                </h1>
                                <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed italic font-serif">
                                    "Onde o sabor encontra a sofisticação tecnológica. Peça, reserve e encante-se."
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-10 rounded-xl transition-all shadow-xl shadow-orange-500/25 flex items-center gap-2 uppercase tracking-widest text-sm">
                                        Ver Cardápio Social
                                        <span className="material-symbols-outlined">menu_book</span>
                                    </button>
                                    <button className="bg-white/5 hover:bg-white/10 text-white font-black py-4 px-10 rounded-xl transition-all border border-white/10 backdrop-blur-md uppercase tracking-widest text-sm">
                                        Fazer Reserva
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Integration Details - App vs Site */}
                <div className="layout-container px-4 mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative order-2 lg:order-1 flex justify-center">
                            {/* Decorative Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none"></div>

                            {/* Mobile Device Mockup */}
                            <ScrollReveal direction="left">
                                <div className="relative w-[310px] h-[630px] bg-[#020617] rounded-[3.5rem] border-[10px] border-slate-800 shadow-3xl overflow-hidden ring-4 ring-slate-800/30 z-10 scale-105">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-40"></div>

                                    <div className="w-full h-full bg-white overflow-y-auto no-scrollbar pt-10 text-slate-900">
                                        {/* App Menu Header */}
                                        <div className="p-6 text-center">
                                            <div className="size-16 bg-orange-500 rounded-2xl mx-auto mb-4 rotate-3 flex items-center justify-center text-white text-3xl font-black shadow-lg">B</div>
                                            <h3 className="font-black text-2xl tracking-tighter">Bistrô & Cia</h3>
                                            <div className="text-[10px] text-orange-600 font-black uppercase tracking-widest mt-1">Menu Digital V2.0</div>
                                        </div>

                                        {/* Categories */}
                                        <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar mb-8">
                                            {['Entradas', 'Pratos', 'Sobremesas', 'Drinks'].map((cat, i) => (
                                                <span key={cat} className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap pb-2 border-b-2 ${i === 1 ? 'border-orange-500 text-slate-900' : 'border-transparent text-slate-400'}`}>
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Items */}
                                        <div className="px-6 space-y-6 pb-24">
                                            {[
                                                { name: "Risoto de Lagosta", price: "R$ 89,90", desc: "Arroz arbóreo, cauda de lagosta e açafrão.", img: "🦐" },
                                                { name: "Filet au Poivre", price: "R$ 72,00", desc: "Mignon selado com pimentas verdes.", img: "🥩" },
                                                { name: "Salmão Grelhado", price: "R$ 68,50", desc: "Acompanha legumes na manteiga de ervas.", img: "🐟" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
                                                    <div className="size-14 bg-white rounded-xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">{item.img}</div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-start mb-1">
                                                            <h4 className="text-sm font-black text-slate-900">{item.name}</h4>
                                                            <span className="text-xs font-black text-orange-600">{item.price}</span>
                                                        </div>
                                                        <p className="text-[10px] text-slate-500 leading-tight">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom Action */}
                                        <div className="absolute bottom-6 inset-x-6 z-30">
                                            <button className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl text-[10px] tracking-widest uppercase shadow-xl flex items-center justify-center gap-2">
                                                Finalizar Pedido (R$ 89,90)
                                                <span className="material-symbols-outlined text-sm">shopping_bag</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal direction="right">
                            <div className="order-1 lg:order-2 space-y-10">
                                <div>
                                    <h2 className="text-4xl font-black mb-6 leading-tight">Cardápio Inteligente <br /> no WhatsApp.</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Elimine PDF's pesados e sites lentos. Ofereça uma experiência de aplicativo rápida onde seu cliente faz o pedido direto pelo chat, sem taxas de marketplace.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { title: "QR Code nas Mesas", desc: "Acesso instantâneo sem necessidade de download ou login.", icon: "qr_code_2" },
                                        { title: "Gestão em Tempo Real", desc: "Altere preços e oculte itens esgotados em segundos pelo celular.", icon: "dashboard_customize" },
                                        { title: "Checkout Integrado", desc: "Carrinho de compras que envia o resumo completo para seu WhatsApp.", icon: "send_and_archive" }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-5 items-start">
                                            <div className="size-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                                <span className="material-symbols-outlined text-orange-500">{feature.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                                                <p className="text-sm text-slate-400">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Gallery Simulation Section */}
                <div className="layout-container px-4 text-center mb-32">
                    <ScrollReveal>
                        <h2 className="text-3xl font-black mb-12 uppercase tracking-widest text-slate-500">Galeria Vitrine</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 bg-slate-900/50 group relative">
                                    <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
                                    </div>
                                    <div className="w-full h-full bg-slate-800 animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                <div className="layout-container px-4">
                    <ScrollReveal>
                        <div className="p-16 rounded-[3rem] bg-gradient-to-br from-orange-600 to-orange-800 text-center relative overflow-hidden shadow-2xl shadow-orange-950">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">Sua Cozinha Merece Este Nível de Entrega.</h2>
                            <p className="text-orange-100 mb-10 text-lg max-w-2xl mx-auto">
                                Junte-se aos melhores restaurantes que já digitalizaram seu atendimento com a LocalPro.
                            </p>
                            <Link to="/negocios/restaurantes" className="bg-white text-orange-600 font-black py-5 px-12 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-widest text-sm inline-flex items-center gap-3">
                                Solicitar Demonstrativo Personalizado
                                <span className="material-symbols-outlined">rocket_launch</span>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </main>

            <Footer />
            <ChatAssistant />
        </div>
    );
};

export default RestaurantExamplePage;
