
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';

const CatalogExamplePage: React.FC = () => {
    return (
        <div className="bg-[#f8fafc] min-h-screen text-slate-900 font-display selection:bg-blue-100">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* Hero Section - Modern Store Site Feel */}
                <div className="layout-container px-4 mb-24">
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10"></div>
                        <img
                            src="/brain/06d3e75a-25c1-474c-8acc-15f3c6dec5d8/modern_catalog_store_concept_1767621149188.png"
                            alt="Modern Catalog Store Concept"
                            className="w-full h-[550px] object-cover object-center opacity-90"
                        />
                        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-20 max-w-2xl">
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl">
                                    <span className="material-symbols-outlined text-sm">local_mall</span>
                                    Catálogo Digital 4.0
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tighter text-slate-900">
                                    Sua Loja, <br />
                                    <span className="text-primary-blue underline decoration-slate-200 underline-offset-8">24 Horas.</span>
                                </h1>
                                <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                                    Uma plataforma de vendas completa que integra seu estoque físico ao digital de forma automática e pedidos via WhatsApp.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-primary-blue hover:bg-blue-600 text-white font-black py-4 px-10 rounded-xl transition-all shadow-xl shadow-blue-100 uppercase tracking-widest text-xs">
                                        Explorar Coleção
                                    </button>
                                    <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-black py-4 px-10 rounded-xl transition-all border border-slate-200 uppercase tracking-widest text-xs">
                                        Ver Ofertas
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Automation & Mobile Concept */}
                <div className="layout-container px-4 mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative flex justify-center">
                            {/* Decorative element */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-blue-100 rounded-full blur-[120px] pointer-events-none opacity-60"></div>

                            {/* Device Mockup */}
                            <ScrollReveal direction="left">
                                <div className="relative w-[300px] h-[610px] bg-white rounded-[3.5rem] border-[10px] border-slate-100 shadow-3xl overflow-hidden z-10">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-100 rounded-b-3xl z-40"></div>

                                    <div className="w-full h-full bg-slate-50 overflow-y-auto no-scrollbar pt-10">
                                        {/* App Header */}
                                        <div className="px-5 py-4 flex items-center justify-between bg-white border-b border-slate-100 sticky top-0 z-30">
                                            <div className="flex items-center gap-2">
                                                <div className="size-8 bg-black rounded-lg flex items-center justify-center text-white font-black text-xs">T.</div>
                                                <span className="text-[10px] font-black tracking-tighter">TREND LOJA</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="material-symbols-outlined text-sm text-slate-400">search</span>
                                                <span className="material-symbols-outlined text-sm text-slate-400">shopping_bag</span>
                                            </div>
                                        </div>

                                        {/* Product Feed */}
                                        <div className="p-4 space-y-6 pb-24">
                                            <div className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm">
                                                <div className="aspect-[4/3] bg-slate-200 animate-pulse"></div>
                                                <div className="p-4">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="text-[11px] font-black">Headphones Premium V8</h4>
                                                        <span className="text-[10px] font-black text-blue-600">R$ 299</span>
                                                    </div>
                                                    <button className="w-full mt-3 bg-slate-900 text-white py-2 rounded-lg text-[8px] font-black uppercase tracking-widest">Adicionar ao Carrinho</button>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                {[1, 2].map(i => (
                                                    <div key={i} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                                                        <div className="aspect-square bg-slate-100 rounded-lg mb-3"></div>
                                                        <div className="h-2 w-16 bg-slate-100 rounded mb-1"></div>
                                                        <div className="h-3 w-8 bg-blue-50 rounded"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Floating Shortcut */}
                                        <div className="absolute bottom-6 right-6 z-40">
                                            <div className="size-10 bg-green-500 rounded-full shadow-lg shadow-green-200 flex items-center justify-center text-white border-2 border-white">
                                                <span className="material-symbols-outlined text-lg">chat</span>
                                            </div>
                                        </div>

                                        {/* Navigation */}
                                        <div className="absolute bottom-0 inset-x-0 h-16 bg-white/80 backdrop-blur-md border-t border-slate-100 flex justify-around items-center px-4 z-30">
                                            {['grid_view', 'category', 'home', 'favorite', 'settings'].map((icon, i) => (
                                                <span key={i} className={`material-symbols-outlined text-lg ${i === 2 ? 'text-black font-bold' : 'text-slate-300'}`}>{icon}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal direction="right">
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-4xl font-black mb-6 leading-tight">Venda Mais, <br /> Trabalhe Menos.</h2>
                                    <p className="text-slate-500 text-lg leading-relaxed">
                                        Nossa plataforma automatiza o processo de venda. O cliente navega pelo catálogo, escolhe os produtos e você recebe o pedido pronto no WhatsApp, com descrição e código de referência.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { title: "Categorias Dinâmicas", desc: "Organize seus produtos de forma lógica e rápida de encontrar.", icon: "list_alt" },
                                        { title: "Dashboard Administrativo", desc: "Sua área de controle para gerenciar estoque, preços e promoções.", icon: "query_stats" },
                                        { title: "Integração Instantânea", desc: "Compartilhe links diretores de produtos únicos em suas redes sociais.", icon: "share" }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-slate-200 transition-all group">
                                            <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-primary-split-blue">{feature.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 mb-1">{feature.title}</h4>
                                                <p className="text-sm text-slate-500">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="layout-container px-4">
                    <ScrollReveal>
                        <div className="p-16 rounded-[3rem] bg-slate-950 text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 size-64 bg-primary-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 size-64 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">Chega de Enviar Listas Estáticas.</h2>
                            <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
                                Modernize seu negócio com um catálogo digital que realmente vende. Experiência de compra premium para seus clientes.
                            </p>
                            <Link to="/negocios/comercio" className="bg-primary-blue hover:bg-blue-600 text-white font-black py-5 px-12 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-blue-500/20 uppercase tracking-widest text-sm inline-flex items-center gap-3">
                                Ativar meu Catálogo Agora
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

export default CatalogExamplePage;
