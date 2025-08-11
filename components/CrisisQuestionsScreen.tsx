
import React, { useState, useEffect } from 'react';

const questions = [
    "¿Qué estrategias tenemos para conseguir un “equipo humano excelente”?",
    "¿Qué estamos haciendo para que vengan las personas excelentes?",
    "¿Qué razones da HUSR para que la gente excelente se quede?",
    "¿Cuál es el incentivo por esforzarse? ¿Me esfuerzo hasta quemarme?",
    "¿Procesos ágiles con cuellos de botella?",
    "¿Cuánto de rentable es una plantilla poco comprometida con una alta tasa de rotación?",
    "¿Por qué un empleado debería \"mimar los detalles\" de su trabajo si siente que la organización no lo mima en absoluto?",
];

const CrisisQuestionsScreen: React.FC<{ onProceed: () => void }> = ({ onProceed }) => {
    const [visibleCount, setVisibleCount] = useState(0);

    const totalItems = questions.length + 2; // questions + quote + button

    useEffect(() => {
        if (visibleCount >= totalItems) return;

        // Reveal next item with a delay
        const timer = setTimeout(() => {
            setVisibleCount(prev => prev + 1);
        }, visibleCount < questions.length ? 1200 : 2200); // Faster for questions, slower for summary points

        return () => clearTimeout(timer);
    }, [visibleCount, totalItems]);

    const isVisible = (index: number) => visibleCount > index;

    return (
        <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-start p-4 md:p-8 text-center animate-fade-in">
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease-in-out forwards;
                }
            `}</style>

            <header className="pt-4 pb-12 w-full flex justify-center">
                <img
                    src="/Logo Hospitales Universitarios San Roque_SIN_FONDO.png"
                    alt="Hospitales San Roque Logo"
                    className="h-12 md:h-16"
                />
            </header>

            <main className="max-w-4xl w-full flex flex-col items-center justify-center flex-1 pb-12">
                <div className="space-y-8 mt-4">
                    {questions.map((q, index) => (
                         <p key={index} className={`text-xl md:text-2xl font-light text-gray-300 transition-opacity duration-1000 ${isVisible(index) ? 'opacity-100' : 'opacity-0'}`}>
                            {q}
                        </p>
                    ))}
                </div>

                <div className={`mt-12 w-full transition-opacity duration-1000 ${isVisible(questions.length) ? 'opacity-100' : 'opacity-0'}`}>
                     <blockquote className="italic text-2xl md:text-3xl text-red-400 border-l-4 border-red-500 pl-6 my-4 max-w-3xl mx-auto">
                        "Dar una atención 5 estrellas no es posible con empleados que se sienten 1 estrella."
                    </blockquote>
                </div>
                
                 <div className={`mt-12 pb-8 transition-opacity duration-1000 ${isVisible(questions.length + 1) ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                        onClick={onProceed}
                        className="px-8 py-4 bg-red-700 text-white font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-red-800 active:bg-red-900 transform hover:scale-105 transition-all duration-200"
                    >
                       ¿CÓMO ESTÁ NUESTRA GENTE?
                    </button>
                </div>
            </main>
        </div>
    );
};

export default CrisisQuestionsScreen;