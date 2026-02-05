import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'tactical';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    to,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    external = false,
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-black tracking-[0.25em] uppercase transition-all duration-300 relative overflow-hidden group';

    const variants = {
        primary: 'bg-primary text-black hover:bg-white shadow-[0_0_20px_rgba(223,255,0,0.4)]',
        secondary: 'bg-secondary text-white hover:brightness-110 shadow-[0_0_20px_rgba(255,69,0,0.4)]',
        outline: 'border border-primary/30 text-primary hover:border-primary hover:bg-primary/10 shadow-sm',
        tactical: 'bg-dark-gray text-white border border-white/10 hover:border-primary/50 hover:bg-black'
    };

    const sizes = {
        sm: 'px-6 py-2.5 text-[9px]',
        md: 'px-10 py-3.5 text-[10px]',
        lg: 'px-14 py-4.5 text-[11px]',
    };

    const content = (
        <>
            <span className="relative z-10">{children}</span>
            {/* Efeito de Reflexo no Hover */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-white/20 skew-x-[35deg] group-hover:left-[100%] transition-all duration-700 ease-in-out"></div>
        </>
    );

    const fullClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (to) {
        if (external) {
            return (
                <motion.a
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={fullClassName}
                    whileTap={{ scale: 0.97 }}
                >
                    {content}
                </motion.a>
            );
        }
        return (
            <motion.div className="contents" whileTap={{ scale: 0.97 }}>
                <Link to={to} className={fullClassName}>
                    {content}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={fullClassName}
            whileTap={{ scale: 0.97 }}
        >
            {content}
        </motion.button>
    );
};

export default Button;
