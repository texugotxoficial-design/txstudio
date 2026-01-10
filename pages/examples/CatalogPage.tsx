import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import ReflectiveButton from '../../components/ReflectiveButton';

const CatalogPage: React.FC = () => {
    const products = [
        { id: 1, name: 'TX Onyx Watch', price: 'R$ 2.450', category: 'Accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop' },
        { id: 2, name: 'Pure Sound Pro', price: 'R$ 1.890', category: 'Audio', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop' },
        { id: 3, name: 'Vantage Lens', price: 'R$ 3.200', category: 'Photography', img: 'https://images.unsplash.com/photo-1526170315870-efeca63c5d53?q=80&w=2070&auto=format&fit=crop' },
        { id: 4, name: 'Minimalist Wallet', price: 'R$ 450', category: 'Leather', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop' },
    ];

    return (
        <div className="bg-[#f2f2f2] min-h-screen text-[#111] selection:bg-accent selection:text-white">
            <Navbar />

            {/* Commercial Hero */}
            <header className="relative py-32 bg-white flex flex-col items-center justify-center overflow-hidden border-b border-black/5">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12" />
                <div className="max-w-6xl w-full px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <ScrollReveal direction="left">
                            <span className="text-accent font-black uppercase text-[10px] tracking-widest mb-6 block">High-End Retail System</span>
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                                NEXT GEN <br /> <span className="text-accent underline decoration-4 underline-offset-8">COMMERCE.</span>
                            </h1>
                            <p className="text-slate-500 text-lg mb-10 max-w-lg font-medium leading-relaxed">
                                Transforme seu estoque em uma galeria de desejo. Performance de carregamento ultra-rápida e conversão otimizada.
                            </p>
                            <div className="flex gap-4">
                                <ReflectiveButton variant="accent">
                                    CONHECER PLATAFORMA
                                </ReflectiveButton>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="flex-1">
                        <ScrollReveal direction="right">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                                    alt="Commercial Showcase"
                                    className="rounded-[2.5rem] shadow-2xl relative z-10 border-4 border-white"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </header>

            {/* Product Gallery */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
                        <ScrollReveal>
                            <h2 className="text-3xl font-black uppercase tracking-tighter">COLEÇÃO <span className="text-accent">VITRINE</span></h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="flex gap-3 bg-white p-2 rounded-2xl shadow-sm border border-black/5">
                                {['Todos', 'Tech', 'Moda', 'Design'].map(cat => (
                                    <button key={cat} className="px-5 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 rounded-xl transition-colors">
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((p, idx) => (
                            <ScrollReveal key={p.id} delay={idx * 0.1}>
                                <div className="group bg-white rounded-[2rem] overflow-hidden p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-accent/10">
                                    <div className="aspect-square bg-[#f8f8f8] rounded-2xl overflow-hidden mb-6 relative">
                                        <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 right-4 translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
                                            <button className="size-10 rounded-full bg-white shadow-lg flex items-center justify-center text-accent">
                                                <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="px-2 pb-2">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{p.category}</p>
                                        <h3 className="text-lg font-black uppercase tracking-tighter mb-4">{p.name}</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-black">{p.price}</span>
                                            <button className="text-[10px] font-bold text-accent uppercase tracking-widest border-b-2 border-accent">Detalhes</button>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* High-End Feature Section */}
            <section className="py-24 bg-white border-y border-black/5 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 w-full order-2 lg:order-1">
                            <ScrollReveal direction="left">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-square rounded-[2rem] overflow-hidden bg-accent/10 flex items-center justify-center p-8 text-center flex-col">
                                        <span className="material-symbols-outlined text-4xl text-accent mb-4">bolt</span>
                                        <p className="font-black uppercase text-xs">Load Ultra-Rápido</p>
                                    </div>
                                    <div className="aspect-square rounded-[2rem] overflow-hidden bg-primary/10 flex items-center justify-center p-8 text-center flex-col">
                                        <span className="material-symbols-outlined text-4xl text-primary mb-4">analytics</span>
                                        <p className="font-black uppercase text-xs">SEO Avançado</p>
                                    </div>
                                    <div className="col-span-2 h-40 rounded-[2rem] overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50" alt="Tech Dashboard" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                            <p className="text-white font-black uppercase tracking-[0.2em]">Data-Driven Design</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
                            <ScrollReveal direction="right">
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 italic">VENDA MAIS COM <br /> <span className="text-accent underline underline-offset-8">TECNOLOGIA.</span></h2>
                                <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
                                    Nossos catálogos inteligentes utilizam PWA e SSR para garantir que nenhum cliente desista da compra por lentidão. Layouts desenhados para o clique.
                                </p>
                                <ReflectiveButton variant="primary">
                                    QUERO ESTE SISTEMA
                                </ReflectiveButton>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CatalogPage;
