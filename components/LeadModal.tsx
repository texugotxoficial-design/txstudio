import React, { useState } from 'react';

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectType: string;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, projectType }) => {
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        company: '',
        description: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*Nova Solicitação - TX Digital Studio*%0A%0A` +
            `*Projeto:* ${projectType}%0A` +
            `*Nome:* ${formData.name}%0A` +
            `*WhatsApp:* ${formData.whatsapp}%0A` +
            `*Empresa:* ${formData.company || 'Não informado'}%0A` +
            `*Descrição:* ${formData.description}%0A%0A` +
            `_Enviado via TX Lead System_`;

        window.open(`https://wa.me/5516991122177?text=${message}`, '_blank');
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-[#0B0E14] rounded-[3rem] shadow-2xl border border-white/5 overflow-hidden animate-in fade-in zoom-in duration-500">
                {/* Header */}
                <div className="px-8 py-10 bg-gradient-to-br from-primary via-accent to-primary animate-gradient-x relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 flex justify-between items-center text-white">
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter">INICIAR PROJETO</h3>
                            <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mt-1">{projectType}</p>
                        </div>
                        <button onClick={onClose} className="size-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors border border-white/10">
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-10 space-y-6">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Identificação / Nome</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ex: Rafael TX"
                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-white font-medium"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">WhatsApp de Contato</label>
                        <input
                            required
                            type="tel"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            placeholder="(00) 00000-0000"
                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all text-white font-medium"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Organização (Opcional)</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Ex: Minha Empresa VIP"
                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-white font-medium"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Briefing do Projeto</label>
                        <textarea
                            required
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Descreva sua visão e objetivos..."
                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all text-white font-medium resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full py-5 bg-primary text-white font-black rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                            SOLICITAR CONSULTORIA
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>

                    <p className="text-[9px] text-center text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                        Segurança TX: Seus dados estão protegidos. <br /> Você será redirecionado para o WhatsApp oficial.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LeadModal;
