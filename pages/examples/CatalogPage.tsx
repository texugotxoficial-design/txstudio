
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

const CatalogExamplePage: React.FC = () => {
    return (
        <div className="bg-[#020617] min-h-screen text-white font-display">
            <Navbar />
            <main className="pt-20 pb-20">
                <div className="layout-container px-4 text-center mb-16">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-7xl font-black mb-6">Seu <span className="text-primary-blue">Catálogo</span> Vivo</h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Transforme seu estoque em uma experiência de compra irresistível e direta.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Mobile Mockup Section */}
                <div className="flex justify-center mb-24 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <ScrollReveal delay={0.2}>
                        <div className="w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden">
                            <div className="h-full pt-8 px-0 bg-slate-50 text-slate-900 overflow-y-auto custom-scrollbar">
                                <header className="px-4 mb-4 bg-white py-3 border-b flex justify-between items-center">
                                    <h2 className="font-black text-lg text-primary-blue">TrendLoja</h2>
                                    <span className="material-symbols-outlined">shopping_bag</span>
                                </header>
                                <div className="px-4 mb-6">
                                    <div className="relative">
                                        <input type="text" placeholder="Buscar produto..." className="w-full bg-white border border-slate-200 rounded-lg py-2 px-10 text-[10px]" disabled />
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs text-sm">search</span>
                                    </div>
                                </div>
                                <div className="px-4 grid grid-cols-2 gap-4">
                                    {[
                                        { name: "Smartwatch G-7", price: "R$ 199", img: "⌚" },
                                        { name: "Fone Bluetooth", price: "R$ 149", img: "🎧" },
                                        { name: "Carregador 30W", price: "R$ 89", img: "🔌" },
                                        { name: "Capa Premium", price: "R$ 45", img: "📱" }
                                    ].map((prod, i) => (
                                        <div key={i} className="bg-white rounded-xl p-2 border border-slate-100 shadow-sm">
                                            <div className="aspect-square bg-slate-50 rounded-lg flex items-center justify-center text-3xl mb-2">{prod.img}</div>
                                            <h4 className="text-[10px] font-bold truncate">{prod.name}</h4>
                                            <div className="flex justify-between items-center mt-1">
                                                <span className="text-[10px] text-blue-600 font-black">{prod.price}</span>
                                                <span className="material-symbols-outlined text-xs bg-primary-blue text-white rounded p-0.5">add</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 px-4 pb-4">
                                    <div className="bg-primary-blue text-white p-4 rounded-xl flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] opacity-70 uppercase font-black">2 itens no carrinho</span>
                                            <span className="text-xs font-black">R$ 348,00</span>
                                        </div>
                                        <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded">Fechar Pedido</span>
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
                            { icon: "bolt", title: "Carga rápida", desc: "Produtos carregam instantaneamente para não perder a venda." },
                            { icon: "inventory_2", title: "Gestão Simples", desc: "Atualize fotos e preços sem precisar de programador." },
                            { icon: "notifications_active", title: "Alertas no Zap", desc: "O pedido chega formatado com todos os links dos produtos." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-primary-blue/30 transition-all">
                                <span className="material-symbols-outlined text-5xl text-primary-blue mb-4">{item.icon}</span>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <Link to="/negocios/comercio" className="inline-flex items-center gap-2 bg-primary-blue text-white font-black py-4 px-10 rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary-blue/20">
                        Lançar meu Catálogo
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CatalogExamplePage;
