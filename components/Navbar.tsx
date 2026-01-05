
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const menuItems = [
        { name: 'Início', path: '/' },
        { name: 'Planos Apps', path: '/planos-apps' },
        { name: 'Planos Bots', path: '/planos-bots' },
        { name: 'Serviços', path: '/servicos' },
        { name: 'Funcionalidades', path: '/funcionalidades' },
        { name: 'Sobre', path: '/sobre' },
    ];

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177', '_blank'); // Substitua pelo número real
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-xl transition-colors duration-300">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 flex flex-1 justify-center py-3">
                    <div className="layout-content-container flex w-full max-w-[1280px] items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 text-white">
                            <div className="flex items-center justify-center size-10 rounded-lg bg-primary-blue/20 text-primary-blue">
                                <span className="material-symbols-outlined text-[24px]">smartphone</span>
                            </div>
                            <h2 className="text-white text-xl font-bold tracking-tight">LocalPro</h2>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex flex-1 justify-center gap-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    className={`${location.pathname === item.path
                                        ? 'text-primary-blue font-bold underline decoration-2 underline-offset-8'
                                        : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-blue dark:hover:text-white'
                                        } text-sm font-medium transition-all`}
                                    to={item.path}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleWhatsAppClick}
                                className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary-blue hover:bg-primary-blue/90 transition-all text-white text-sm font-bold shadow-[0_0_20px_rgba(37,106,244,0.3)]"
                            >
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[20px]">chat</span>
                                    <span className="truncate">WhatsApp</span>
                                </span>
                            </button>
                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden text-white"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-background-dark/95 backdrop-blur-xl border-b border-white/10 px-4 py-6 flex flex-col gap-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                className={`${location.pathname === item.path ? 'text-primary-blue' : 'text-slate-300'
                                    } text-lg font-medium`}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button
                            onClick={handleWhatsAppClick}
                            className="flex items-center justify-center rounded-lg h-12 bg-primary-blue text-white font-bold mt-2"
                        >
                            Falar no WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
