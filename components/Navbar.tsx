
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const location = useLocation();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Início', path: '/' },
        { name: 'Apps', path: '/planos-apps' },
        { name: 'Bots', path: '/discord-bots' },
        { name: 'Serviços', path: '/servicos' },
        { name: 'Demonstração', path: '/demonstracao' },
        { name: 'Sobre', path: '/sobre' },
    ];

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177', '_blank');
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 px-4 py-6 pointer-events-none">
            <nav className={`
                mx-auto max-w-5xl w-full pointer-events-auto
                transition-all duration-300 ease-in-out
                rounded-3xl border 
                ${isScrolled
                    ? 'glass-effect-dark py-3 px-6 shadow-2xl shadow-primary/10'
                    : 'bg-transparent py-4 px-8 border-transparent'}
            `}>
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 group-hover:rotate-6 transition-transform overflow-hidden border border-white/20">
                            <img src="/logo_tx.jpg" alt="Logo TX" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <h2 className="text-white text-xl font-black tracking-tighter uppercase italic">TX<span className="text-primary not-italic"> STUDIO</span></h2>
                            <span className="text-[10px] text-accent font-black uppercase tracking-[0.3em]">Design & High-Tech</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                className={`text-sm font-bold transition-all hover:scale-105 ${location.pathname === item.path
                                    ? 'text-white underline decoration-accent decoration-2 underline-offset-8'
                                    : 'text-slate-400 hover:text-white'
                                    }`}
                                to={item.path}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3">


                        {/* Mobile Menu Button */}
                        <button
                            className="p-2 text-white bg-white/10 rounded-lg md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3"
                    >
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                className={`text-base font-bold p-2 rounded-lg ${location.pathname === item.path ? 'bg-primary/20 text-white' : 'text-slate-300'
                                    }`}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </motion.div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
