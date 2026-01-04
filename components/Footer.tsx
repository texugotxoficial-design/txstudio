
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-8 transition-colors duration-300">
            <div className="layout-container px-4 md:px-10 flex justify-center">
                <div className="layout-content-container flex flex-col max-w-[1280px] w-full gap-10">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        {/* Brand */}
                        <div className="flex flex-col gap-4 max-w-sm">
                            <div className="flex items-center gap-3 text-white">
                                <div className="flex items-center justify-center size-8 rounded bg-primary-blue/20 text-primary-blue">
                                    <span className="material-symbols-outlined text-[20px]">smartphone</span>
                                </div>
                                <h2 className="text-white text-lg font-bold">LocalPro</h2>
                            </div>
                            <p className="text-text-secondary-dark text-sm leading-relaxed">
                                Transformamos a presença digital do seu negócio com aplicativos modernos, rápidos e focados em resultados.
                            </p>
                        </div>
                        {/* Links */}
                        <div className="flex flex-wrap gap-10 md:gap-20">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold">Empresa</h4>
                                <div className="flex flex-col gap-2 text-sm">
                                    <Link className="text-text-secondary-dark hover:text-primary-blue transition-colors" to="/">Início</Link>
                                    <Link className="text-text-secondary-dark hover:text-primary-blue transition-colors" to="/servicos">Serviços</Link>
                                    <Link className="text-text-secondary-dark hover:text-primary-blue transition-colors" to="/discord-bots">Bots Discord</Link>
                                    <Link className="text-text-secondary-dark hover:text-primary-blue transition-colors" to="/sobre">Sobre nós</Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold">Suporte</h4>
                                <div className="flex flex-col gap-2 text-sm">
                                    <Link className="text-text-secondary-dark hover:text-primary-blue transition-colors" to="/#contact">Contato</Link>
                                    <a className="text-text-secondary-dark hover:text-primary-blue transition-colors" href="#">Ajuda</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>© 2024 LocalPro. Todos os direitos reservados.</p>
                        <p>Desenvolvido com tecnologia de ponta.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
