import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-24 border-t border-white/5 relative overflow-hidden mesh-grid">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-4 mb-10 group">
                            <img src="/logo_tx.png" alt="TX Studio Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                            <span className="text-xl font-black uppercase tracking-[0.25em] text-white">
                                TX<span className="text-primary italic">STUDIO</span>
                            </span>
                        </Link>
                        <p className="text-white/30 max-w-sm text-[10px] font-bold uppercase tracking-[0.2em] leading-[2] mb-12">
                            Engenharia digital estratégica para marcas que buscam <span className="text-white">domínio absoluto</span> no mercado de alto padrão.
                        </p>
                        <div className="flex gap-10">
                            {[
                                { icon: 'fab fa-discord', link: '#' },
                                { icon: 'fab fa-instagram', link: '#' },
                                { icon: 'fab fa-linkedin-in', link: '#' }
                            ].map((social, i) => (
                                <a key={i} href={social.link} className="text-white/20 hover:text-primary transition-all duration-300 hover:scale-110">
                                    <i className={`${social.icon} text-lg`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sistema de Navegação */}
                    <div>
                        <h4 className="text-[9px] font-black uppercase tracking-[0.5em] text-primary mb-12 opacity-80">Arquitetura</h4>
                        <ul className="space-y-6">
                            {[
                                { name: 'Terminal Home', path: '/' },
                                { name: 'Módulos Bot', path: '/planos-bots' },
                                { name: 'Web Handlers', path: '/web-services' },
                                { name: 'Uplink Contato', path: '/contact' }
                            ].map(item => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all hover:translate-x-2 inline-block">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Status Operacional */}
                    <div>
                        <h4 className="text-[9px] font-black uppercase tracking-[0.5em] text-primary mb-12 opacity-80">Rede Global</h4>
                        <div className="space-y-8">
                            <div className="group">
                                <div className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-2 group-hover:text-white/40 transition-colors">Protocolo Ativo</div>
                                <div className="text-[11px] font-bold text-white tracking-widest uppercase group-hover:text-primary transition-colors">TX_ULTRA_v5.0</div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/[0.03] p-4 border-l border-green-500/50">
                                <div className="size-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                                <span className="text-[9px] font-black text-green-500 uppercase tracking-[0.3em]">Domínio Estável</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rodapé Final */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.4em]">
                        © {new Date().getFullYear()} TX DIGITAL STUDIO. TODOS OS DIREITOS RESERVADOS.
                    </p>
                    <div className="flex gap-12">
                        <a href="#" className="text-[8px] font-black text-white/10 uppercase tracking-[0.3em] hover:text-white transition-colors">POLÍTICA DE DADOS</a>
                        <a href="#" className="text-[8px] font-black text-white/10 uppercase tracking-[0.3em] hover:text-white transition-colors">TERMOS LEGAIS</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
