
import React from 'react';
import { motion } from 'framer-motion';

interface ReflectiveButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'accent' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

const ReflectiveButton: React.FC<ReflectiveButtonProps> = ({
    children,
    onClick,
    className = "",
    variant = 'primary',
    size = 'md'
}) => {
    const baseStyles = "relative overflow-hidden font-bold transition-all active:scale-95 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20",
        accent: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5"
    };

    const sizes = {
        sm: "px-4 h-9 text-xs rounded-lg",
        md: "px-6 h-12 text-sm rounded-xl",
        lg: "px-8 h-14 text-base rounded-2xl"
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {/* Reflective Shine Effect */}
            <motion.div
                initial={{ x: '-150%', skewX: -20 }}
                whileHover={{ x: '150%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-1/2 h-full bg-white/30 z-0 pointer-events-none"
            />

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default ReflectiveButton;
