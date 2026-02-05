import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const FloatingNavbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', path: '/' },
        { name: 'Bots Discord', path: '/planos-bots' },
        { name: 'Web Services', path: '/web-services' },
        { name: 'Contato', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`flex items-center justify-between px-8 py-3 transition-all duration-300 border-x border-white/5 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-y border-white/10' : 'bg-transparent'}`}>

                    {/* Logo Tática */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/logo_tx.png" alt="TX Studio Logo" className="w-9 h-9 object-contain" />
                        <span className="text-lg font-black uppercase tracking-[0.2em] text-white">
                            TX<span className="text-primary italic">STUDIO</span>
                        </span>
                    </Link>

                    {/* Links de Navegação */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 relative group
                  ${location.pathname === link.path ? 'text-primary' : 'text-white/60 hover:text-white'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full 
                  ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Button to="/contact" size="sm" variant="outline" className="border-white/20 hover:border-primary px-8">
                            INICIAR FASE
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-6 h-4 flex flex-col justify-between items-end">
                            <span className={`w-full h-[1.5px] bg-primary transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                            <span className={`w-2/3 h-[1.5px] bg-primary transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-[1.5px] bg-primary transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-2xl font-black uppercase tracking-widest text-white hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button to="/contact" size="lg" variant="primary" className="mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                            CONTATE-NOS
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default FloatingNavbar;
