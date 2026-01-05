
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatAssistant from '../../components/ChatAssistant';
import ScrollReveal from '../../components/ScrollReveal';

const BeautyExamplePage: React.FC = () => {
    return (
        <div className="bg-[#FFF9FB] min-h-screen text-slate-900 font-display selection:bg-pink-100">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* Hero Section - Elegant Site Feel */}
                <div className="layout-container px-4 mb-24">
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-pink-100 bg-white shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10"></div>
                        <img
                            src="/brain/06d3e75a-25c1-474c-8acc-15f3c6dec5d8/beauty_studio_concept_1767621116133.png"
                            alt="Beauty Studio Concept"
                            className="w-full h-[550px] object-cover object-center opacity-80"
                        />
                        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-20 max-w-3xl">
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100 text-pink-500 text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                    Estética de Alto Padrão
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter text-slate-900">
                                    Lumina <br />
                                    <span className="text-pink-400">Visual.</span>
                                </h1>
                                <p className="text-lg text-slate-500 mb-10 max-w-xl leading-relaxed">
                                    Realçando sua beleza natural com técnicas avançadas e um olhar artístico. Sua confiança é o nosso maior projeto.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-slate-900 hover:bg-black text-white font-black py-4 px-10 rounded-xl transition-all shadow-xl shadow-slate-200 uppercase tracking-widest text-xs">
                                        Explorar Tratamentos
                                    </button>
                                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-black py-4 px-10 rounded-xl transition-all shadow-lg shadow-pink-100 uppercase tracking-widest text-xs">
                                        Agendar Agora
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Services & Mobile Concept */}
                <div className="layout-container px-4 mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <ScrollReveal direction="left">
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-4xl font-black mb-6 leading-tight">Sua Agenda <br /> Sempre Lotada.</h2>
                                    <p className="text-slate-500 text-lg leading-relaxed">
                                        Oferecemos um sistema de agendamento fluido e uma vitrine de serviços que converte visitantes em clientes fiéis. Design minimalista que prioriza seu portfólio.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { title: "Booking App", desc: "Agendamento em 3 cliques pelo celular do cliente.", icon: "calendar_month" },
                                        { title: "Smart Portfolio", desc: "Galerias Antes & Depois integradas e dinâmicas.", icon: "auto_fix_high" },
                                        { title: "Loyalty System", desc: "Fidelize com programas de pontos e ofertas exclusivas.", icon: "card_membership" },
                                        { title: "Direct Contact", desc: "Botão flutuante para dúvidas rápidas e suporte.", icon: "support_agent" }
                                    ].map((feature, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white border border-pink-50 hover:shadow-xl hover:shadow-pink-100/50 transition-all group">
                                            <div className="size-12 rounded-xl bg-pink-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-pink-500">{feature.icon}</span>
                                            </div>
                                            <h4 className="font-black text-slate-900 mb-2">{feature.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Mobile App Frame */}
                        <ScrollReveal direction="right">
                            <div className="relative flex justify-center">
                                {/* Decorative elements */}
                                <div className="absolute -top-10 -right-10 size-40 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
                                <div className="absolute -bottom-10 -left-10 size-40 bg-pink-200 rounded-full blur-3xl opacity-30"></div>

                                {/* Device Mockup */}
                                <div className="relative w-[300px] h-[610px] bg-slate-950 rounded-[3rem] border-8 border-slate-900 shadow-3xl overflow-hidden z-10">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-40"></div>

                                    <div className="w-full h-full bg-[#FFF9FB] overflow-y-auto no-scrollbar pt-10">
                                        {/* App Header */}
                                        <div className="px-6 py-8 text-center bg-white border-b border-pink-50">
                                            <div className="size-16 border-2 border-pink-100 rounded-full mx-auto mb-3 p-1">
                                                <div className="w-full h-full bg-pink-50 rounded-full flex items-center justify-center text-pink-500 text-xl font-black">LV</div>
                                            </div>
                                            <h3 className="font-black text-xl tracking-tighter text-slate-900">Lumina Visual</h3>
                                            <span className="text-[7px] text-pink-400 font-bold uppercase tracking-[0.3em]">Beleza & Bem-estar</span>
                                        </div>

                                        {/* Portfolio Grid */}
                                        <div className="grid grid-cols-3 gap-0.5 mt-0.5 bg-pink-50">
                                            {[1, 2, 3, 4, 5, 6].map(i => (
                                                <div key={i} className="aspect-square bg-white relative overflow-hidden">
                                                    <div className="w-full h-full bg-pink-50/50 animate-pulse"></div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Quick Booking */}
                                        <div className="p-5 space-y-4 pb-20">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Próximos Horários</h4>
                                            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                                                {['09:00', '10:30', '14:00', '16:30'].map(time => (
                                                    <div key={time} className="px-3 py-2 rounded-lg border border-pink-100 bg-white text-[9px] font-bold text-pink-500 whitespace-nowrap">
                                                        {time}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-2">
                                                {[
                                                    { icon: "brush", name: "Extensão de Cílios", p: "R$ 150" },
                                                    { icon: "face", name: "Limpeza de Pele", p: "R$ 120" }
                                                ].map((s, i) => (
                                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border border-pink-50">
                                                        <div className="flex items-center gap-3">
                                                            <span className="material-symbols-outlined text-sm text-pink-400">{s.icon}</span>
                                                            <span className="text-[9px] font-bold">{s.name}</span>
                                                        </div>
                                                        <span className="text-[9px] font-black text-slate-900">{s.p}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tab Bar */}
                                        <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-pink-50 flex justify-around items-center px-4 z-30">
                                            {['grid_view', 'calendar_today', 'add_circle', 'person'].map((icon, i) => (
                                                <span key={i} className={`material-symbols-outlined text-xl ${i === 1 ? 'text-pink-500' : 'text-slate-300'}`}>{icon}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Client Quote */}
                <div className="layout-container px-4 mb-32 text-center">
                    <ScrollReveal>
                        <div className="size-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-pink-100">
                            <span className="material-symbols-outlined text-white text-3xl">format_quote</span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-serif italic text-slate-700 max-w-3xl mx-auto leading-tight">
                            "A beleza começa no momento em que você decide ser você mesma."
                        </h3>
                        <div className="mt-6 text-pink-500 font-black uppercase tracking-widest text-xs">— Coco Chanel</div>
                    </ScrollReveal>
                </div>

                <div className="layout-container px-4">
                    <ScrollReveal>
                        <div className="p-16 rounded-[3rem] bg-white border border-pink-100 text-center relative overflow-hidden shadow-2xl shadow-pink-100/50">
                            <div className="absolute top-0 left-0 size-64 bg-pink-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                            <h2 className="text-4xl font-black mb-6 text-slate-900">Encante Seus Clientes Antes Mesmo da Visita.</h2>
                            <p className="text-slate-500 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
                                Leve a elegância do seu estúdio para o digital com um aplicativo exclusivo e sofisticado da LocalPro.
                            </p>
                            <Link to="/negocios/estetica" className="bg-pink-500 hover:bg-pink-600 text-white font-black py-5 px-12 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-pink-200 uppercase tracking-widest text-sm inline-flex items-center gap-3">
                                Criar meu Aplicativo de Estética
                                <span className="material-symbols-outlined">sparkles</span>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </main>

            <Footer />
            <ChatAssistant />
        </div>
    );
};

export default BeautyExamplePage;
