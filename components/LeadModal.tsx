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

        const message = `*Nova Solicitação - LocalPro*%0A%0A` +
            `*Projeto:* ${projectType}%0A` +
            `*Nome:* ${formData.name}%0A` +
            `*WhatsApp:* ${formData.whatsapp}%0A` +
            `*Empresa:* ${formData.company || 'Não informado'}%0A` +
            `*Descrição:* ${formData.description}%0A%0A` +
            `_Enviado via Lead Modal LocalPro_`;

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
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-white dark:bg-[#0B0E14] rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Header */}
                <div className="px-8 py-6 bg-gradient-to-r from-primary-blue to-blue-600">
                    <div className="flex justify-between items-center text-white">
                        <div>
                            <h3 className="text-2xl font-black italic tracking-tighter">SOLICITAR PROJETO</h3>
                            <p className="text-blue-100 text-sm font-medium">{projectType}</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Seu Nome *</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ex: João Silva"
                            className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all dark:text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">WhatsApp *</label>
                        <input
                            required
                            type="tel"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            placeholder="(00) 00000-0000"
                            className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all dark:text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Nome da Empresa (Opcional)</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Ex: Minha Loja Ltda"
                            className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all dark:text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Sobre o seu projeto *</label>
                        <textarea
                            required
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Fale um pouco sobre o que você precisa..."
                            className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all dark:text-white resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-primary-blue hover:bg-blue-600 text-white font-black rounded-xl transition-all shadow-xl shadow-primary-blue/25 flex items-center justify-center gap-2 group"
                    >
                        ENVIAR PARA O WHATSAPP
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                    </button>

                    <p className="text-[10px] text-center text-slate-400">
                        Ao clicar em enviar, você será redirecionado para o WhatsApp com suas informações preenchidas.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LeadModal;
