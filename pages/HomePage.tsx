
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';
import LeadModal from '../components/LeadModal';
import ScrollReveal from '../components/ScrollReveal';

const HomePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState('');

    const openModal = (project: string) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5516991122177', '_blank'); // Substitua pelo número real
    };

    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen font-display text-text-primary-light dark:text-text-primary-dark antialiased transition-colors duration-300">
            <div className="relative flex min-h-screen w-full flex-col group/design-root">
                <Navbar />

                {/* Hero Section - Forced Dark for Brand Impact */}
                <section className="relative flex flex-col justify-center overflow-hidden py-12 md:py-24 lg:py-32 bg-[#020617]">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none z-0">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/30 rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px]"></div>
                    </div>
                    <div className="layout-container flex flex-col items-center z-10 px-4 md:px-10">
                        <div className="layout-content-container flex flex-col lg:flex-row max-w-[1280px] w-full gap-12 lg:gap-20 items-center">
                            {/* Text Content */}
                            <div className="flex flex-col gap-8 flex-1 text-center lg:text-left">
                                <ScrollReveal direction="left" duration={1}>
                                    <div className="flex flex-col gap-4">
                                        <div className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            <span className="text-xs font-medium text-slate-300">Disponível para novos projetos</span>
                                        </div>
                                        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                                            Aplicativos simples, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-purple-400">profissionais</span> e acessíveis.
                                        </h1>
                                        <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                            A LocalPro cria aplicativos informativos e comerciais para empresas, focados em divulgação, praticidade e contato direto com o cliente.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                                        <button
                                            onClick={handleWhatsAppClick}
                                            className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary-blue hover:bg-blue-600 text-white text-base font-bold transition-all shadow-lg hover:shadow-primary-blue/25"
                                        >
                                            Falar no WhatsApp
                                        </button>
                                        <Link to="/discord-bots" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-base font-bold transition-all backdrop-blur-sm">
                                            Ver bots para Discord
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-slate-500 text-sm font-medium">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[20px] text-green-500">check_circle</span>
                                            <span>Planos que cabem no bolso</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[20px] text-green-500">check_circle</span>
                                            <span>Entrega rápida</span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                            {/* Hero Image / Mockup */}
                            <div className="flex-1 w-full flex justify-center lg:justify-end relative">
                                <ScrollReveal direction="right" duration={1} delay={0.2}>
                                    <div className="relative w-full max-w-[500px] aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-4">
                                        <div className="w-full h-full rounded-xl bg-center bg-cover" data-alt="Modern smartphone displaying a business dashboard app interface with charts and dark mode ui" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAolb8Z4U2a4egF_tjv3wKHKd4KuxOIi1SaNgu9HDWlxKgusNO39UH1gEtH7p9Shs-5RqgjbLokGsr3ucMKsenoiHfyO4l4gSUId-auhr_nQA3axS8QZvQbIkD3sy9CwQ1VqiRtW6v0Tbd4Jd04CzQzdRGyPzcn8tQ1AirD4scjwYsJZURaPd0Xy-PjdqwYMRK1Wn8im_Egi3XwZnZj_U7fHcjiDU_iSY26jrrOIiuC-E8FaH4lhyvf160JGN0t1OL-EF0JQMORvyEt')` }}></div>
                                        {/* Floating Elements */}
                                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-blue rounded-2xl blur-2xl opacity-40"></div>
                                        <div className="absolute top-10 right-10 bg-surface-dark/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-green-500/20 rounded-lg text-green-500">
                                                    <span className="material-symbols-outlined">attach_money</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-400">Vendas hoje</p>
                                                    <p className="text-white font-bold">R$ 1.250,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 md:py-24 bg-bg-light dark:bg-bg-dark relative" id="features">
                    <div className="layout-container px-4 md:px-10 flex justify-center">
                        <div className="layout-content-container flex flex-col max-w-[1280px] w-full gap-12">
                            <ScrollReveal>
                                <div className="flex flex-col gap-4 text-center items-center">
                                    <h2 className="text-primary-blue text-sm font-bold tracking-wider uppercase">Vantagens</h2>
                                    <h3 className="text-text-primary-light dark:text-white text-3xl md:text-4xl font-bold max-w-2xl">
                                        Por que ter um app LocalPro?
                                    </h3>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg max-w-2xl">
                                        Soluções focadas na realidade do seu negócio, sem complicações técnicas.
                                    </p>
                                </div>
                            </ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Feature 1 */}
                                <ScrollReveal delay={0.1}>
                                    <div className="group flex flex-col gap-4 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-light dark:bg-surface-dark p-8 hover:border-primary-blue/50 transition-colors duration-300 shadow-sm h-full">
                                        <div className="size-12 rounded-lg bg-primary-blue/10 text-primary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-text-primary-light dark:text-white text-xl font-bold">Divulgação Rápida</h4>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
                                                Seus clientes acessam seus serviços com um clique, sem precisar digitar endereços web complexos.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                                {/* Feature 2 */}
                                <ScrollReveal delay={0.2}>
                                    <div className="group flex flex-col gap-4 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-light dark:bg-surface-dark p-8 hover:border-primary-blue/50 transition-colors duration-300 shadow-sm h-full">
                                        <div className="size-12 rounded-lg bg-primary-blue/10 text-primary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[28px]">chat</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-text-primary-light dark:text-white text-xl font-bold">Contato Direto</h4>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
                                                Botão de WhatsApp integrado para fechar vendas na hora. A comunicação nunca foi tão fácil.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                                {/* Feature 3 */}
                                <ScrollReveal delay={0.3}>
                                    <div className="group flex flex-col gap-4 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-light dark:bg-surface-dark p-8 hover:border-primary-blue/50 transition-colors duration-300 shadow-sm h-full">
                                        <div className="size-12 rounded-lg bg-primary-blue/10 text-primary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[28px]">savings</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-text-primary-light dark:text-white text-xl font-bold">Baixo Custo</h4>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
                                                Desenvolvimento acessível e sem taxas mensais abusivas. Você paga pelo que realmente precisa.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Sophisticated Service Cards Section */}
                <section className="py-24 bg-white dark:bg-[#020617] relative overflow-hidden">
                    <div className="layout-container px-4 md:px-10 flex flex-col items-center">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="text-primary-blue text-sm font-black tracking-[0.2em] uppercase mb-4">Escolha seu Caminho</h2>
                                <h3 className="text-3xl md:text-5xl font-black text-text-primary-light dark:text-white mb-6">Nossas Soluções <span className="text-primary-blue">Digitais</span></h3>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg max-w-2xl mx-auto">Design premium, tecnologia de ponta e foco total na sua conversão.</p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                            {/* Institutional Card */}
                            <ScrollReveal delay={0.1}>
                                <div className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-blue-50 to-white dark:from-blue-500/5 dark:to-transparent border border-blue-100 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                                    <div className="size-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <span className="material-symbols-outlined text-[32px]">business</span>
                                    </div>
                                    <h4 className="text-2xl font-black mb-2 dark:text-white">Institucional</h4>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-6 flex-grow leading-relaxed">Sua empresa digitalizada com sofisticação. Ideal para atrair novos clientes e passar credibilidade.</p>
                                    <div className="pt-6 border-t border-blue-100 dark:border-blue-500/10">
                                        <button
                                            onClick={() => openModal('App Institucional')}
                                            className="w-full py-4 rounded-xl bg-blue-500 text-white font-black hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group/btn"
                                        >
                                            Ver Plano
                                            <span className="material-symbols-outlined text-[20px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Delivery Card */}
                            <ScrollReveal delay={0.2}>
                                <div className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-orange-50 to-white dark:from-orange-500/5 dark:to-transparent border border-orange-100 dark:border-orange-500/20 hover:border-orange-400 dark:hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 h-full flex flex-col">
                                    <div className="size-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <span className="material-symbols-outlined text-[32px]">restaurant</span>
                                    </div>
                                    <h4 className="text-2xl font-black mb-2 dark:text-white">Delivery VIP</h4>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-6 flex-grow leading-relaxed">Aumente seus pedidos com um cardápio digital que encanta e converte direto no seu WhatsApp.</p>
                                    <div className="pt-6 border-t border-orange-100 dark:border-orange-500/10">
                                        <button
                                            onClick={() => openModal('App Delivery')}
                                            className="w-full py-4 rounded-xl bg-orange-500 text-white font-black hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 group/btn"
                                        >
                                            Ver Plano
                                            <span className="material-symbols-outlined text-[20px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Catalog Card */}
                            <ScrollReveal delay={0.3}>
                                <div className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-purple-50 to-white dark:from-purple-500/5 dark:to-transparent border border-purple-100 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 h-full flex flex-col">
                                    <div className="size-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <span className="material-symbols-outlined text-[32px]">shopping_bag</span>
                                    </div>
                                    <h4 className="text-2xl font-black mb-2 dark:text-white">Loja & Catálogo</h4>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-6 flex-grow leading-relaxed">Exiba seus produtos com qualidade e facilite orçamentos rápidos para seu time de vendas.</p>
                                    <div className="pt-6 border-t border-purple-100 dark:border-purple-500/10">
                                        <button
                                            onClick={() => openModal('App Catalogo')}
                                            className="w-full py-4 rounded-xl bg-purple-600 text-white font-black hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group/btn"
                                        >
                                            Ver Plano
                                            <span className="material-symbols-outlined text-[20px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Discord Bot Section - NEW SERVICE */}
                <section className="py-20 relative overflow-hidden bg-[#5865F2]/5 dark:bg-[#5865F2]/10 border-y border-[#5865F2]/20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5865F2]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="layout-container px-4 md:px-10 flex justify-center relative z-10">
                        <div className="layout-content-container flex flex-col lg:flex-row max-w-[1280px] w-full gap-12 items-center">
                            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
                                <ScrollReveal direction="left">
                                    <span className="inline-flex self-center lg:self-start px-3 py-1 rounded-full bg-[#5865F2]/20 text-[#5865F2] text-xs font-bold uppercase tracking-wider border border-[#5865F2]/30">Nova Solução</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-text-primary-light dark:text-white leading-tight">
                                        Automação para Comunidades: <span className="text-[#5865F2]">Bots para Discord</span>
                                    </h2>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg leading-relaxed max-w-2xl mt-4">
                                        Elevamos o nível do seu servidor com bots personalizados para moderação, integração com sites, notificações, sistemas de economia e muito mais. Transforme seu Discord em uma plataforma profissional.
                                    </p>
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
                                        <Link
                                            to="/discord-bots"
                                            className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-[#5865F2]/25 flex items-center gap-2 group"
                                        >
                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 127.14 96.36">
                                                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.48,80.21a105.73,105.73,0,0,0,32.22,16.15c2.45-3.35,4.63-6.9,6.54-10.59a67.17,67.17,0,0,1-10.46-5c.86-.63,1.72-1.3,2.55-2a80.38,80.38,0,0,0,64.75,0c.84.69,1.7,1.36,2.56,2a67.59,67.59,0,0,1-10.46,5c1.9,3.69,4.08,7.24,6.54,10.6a105.79,105.79,0,0,0,32.23-16.15C130.33,52.34,121.72,28.7,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91,65.69,84.69,65.69Z" />
                                            </svg>
                                            Conhecer Planos de Bots
                                        </Link>
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="flex-1 w-full max-w-[400px]">
                                <ScrollReveal direction="right">
                                    <div className="aspect-video lg:aspect-square bg-gradient-to-br from-[#5865F2]/20 to-purple-500/10 rounded-3xl border border-[#5865F2]/20 backdrop-blur-sm p-6 flex items-center justify-center relative group">
                                        <div className="absolute inset-0 bg-[#5865F2]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                                        <div className="flex flex-col items-center gap-4 text-[#5865F2]">
                                            <span className="material-symbols-outlined text-[100px] animate-pulse">precision_manufacturing</span>
                                            <div className="flex flex-col items-center">
                                                <span className="font-black text-xl">LocalPro BOT</span>
                                                <span className="text-sm font-medium opacity-70">Sistemas Inteligentes</span>
                                            </div>
                                        </div>
                                        {/* Floating Tags */}
                                        <div className="absolute top-10 right-10 bg-[#5865F2] text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg transform rotate-12">Moderação</div>
                                        <div className="absolute bottom-10 left-10 bg-purple-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg transform -rotate-12">Economia</div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="py-20 relative overflow-hidden bg-[#020617]">
                    <div className="absolute inset-0 bg-primary-blue/5"></div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/50 via-transparent to-bg-dark/50"></div>
                    <div className="layout-container px-4 relative z-10 flex justify-center">
                        <ScrollReveal>
                            <div className="flex flex-col items-center text-center gap-8 max-w-3xl">
                                <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight">Pronto para digitalizar seu negócio?</h2>
                                <p className="text-slate-300 text-lg md:text-xl">Leve sua empresa para o bolso do seu cliente hoje mesmo. Orçamento rápido e sem compromisso.</p>
                                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                                    <button
                                        onClick={handleWhatsAppClick}
                                        className="flex items-center justify-center rounded-xl h-14 px-8 bg-primary-blue hover:bg-blue-600 text-white text-lg font-bold transition-all shadow-[0_0_30px_rgba(37,106,244,0.4)] hover:scale-105"
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined">chat</span>
                                            Falar com especialista
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <Footer />
                <ChatAssistant />
                <LeadModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    projectType={selectedProject}
                />
            </div>
        </div>
    );
};

export default HomePage;
