
import React from 'react';

const values = [
    { title: "Profesionalidad" },
    { title: "Esfuerzo" },
    { title: "Agilidad" },
    { title: "Innovación" },
    { title: "Implicación" },
    { title: "Rentabilidad" },
    { title: "Reconocimiento" }
];

const SectionCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex flex-col animate-pillar h-full">
        <div className="flex items-center mb-4">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-green-900/50 border border-green-500 rounded-full text-green-400 mr-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-green-400">{title}</h3>
        </div>
        <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
);

const IntroScreen: React.FC<{ onProceed: () => void }> = ({ onProceed }) => {
    return (
        <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start p-4 md:p-8 text-center animate-fade-in">
             <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease-in-out forwards;
                }
                @keyframes fadeInUpDelayed {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-pillar {
                    opacity: 0;
                    animation: fadeInUpDelayed 0.5s ease-out forwards;
                }
                 .animate-pulse-slow {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
             `}</style>
            
            <header className="pt-4 pb-8 w-full flex justify-center">
                <img 
                    src="/Logo Hospitales Universitarios San Roque_SIN_FONDO.png" 
                    alt="Hospitales San Roque Logo" 
                    className="h-12 md:h-16"
                />
            </header>
            
            <main className="max-w-6xl w-full flex-1 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                    Marco Estratégico <span className="text-green-400">HUSR</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10">
                    Nuestra brújula para ser líderes en el cuidado de la salud en Canarias
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 text-left">
                    <SectionCard title="Visión" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}>
                        <p>Ser el grupo hospitalario privado líder en Canarias, referente por la <strong className="font-bold">excelencia de nuestro equipo humano</strong>, la innovación tecnológica y por superar las expectativas de salud y bienestar de nuestros pacientes.</p>
                    </SectionCard>
                     <SectionCard title="Misión" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z" /></svg>}>
                        <p>Ofrecer una atención sanitaria accesible y de máxima calidad, combinando un <strong className="font-bold">equipo humano excepcional</strong> con la tecnología más avanzada para cuidar y mejorar la salud de las personas en Canarias, garantizando la sostenibilidad y el crecimiento de nuestra organización.</p>
                    </SectionCard>
                </div>

                <div className="animate-pillar mb-10" style={{animationDelay: '0.4s'}}>
                    <h3 className="text-2xl font-bold mb-6 text-green-400">Nuestros Valores</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        {values.map((value, index) => (
                            <div key={index} className="bg-gray-800/60 py-2 px-5 rounded-full border border-gray-700 transform hover:scale-105 transition-transform duration-200">
                                <h4 className="font-bold text-green-400">{value.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="animate-pillar mt-10 pb-8" style={{animationDelay: '0.8s'}}>
                    <button
                        onClick={onProceed}
                        className="px-10 py-5 bg-red-600 text-white font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-red-700 active:bg-red-800 transform hover:scale-105 transition-all duration-200 animate-pulse-slow"
                    >
                       BIEN, PERO...
                    </button>
                </div>
            </main>
        </div>
    );
};

export default IntroScreen;