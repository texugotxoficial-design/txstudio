import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

// Gourmet Theme Assets (Unsplash)
const HERO_IMAGE = 'https://images.unsplash.com/photo-1550966842-30cae75a1d7c?q=80&w=2070&auto=format&fit=crop';
const SPECIAL_IMAGE = 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop';

const RestaurantExamplePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('especiais');

    const menuItems = {
        especiais: [
            { id: 1, name: 'Bife Wellington TX', price: 'R$ 145', desc: 'Filé mignon envolto em massa folhada dourada, duxelles de cogumelos e presunto parma.', img: 'https://images.unsplash.com/photo-1514355315815-2b64b0216b14?q=80&w=2070&auto=format&fit=crop' },
            { id: 2, name: 'Lagosta Termidor', price: 'R$ 210', desc: 'Cauda de lagosta gratinada com molho de vinho branco, mostarda e queijo gruyère.', img: 'https://images.unsplash.com/photo-1553243772-0a91516b27b8?q=80&w=2070&auto=format&fit=crop' },
        ],
        vinhos: [
            { id: 3, name: 'Grand Cru Cabernet', price: 'R$ 480', desc: 'Safra 2018. Notas intensas de frutas negras e carvalho francês.', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop' },
            { id: 4, name: 'Reserva Malbec Special', price: 'R$ 320', desc: 'Corpo robusto e final aveludado.', img: 'https://images.unsplash.com/photo-1553133149-14a5c6ca0773?q=80&w=2070&auto=format&fit=crop' },
        ]
    };

    return (
        <div className="bg-[#050505] min-h-screen text-slate-200 font-sans selection:bg-accent selection:text-white">
            <Navbar />

            {/* Hero - Gourmet Experience */}
            <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${HERO_IMAGE})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505] z-10" />

                <div className="relative z-20 text-center px-4">
                    <ScrollReveal direction="down">
                        <span className="text-accent font-black tracking-[0.5em] uppercase text-xs mb-4 block">Alta Gastronomia Digital</span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase">
                            GOURMET <br /> <span className="text-gradient">EXPERIENCE.</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.4}>
                        <p className="max-w-xl mx-auto text-slate-400 text-lg mb-8 italic">
                            A interface que desperta o paladar antes mesmo do primeiro pedido.
                        </p>
                    </ScrollReveal>
                </div>
            </header>

            {/* Menu Experience */}
            <section className="py-24 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        {/* Categories Sidebar */}
                        <div className="w-full md:w-64 space-y-4">
                            <h2 className="text-sm font-black text-white uppercase tracking-widest border-l-4 border-primary pl-4 mb-10">O CARDÁPIO</h2>
                            {['especiais', 'vinhos', 'entradas', 'sobremesas'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`w-full text-left py-4 px-6 rounded-2xl transition-all font-bold uppercase text-xs tracking-widest ${selectedCategory === cat
                                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                            : 'bg-white/5 text-slate-500 hover:bg-white/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Items Grid */}
                        <div className="flex-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedCategory}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                                >
                                    {menuItems[selectedCategory as keyof typeof menuItems]?.map((item) => (
                                        <div key={item.id} className="group relative bg-[#0B0E14] border border-white/5 rounded-[2rem] overflow-hidden hover:border-accent/30 transition-all duration-500">
                                            <div className="aspect-[16/10] overflow-hidden">
                                                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            </div>
                                            <div className="p-8">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="text-xl font-black text-white uppercase tracking-tighter">{item.name}</h3>
                                                    <span className="text-accent font-black">{item.price}</span>
                                                </div>
                                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">{item.desc}</p>
                                                <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
                                                    ADICIONAR AO PEDIDO
                                                </button>
                                            </div>
                                        </div>
                                    )) || (
                                            <div className="col-span-full py-20 text-center text-slate-600 font-bold uppercase tracking-widest">
                                                Expansão em breve...
                                            </div>
                                        )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chef Spotlight */}
            <section className="py-24 bg-[#0B0E14] border-y border-white/5">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <ScrollReveal direction="left">
                                <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Assinatura Gourmet</span>
                                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 italic">
                                    DESIGN <br /> <span className="text-gradient">SOFISTICADO.</span>
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    Nossas plataformas para restaurantes não são apenas cardápios digitais: são experiências imersivas que valorizam cada insumo e detalhe do seu serviço.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-white">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        <span className="font-bold text-sm tracking-wide uppercase">Fotografia de Alta Performance</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        <span className="font-bold text-sm tracking-wide uppercase">UX Intuitiva de Pedidos</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        <span className="font-bold text-sm tracking-wide uppercase">Gestão de Reservas VIP</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="flex-1 relative">
                            <ScrollReveal direction="right">
                                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={SPECIAL_IMAGE} alt="Chef Table" className="w-full grayscale hover:grayscale-0 transition-all duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-10 left-10">
                                        <p className="text-white text-3xl font-black uppercase tracking-tighter">PREMIUM <br /> STANDARDS.</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default RestaurantExamplePage;
