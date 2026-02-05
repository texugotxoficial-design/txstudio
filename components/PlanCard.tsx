import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface PlanCardProps {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    buttonLink: string;
    delay?: number;
}

const PlanCard: React.FC<PlanCardProps> = ({
    title,
    price,
    features,
    isPopular = false,
    buttonLink,
    delay = 0
}) => {
    const isBot = title.toLowerCase().includes('bot') || title.toLowerCase().includes('tático') || title.toLowerCase().includes('fantasma');
    const buttonText = isBot ? 'INICIALIZAR BOT' : 'SOLICITAR ACESSO';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`relative group p-10 flex flex-col transition-all duration-300 tactical-card ${isPopular ? 'border-primary/40 shadow-tactical-glow' : 'border-white/5'
                }`}
        >
            {/* Indicador de Status Tático */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                <div className={`absolute top-2 right-[-25px] rotate-45 w-full py-1 text-[8px] font-black uppercase tracking-widest text-center ${isPopular ? 'bg-primary text-black' : 'bg-white/10 text-white/40'
                    }`}>
                    {isPopular ? 'ELITE' : 'ATIVO'}
                </div>
            </div>

            {/* Cabeçalho do Plano */}
            <div className="mb-10 text-left">
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${isPopular ? 'text-primary' : 'text-white'}`}>{price}</span>
                    {price !== 'Sob Consulta' && <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">/Fase</span>}
                </div>
            </div>

            {/* Divisor Diagonal Slim */}
            <div className="w-10 h-[2px] bg-gradient-to-r from-primary to-secondary mb-10 shadow-[0_0_10px_rgba(223,255,0,0.5)]"></div>

            {/* Lista de Features */}
            <ul className="space-y-4 mb-14 flex-grow text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 group/item">
                        <div className={`shrink-0 mt-1 size-1.5 rotate-45 border border-primary/40 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_rgba(223,255,0,0.8)] transition-all`}></div>
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider leading-tight group-hover/item:text-white transition-colors">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA de Alta Performance */}
            <Button
                variant={isPopular ? 'primary' : 'tactical'}
                size="lg"
                to={buttonLink}
                external={buttonLink.startsWith('http')}
                className="w-full text-[10px]"
            >
                {buttonText}
            </Button>

            {/* Overlay de Fibra de Carbono Sutil */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
        </motion.div>
    );
};

export default PlanCard;
