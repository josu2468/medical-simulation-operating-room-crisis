import React from 'react';
import VitalSignsMonitor from './VitalSignsMonitor';

interface OperatingRoomProps {
  onSavePatient: () => void;
  isCrisisActive: boolean;
}

const OperatingRoom: React.FC<OperatingRoomProps> = ({ onSavePatient, isCrisisActive }) => {
  return (
    <div className={`relative w-full min-h-screen bg-gray-900 transition-all duration-500 ${!isCrisisActive ? 'filter brightness-50 blur-sm scale-105' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black opacity-80"></div>
      
      {/* Surgical Light Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-radial-gradient(ellipse at top, rgba(180, 210, 255, 0.3) 0%, transparent 70%)"></div>

      {/* Main content area */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full min-h-screen p-4 py-8">
        
        {/* Logo */}
        <div className="relative z-30 mb-8 w-full flex justify-center">
            <img 
                src="/Logo Hospitales Universitarios San Roque_SIN_FONDO.png" 
                alt="Hospitales San Roque Logo" 
                className="h-12 md:h-16"
            />
        </div>
        
        {/* HOSPITAL ROOM FRAME */}
        <div className="relative bg-gradient-to-b from-slate-200 to-slate-300 border-4 border-slate-400 rounded-xl shadow-2xl p-4 md:p-6 w-full max-w-5xl flex-1 flex flex-col justify-center">
            {/* Wall Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%2394a3b8%22%20fill-opacity%3D%220.2%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M5%200h1L0%206V5zM6%205v1H5z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-75" style={{ backgroundSize: '8px 8px' }}></div>

            {/* Background Windows - smaller and higher */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start gap-6 z-0 pt-12">
                <div className="w-32 h-44 bg-cyan-200/40 border-8 border-slate-400 rounded-lg shadow-inner relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-400 -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-slate-400 -translate-x-1/2"></div>
                </div>
                <div className="w-32 h-44 bg-cyan-200/40 border-8 border-slate-400 rounded-lg shadow-inner relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-400 -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-slate-400 -translate-x-1/2"></div>
                </div>
            </div>

            {/* Medical Cabinet */}
            <div className="absolute z-5 left-6 bottom-24 w-40">
                <div className="h-10 bg-slate-500 rounded-t-lg border-b-2 border-slate-600 shadow-md"></div>
                <div className="h-48 bg-slate-400 rounded-b-lg p-2 space-y-2 shadow-lg">
                    <div className="h-12 w-full bg-slate-300/80 rounded-md border border-slate-500/50"></div>
                    <div className="h-12 w-full bg-slate-300/80 rounded-md border border-slate-500/50"></div>
                    <div className="h-12 w-full bg-slate-300/80 rounded-md border border-slate-500/50"></div>
                </div>
            </div>
            
            {/* Patient Scene (centered) */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-2xl h-96">
                    <svg viewBox="0 0 500 250" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            {/* Gradient for a 3D-looking, flesh-tone head */}
                            <radialGradient id="headGradient" cx="50%" cy="40%" r="60%" fx="55%" fy="40%">
                                <stop offset="0%" stopColor="#f7d5c0" />
                                <stop offset="100%" stopColor="#d9a487" />
                            </radialGradient>
                            {/* Gradient for the sheet to give it volume */}
                            <linearGradient id="sheetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#f1f5f9" />
                                <stop offset="50%" stopColor="#e2e8f0" />
                                <stop offset="100%" stopColor="#cbd5e1" />
                            </linearGradient>
                            {/* Subtle drop shadow filter */}
                            <filter id="subtleShadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                                <feOffset in="blur" dy="3" result="offsetBlur" />
                                <feMerge>
                                    <feMergeNode in="offsetBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* IV Stand (moved to the right) */}
                        <g>
                            <line x1="480" y1="210" x2="480" y2="20" stroke="#64748b" strokeWidth="4" />
                            <line x1="430" y1="20" x2="480" y2="20" stroke="#64748b" strokeWidth="4" />
                            <rect x="455" y="205" width="50" height="10" fill="#475569" rx="3" />
                        </g>

                        {/* Operating Table (centered) */}
                        <rect x="60" y="160" width="380" height="60" fill="#1e293b" stroke="#334155" strokeWidth="2" rx="5" />
                        <rect x="60" y="160" width="380" height="8" fill="#0f172a" rx="2" />
                        
                        {/* IV Tube (behind patient, connects to arm) */}
                        <path d="M 445,80 C 410,140 380,200 350,218" stroke="rgba(156, 163, 175, 0.5)" strokeWidth="2" fill="none" />
                        
                        {/* Patient (re-centered with flesh tones and a white sheet) */}
                        <g transform="translate(100, 128)" filter="url(#subtleShadow)">
                            {/* Body under sheet */}
                            <path d="M 20,30 Q 140,10 260,30 L 260,40 Q 140,60 20,40 Z" fill="url(#sheetGradient)" />
                            
                            {/* Bandage with hemorrhage */}
                            <g>
                                {/* Bandage wrap */}
                                <path d="M 80,30 Q 140,20 200,30 L 200,42 Q 140,52 80,42 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
                                {/* Blood stain */}
                                <path d="M 120,35 c -15,2 -20,-10 0,-5 c 10,2 25,15 10,12 c -10,-2 -15,-15 -5,-15 s 15,5 0,8z" fill="#b91c1c" opacity="0.6"/>
                                <path d="M 135,33 c -5,5 -12,0 -3,-4 c 10,-5 15,8 5,6 c -5,-1 -5,-8 0,-5z" fill="#991b1b" opacity="0.8"/>
                            </g>

                            {/* Arm, longer and moved to the left */}
                            <path d="M 220,45 C 240,50 260,80 250,90 L 240,95 C 230,85 220,55 220,45 Z" fill="#d9a487" />
                            
                            {/* Head in Profile */}
                            <g>
                                {/* Profile shape of head looking left. The path defines the silhouette including the nose. */}
                                <path d="M 300,42 C 305,30 295,10 280,5 C 265,0 260,20 265,30 C 270,45 290,50 300,42 Z" fill="url(#headGradient)"/>
                                
                                {/* Ear */}
                                <path d="M 295,32 c 0,4 -4,6 -6,3 c -2,-3 2,-7 6,-3z" fill="#d9a487" stroke="#c79c81" strokeWidth="0.5" />
                                
                                {/* Sad closed eye */}
                                <path d="M 272,20 q 4,-3 6,0" stroke="#581c87" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                                
                                {/* Sad mouth */}
                                <path d="M 268,32 q 4,-3 6,0" stroke="#581c87" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                            </g>
                        </g>
                    </svg>
                    
                    {/* Improved IV Bag - 1/4 full (3/4 empty) */}
                    <div style={{ top: '5%', left: '85%' }} className="absolute w-14 h-24">
                        {/* Hanging hole */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-2.5 bg-transparent border-2 border-slate-400/60 rounded-full"></div>
                        
                        {/* Bag container */}
                        <div className="relative w-full h-full bg-white/10 border-2 border-slate-400/40 rounded-lg rounded-bl-xl rounded-br-xl overflow-hidden shadow-inner backdrop-blur-sm">
                            
                            {/* Blood liquid (1/4 height) */}
                            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-red-800 via-red-600 to-red-500">
                                {/* Air bubble effect on surface */}
                                <div className="absolute -top-1 left-1/4 w-2 h-1 bg-red-400/50 rounded-full"></div>
                                <div className="absolute -top-1.5 right-1/3 w-3 h-1.5 bg-red-400/40 rounded-full"></div>
                            </div>

                            {/* Sticker Label */}
                            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-8 bg-gray-100/90 rounded-sm shadow-md flex flex-col items-center justify-center p-1 border border-gray-300">
                                <span className="font-mono text-black text-[9px] font-bold">BLOOD</span>
                                <span className="font-mono text-red-700 text-sm font-extrabold">A+</span>
                            </div>
                            
                            {/* Port at the bottom */}
                            <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-4 h-3 bg-slate-300 border-x-2 border-b-2 border-slate-400/80 rounded-b-md"></div>
                        </div>
                    </div>

                    {/* Puddle on the floor */}
                    <div className="absolute bottom-2 left-[90.5%] -translate-x-1/2 w-12 h-3 bg-red-900/50 rounded-full blur-sm" aria-hidden="true"></div>

                    {/* Drip Animation - Corrected to fall from bag to floor */}
                    <div style={{ top: '30.5%', left: '90.5%' }} className="absolute w-2 h-2 bg-red-600 rounded-full animate-drip" aria-hidden="true"></div>
                </div>
                <p className="mt-2 mb-8 text-lg text-gray-800 font-semibold text-center max-w-md">La desmotivación y la fuga de talento están desangrando a nuestro hospital. La fuente que debería renovarnos con sangre nueva está rota...</p>
            </div>
        </div>

        <div className="relative z-20 mt-8 mb-8 w-full flex justify-center">
          <button
            onClick={onSavePatient}
            className="px-10 py-5 bg-red-600 text-white font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-red-700 active:bg-red-800 transform hover:scale-105 transition-all duration-200 animate-pulse-slow"
          >
            QUIERO SALVARLO
          </button>
        </div>
      </div>
      
      {/* Vital Signs Monitor (absolutely positioned) */}
      <div className="absolute z-20 top-1/2 -translate-y-1/2 right-4 md:right-8">
        <VitalSignsMonitor isCrisisActive={isCrisisActive} />
      </div>

      <style>{`
        @keyframes drip {
          0% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; }
          100% { opacity: 0; transform: translateY(275px); }
        }
        .animate-drip {
            animation: drip 3s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite;
            animation-delay: 0.5s;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default OperatingRoom;