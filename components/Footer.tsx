import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-dark border-t border-white/5 pt-20 pb-10 transition-colors duration-300 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary border border-white/10 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src="/logo_tx.jpg"
                                    alt="Logo TX"
                                    className="w-full h-full object-cover opacity-80"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (!target.src.includes('raw.githubusercontent.com')) {
                                            target.src = "https://raw.githubusercontent.com/texugotxoficial-design/txdigitalstudio/main/public/logo_tx.jpg";
                                        }
                                    }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-white text-2xl font-black tracking-tighter uppercase italic">TX<span className="text-primary tracking-normal not-italic"> Digital Studio</span></h2>
                                <span className="text-[10px] text-slate-500 font-black tracking-[0.4em] uppercase">Built for the future</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-base leading-relaxed max-w-sm font-medium">
                            Esculpindo o futuro digital com design de elite e tecnologia de alta performance. Transformamos seu negócio em uma autoridade inquestionável.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="size-10 rounded-full glass-effect-dark border-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="size-10 rounded-full glass-effect-dark border-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="size-10 rounded-full glass-effect-dark border-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        <div className="space-y-6">
                            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em]">Navegação</h4>
                            <ul className="flex flex-col gap-4">
                                <li><Link to="/planos-apps" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Planos de Apps</Link></li>
                                <li><Link to="/discord-bots" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Discord Bots</Link></li>
                                <li><Link to="/servicos" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Nossos Serviços</Link></li>
                                <li><Link to="/sobre" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">A TX Studio</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em]">Suporte & Legal</h4>
                            <ul className="flex flex-col gap-4">
                                <li><Link to="/#contact" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Atendimento VIP</Link></li>
                                <li><a href="#" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">FAQ</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Privacidade</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-primary text-sm font-medium transition-colors">Termos de Uso</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-xs font-medium">
                        © 2026 TX Digital Studio. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <p className="text-slate-500 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                            <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                            Systems Operational
                        </p>
                        <div className="h-4 w-px bg-white/10 hidden md:block"></div>
                        <p className="text-slate-600 text-[10px] font-bold">CNPJ: 00.000.000/0000-00</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
