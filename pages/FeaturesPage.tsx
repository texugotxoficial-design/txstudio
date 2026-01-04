
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

import ScrollReveal from '../components/ScrollReveal';

const FeaturesPage: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177', '_blank'); // Substitua pelo número real
    };

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen font-display text-text-primary-light dark:text-text-primary-dark antialiased transition-colors duration-300">
            <div className="relative flex min-h-screen w-full flex-col group/design-root">
                <Navbar />

                <main className="flex-grow">
                    <div className="layout-container flex w-full flex-col bg-[#020617] relative overflow-hidden">
                        {/* Background Glows */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none z-0">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-[100px]"></div>
                        </div>
                        <div className="px-4 md:px-10 flex flex-1 justify-center py-10 md:py-20 text-white relative z-10">
                            <ScrollReveal>
                                <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center text-center">
                                    <div className="inline-flex items-center justify-center rounded-full bg-primary-blue/10 px-3 py-1 mb-6 border border-primary-blue/20">
                                        <span className="text-xs font-semibold text-primary-blue uppercase tracking-wider">Recursos Premium</span>
                                    </div>
                                    <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight tracking-tight px-4 pb-4">
                                        Tudo o que seu negócio<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-purple-400">precisa para crescer</span>
                                    </h2>
                                    <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed max-w-2xl px-4">
                                        Nossa plataforma oferece um conjunto completo de ferramentas projetadas para digitalizar sua empresa, atrair novos clientes e simplificar o contato diário via WhatsApp.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="layout-container flex w-full flex-col pb-20">
                        <div className="px-4 md:px-10 flex flex-1 justify-center">
                            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 mt-8">
                                    <ScrollReveal delay={0.1}>
                                        <div className="group flex flex-col gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark p-6 transition-all duration-300 hover:border-primary-blue/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:-translate-y-1 shadow-sm h-full">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                                                <span className="material-symbols-outlined text-primary-blue group-hover:text-white" style={{ fontSize: '28px' }}>apartment</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-text-primary-light dark:text-white text-lg font-bold leading-tight">Tela Institucional</h3>
                                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                    Apresente a história, missão e valores da sua empresa de forma profissional e envolvente para ganhar confiança.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.2}>
                                        <div className="group flex flex-col gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark p-6 transition-all duration-300 hover:border-primary-blue/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:-translate-y-1 shadow-sm h-full">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                                                <span className="material-symbols-outlined text-primary-blue group-hover:text-white" style={{ fontSize: '28px' }}>format_list_bulleted</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-text-primary-light dark:text-white text-lg font-bold leading-tight">Lista de Serviços</h3>
                                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                    Organize e destaque seus produtos e serviços em um catálogo interativo, claro e fácil de navegar.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.3}>
                                        <div className="group flex flex-col gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark p-6 transition-all duration-300 hover:border-primary-blue/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:-translate-y-1 shadow-sm h-full">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                                                <span className="material-symbols-outlined text-primary-blue group-hover:text-white" style={{ fontSize: '28px' }}>perm_media</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-text-primary-light dark:text-white text-lg font-bold leading-tight">Galeria de Imagens</h3>
                                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                    Exiba sua galeria de projetos e produtos com fotos de alta qualidade, otimizada para carregamento rápido.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.1}>
                                        <div className="group flex flex-col gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark p-6 transition-all duration-300 hover:border-primary-blue/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:-translate-y-1 shadow-sm h-full">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                                                <span className="material-symbols-outlined text-primary-blue group-hover:text-white" style={{ fontSize: '28px' }}>chat</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-text-primary-light dark:text-white text-lg font-bold leading-tight">Botão WhatsApp</h3>
                                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                    Facilite o contato com um botão flutuante ou fixo que redireciona o cliente automaticamente para o seu WhatsApp.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.2}>
                                        <div className="group flex flex-col gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark p-6 transition-all duration-300 hover:border-primary-blue/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:-translate-y-1 shadow-sm h-full">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                                                <span className="material-symbols-outlined text-primary-blue group-hover:text-white" style={{ fontSize: '28px' }}>location_on</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-text-primary-light dark:text-white text-lg font-bold leading-tight">Mapa e Localização</h3>
                                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                    Integração completa com Google Maps ou Waze para que seus clientes encontrem seu endereço físico sem esforço.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.3}>
                                        <div className="group flex flex-col gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark p-6 transition-all duration-300 hover:border-primary-blue/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:-translate-y-1 shadow-sm h-full">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                                                <span className="material-symbols-outlined text-primary-blue group-hover:text-white" style={{ fontSize: '28px' }}>share</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-text-primary-light dark:text-white text-lg font-bold leading-tight">Redes Sociais</h3>
                                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                    Conecte seu site ao Instagram, Facebook e LinkedIn, centralizando sua presença digital em um só lugar.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.1}>
                                        <div className="group flex flex-col gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark p-6 transition-all duration-300 hover:border-primary-blue/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:-translate-y-1 shadow-sm h-full">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                                                <span className="material-symbols-outlined text-primary-blue group-hover:text-white" style={{ fontSize: '28px' }}>palette</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-text-primary-light dark:text-white text-lg font-bold leading-tight">Layout Personalizado</h3>
                                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                    Design moderno e exclusivo, adaptado à identidade visual da sua marca, com cores e logos consistentes.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.2}>
                                        <div className="group flex flex-col gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark p-6 transition-all duration-300 hover:border-primary-blue/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:-translate-y-1 shadow-sm h-full">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                                                <span className="material-symbols-outlined text-primary-blue group-hover:text-white" style={{ fontSize: '28px' }}>update</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-text-primary-light dark:text-white text-lg font-bold leading-tight">Fácil Atualização</h3>
                                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                    Mantenha seus clientes informados. Atualize textos, imagens e serviços sempre que precisar, sem complicações.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.3}>
                                        <div className="group flex flex-col gap-4 rounded-xl border border-black/5 dark:border-white/10 bg-surface-light dark:bg-surface-dark p-6 transition-all duration-300 hover:border-primary-blue/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:-translate-y-1 shadow-sm h-full">
                                            <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors duration-300">
                                                <span className="material-symbols-outlined text-primary-blue group-hover:text-white" style={{ fontSize: '28px' }}>install_mobile</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-text-primary-light dark:text-white text-lg font-bold leading-tight">App e PWA</h3>
                                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                    Tecnologia híbrida que funciona como site e pode ser instalado no celular do cliente como um aplicativo nativo.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Discord Bot Section - NEW SERVICE */}
                    <div className="layout-container flex w-full flex-col bg-[#5865F2]/5 border-y border-[#5865F2]/10 py-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5865F2]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="px-4 md:px-10 flex flex-1 justify-center relative z-10">
                            <div className="layout-content-container flex flex-col lg:flex-row max-w-[1200px] flex-1 items-center gap-12 text-center lg:text-left">
                                <div className="flex-1 flex flex-col gap-6">
                                    <ScrollReveal direction="left">
                                        <div className="inline-flex self-center lg:self-start px-3 py-1 rounded-full bg-[#5865F2]/20 text-[#5865F2] text-xs font-bold uppercase tracking-wider border border-[#5865F2]/30">Diferencial</div>
                                        <h2 className="text-text-primary-light dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                            Bots para Discord: <span className="text-[#5865F2]">Automação sem Limites</span>
                                        </h2>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg font-normal leading-relaxed max-w-2xl">
                                            Vá além do básico. Oferecemos desenvolvimento de bots sob medida para integrar processos, gerenciar membros e automatizar vendas dentro do seu servidor.
                                        </p>
                                        <div className="flex justify-center lg:justify-start">
                                            <Link to="/discord-bots" className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl shadow-[#5865F2]/25 hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto lg:mx-0 w-fit">
                                                Conhecer Planos de Bots
                                            </Link>
                                        </div>
                                    </ScrollReveal>
                                </div>
                                <div className="flex-1 flex justify-center lg:justify-end">
                                    <ScrollReveal direction="right">
                                        <div className="relative w-full max-w-[400px] aspect-square bg-[#0B0E14] rounded-3xl border border-[#5865F2]/30 shadow-2xl flex items-center justify-center group overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/20 to-transparent"></div>
                                            <span className="material-symbols-outlined text-[150px] text-[#5865F2] group-hover:scale-110 transition-transform duration-500">terminal</span>
                                            <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                                                <div className="flex justify-between items-start">
                                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                                </div>
                                                <div className="font-mono text-[10px] text-[#5865F2]/50 text-left">
                                                    {`> localpro_bot status: online\n> loading custom modules...\n> modules loaded: mod, econ, api`}
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="layout-container flex w-full flex-col">
                        <div className="px-4 md:px-10 flex flex-1 justify-center py-20">
                            <ScrollReveal>
                                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-blue to-blue-700 border border-white/10 shadow-2xl">
                                        {/* Decorative glow */}
                                        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-white/10 blur-[60px]"></div>
                                        <div className="relative flex flex-col items-center justify-center gap-8 px-6 py-16 text-center md:px-12 md:py-20">
                                            <div className="flex flex-col gap-4 max-w-2xl">
                                                <h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                                    Pronto para digitalizar seu negócio?
                                                </h2>
                                                <p className="text-slate-100 text-lg md:text-xl font-normal leading-relaxed">
                                                    Não perca mais vendas. Tenha seu próprio aplicativo e facilite a vida dos seus clientes. Entre em contato e solicite um orçamento hoje mesmo.
                                                </p>
                                            </div>
                                            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4">
                                                <button onClick={handleWhatsAppClick} className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-10 py-4 transition-transform active:scale-95 hover:shadow-lg">
                                                    <span className="relative z-10 text-primary-blue text-lg font-bold tracking-wide">Falar no WhatsApp</span>
                                                    <span className="material-symbols-outlined relative z-10 text-primary-blue" style={{ fontSize: '24px' }}>send</span>
                                                </button>
                                                <Link to="/demonstracao" className="flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-transparent px-10 py-4 text-white text-lg font-bold transition-colors hover:bg-white/10 active:bg-white/20">
                                                    Ver Demonstração
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </main>

                <Footer />
                <ChatAssistant />
            </div>
        </div>
    );
};

export default FeaturesPage;
