
import React from 'react';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SectionTitle: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
    <div className="flex items-center mb-4 border-b pb-2">
        {icon}
        <h2 className="text-2xl font-bold text-gray-800 ml-3">{title}</h2>
    </div>
);

const PhaseCard: React.FC<{ number: string; title: string; quote: string; mots: string; }> = ({ number, title, quote, mots }) => (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col h-full">
        <div className="flex items-center mb-2">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm mr-3">{number}</span>
            <h4 className="text-md font-bold text-gray-800">{title}</h4>
        </div>
        <p className="italic text-green-800 text-center font-semibold mb-3">"{quote}"</p>
        <p className="text-xs text-gray-600 mt-auto"><strong className="text-gray-700">MoT:</strong> {mots}</p>
    </div>
);

const KpiCard: React.FC<{ title: string; }> = ({ title }) => (
    <div className="bg-green-50/50 border border-green-200 p-4 rounded-lg flex flex-col justify-center items-center h-full text-center min-h-[80px]">
        <span className="text-green-800 font-semibold">{title}</span>
    </div>
);

const SolutionModal: React.FC<SolutionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center mb-6">
            <img 
                src="/Logo Hospitales Universitarios San Roque_SIN_FONDO.png" 
                alt="Logo Hospitales San Roque"
                className="h-12 mr-4"
            />
            <h1 className="text-3xl font-bold text-gray-800">Informe Médico</h1>
        </div>

        <div className="space-y-8 text-gray-700">
            {/* Diagnóstico */}
            <section>
                <SectionTitle title="Diagnóstico" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>} />
                <p className="leading-relaxed">
                    La brecha entre la estrategia y la realidad diaria nos debilita. Cerrarla no es una opción, es la única vía para asegurar nuestra calidad, rentabilidad y liderazgo.
                </p>
            </section>
            
            {/* El Tratamiento */}
            <section>
                <SectionTitle title="La cura: San Roque Contigo" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 10V7m0 0L5 4m10 3l4-2" /></svg>} />
                <div className="leading-relaxed space-y-4">
                    <p><em>San Roque Contigo</em> es una iniciativa estratégica para cuidar a quienes cuidan. Su misión es crear una <strong className="font-bold">experiencia del empleado</strong> excepcional con el fin de fidelizar el talento que ya existe y atraer a los mejores profesionales en el futuro.</p>
                    <p>Para lograrlo, desarrollaremos esta experiencia a través del <strong>Employee Journey Map</strong>, analizando y mejorando cada una de las interacciones clave que un profesional tiene con el hospital, desde su selección hasta su despedida.</p>
                </div>
            </section>

            {/* Mission */}
            <section>
                <SectionTitle title="Propósito" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z" /></svg>} />
                <blockquote className="italic text-center text-lg text-green-800 border-l-4 border-r-4 border-green-500 px-6 py-4 my-4 bg-green-50 rounded-md">
                    "Crear para nuestros equipos una experiencia tan excepcional como la que exigimos para nuestros pacientes, que fidelice al mejor talento de HUSR y siente las bases para atraer a los mejores."
                </blockquote>
            </section>
            
            {/* Fases del Viaje */}
            <section>
                <SectionTitle title="El Viaje del Empleado" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <PhaseCard number="1" title="Atracción y Selección" quote="Quiero trabajar aquí" mots="Reputación, claridad de ofertas, agilidad y transparencia del proceso, experiencia del candidato." />
                    <PhaseCard number="2" title="Bienvenida y Socialización" quote="Me siento parte de esto" mots="Primer día, plan de acogida, asignación de tutor/buddy, entrega de herramientas, presentación al equipo." />
                    <PhaseCard number="3" title="Desarrollo y Crecimiento" quote="Aquí puedo crecer" mots="Planes de formación, evaluación, feedback, promoción interna, acceso a proyectos." />
                    <PhaseCard number="4" title="Día a Día y Bienestar" quote="Mi trabajo importa y me cuidan" mots="Relación con responsable, comunicación, carga de trabajo, conciliación, bienestar, agilidad de procesos." />
                    <PhaseCard number="5" title="Reconocimiento y Evolución" quote="Valoran mi esfuerzo" mots="Sistemas de reconocimiento, compensación, beneficios, celebración de logros, movilidad." />
                    <PhaseCard number="6" title="Despedida" quote="Me voy, pero dejo una puerta abierta" mots="Entrevista de salida, comunicación de la baja, traspaso de funciones, red de alumni." />
                </div>
            </section>

            {/* KPIs */}
            <section>
                <SectionTitle title="Qué Mediremos" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>} />
                <p className="leading-relaxed mb-4 text-gray-600">
                    El éxito del proyecto se medirá por la mejora continua en los siguientes indicadores clave:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <KpiCard title="Tasa de Rotación Voluntaria" />
                    <KpiCard title="eNPS" />
                    <KpiCard title="Satisfacción Laboral" />
                    <KpiCard title="Pains y Gains" />
                    <KpiCard title="ROI" />
                </div>
            </section>
            
            {/* Social Proof */}
            <section>
                 <SectionTitle title="Empresas que ya Invierten en Experiencia de Empleado" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                        <h3 className="font-semibold text-gray-800 mt-2 mb-4">En Canarias:</h3>
                        <div className="p-4 bg-gray-50 rounded-lg border flex items-center justify-center">
                            <img 
                                src="/empresas de canarias.png" 
                                alt="Empresas de Canarias que implementan Employee Journey Mapping"
                                className="max-w-full h-auto max-h-48 object-contain"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 mt-2 mb-4">En el Sector de la Salud:</h3>
                        <div className="p-4 bg-gray-50 rounded-lg border flex items-center justify-center">
                            <img 
                                src="/empresas sector salud.png" 
                                alt="Empresas del sector salud que implementan Employee Journey Mapping"
                                className="max-w-full h-auto max-h-48 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="mt-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-green-800 mb-2">Cuidar a Quienes Cuidan</h2>
                <p className="leading-relaxed max-w-3xl mx-auto mb-4">
                    <em>San Roque Contigo</em> es la palanca para activar nuestros valores y construir la <strong className="font-bold">excelencia de nuestro equipo humano</strong>. Un equipo cuidado, motivado y comprometido es la única garantía para ofrecer una atención sanitaria de máxima calidad y cumplir nuestra visión de liderazgo en Canarias.
                </p>
                <p className="text-xl font-bold text-green-900">
                    Es hora de empezar a cuidar a quienes cuidan.
                </p>
            </section>
        </div>

      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SolutionModal;