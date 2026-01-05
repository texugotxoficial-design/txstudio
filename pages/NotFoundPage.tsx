
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
    return (
        <div className="bg-bg-light dark:bg-bg-dark min-h-screen text-text-primary-light dark:text-text-primary-dark transition-colors duration-300 flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="text-center max-w-lg">
                    <h1 className="text-9xl font-black text-primary-split-blue mb-4">404</h1>
                    <h2 className="text-3xl font-bold mb-6">Página não encontrada</h2>
                    <p className="text-slate-500 mb-10">
                        O link que você seguiu pode estar quebrado ou a página pode ter sido removida.
                        Que tal voltar para o início e começar de novo?
                    </p>
                    <Link to="/" className="inline-flex items-center gap-2 bg-primary-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-primary-blue/25">
                        <span className="material-symbols-outlined">home</span>
                        Voltar para o Início
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFoundPage;
