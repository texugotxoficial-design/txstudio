import React from 'react';
import { motion } from 'framer-motion';

const DiscordDemo: React.FC = () => {
    return (
        <div className="w-full max-w-2xl mx-auto bg-[#313338] rounded-lg overflow-hidden shadow-2xl border border-white/5 font-sans">
            {/* Discord Header */}
            <div className="bg-[#2B2D31] px-4 py-3 flex items-center gap-3 border-b border-black/20">
                <div className="size-2 rounded-full bg-[#23A559]"></div>
                <span className="text-white font-bold text-xs uppercase tracking-widest opacity-80">TX-STUDIO-OPS</span>
            </div>

            {/* Chat Area */}
            <div className="p-6 space-y-8 min-h-[400px]">
                {/* User Message */}
                <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white font-black text-xs">U</div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-sm">Comandante</span>
                            <span className="text-white/20 text-[10px]">Hoje às 14:00</span>
                        </div>
                        <p className="text-[#DBDEE1] text-sm tracking-wide">!status sistemas</p>
                    </div>
                </div>

                {/* Bot Response */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4"
                >
                    <div className="size-10 rounded-full bg-primary flex items-center justify-center text-black font-black text-xs shadow-[0_0_10px_rgba(223,255,0,0.5)]">TX</div>
                    <div className="space-y-2 flex-grow">
                        <div className="flex items-center gap-2">
                            <span className="text-primary font-black text-sm">TX TACTICAL</span>
                            <span className="bg-[#5865F2] text-white text-[9px] px-1 rounded font-bold">BOT</span>
                            <span className="text-white/20 text-[10px]">Hoje às 14:00</span>
                        </div>

                        {/* Tactical Embed */}
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            className="border-l-4 border-primary bg-[#2B2D31] p-4 rounded-r-md max-w-md space-y-4"
                        >
                            <h4 className="text-white font-black text-sm uppercase tracking-tight">RELATÓRIO OPERACIONAL: DELTA-01</h4>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <div className="text-white/30 text-[9px] font-black uppercase tracking-widest">Nível de Acesso</div>
                                    <div className="text-primary font-black text-xs uppercase">ADMIN_ELITE</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-white/30 text-[9px] font-black uppercase tracking-widest">Uptime</div>
                                    <div className="text-green-400 font-black text-xs">99.98%</div>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-white/5">
                                <p className="text-[#DBDEE1] text-[11px] leading-relaxed">
                                    Todos os módulos de segurança estão <span className="text-primary font-bold">ATIVOS</span>. Monitoramento de tráfego em tempo real estabelecido.
                                </p>
                            </div>

                            {/* Botão de Embed Fantasm */}
                            <div className="flex gap-2 pt-2">
                                <div className="bg-[#4E5058] px-3 py-1.5 rounded text-[10px] text-white font-bold cursor-default hover:bg-[#6D6F78] transition-colors">
                                    Ver Logs
                                </div>
                                <div className="bg-[#4E5058] px-3 py-1.5 rounded text-[10px] text-white font-bold cursor-default hover:bg-[#6D6F78] transition-colors">
                                    Reiniciar Node
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Typing Indicator Simulation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-center gap-4 text-white/20 text-[10px]"
                >
                    <div className="flex gap-1 ml-14">
                        <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1 }} className="size-1 bg-white/40 rounded-full" />
                        <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="size-1 bg-white/40 rounded-full" />
                        <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="size-1 bg-white/40 rounded-full" />
                    </div>
                    <span className="font-bold uppercase tracking-widest">Bot está processando...</span>
                </motion.div>
            </div>
        </div>
    );
};

export default DiscordDemo;
