import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReflectiveButton from '../components/ReflectiveButton';

const NotFoundPage: React.FC = () => {
    return (
        <div className="bg-bg-dark min-h-screen text-white flex flex-col transition-colors duration-300 overflow-hidden">
            <Navbar />
            <main className="flex-1 flex items-center justify-center p-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="text-center max-w-2xl relative z-10">
                    <div className="mb-12 relative inline-block">
                        <h1 className="text-[12rem] md:text-[18rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent leading-none select-none">
                            404
                        </h1>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">CONEXÃO PERDIDA.</h2>
                        </div>
                    </div>

                    <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 italic leading-relaxed">
                        "O destino que você procura foi movido para uma nova dimensão ou não existe mais. Vamos recalcular sua trajetória digital."
                    </p>

                    <Link to="/" className="inline-block">
                        <ReflectiveButton size="lg">
                            VOLTAR PARA A BASE
                        </ReflectiveButton>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFoundPage;
