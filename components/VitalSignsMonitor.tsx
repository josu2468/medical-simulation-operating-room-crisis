import React, { useState, useEffect, useRef, useMemo } from 'react';
import { LineChart, Line, YAxis, XAxis, ResponsiveContainer } from 'recharts';
import useInterval from '../hooks/useInterval';

const generateEcgData = () => {
  const data = [];
  for (let i = 0; i < 50; i++) {
    let y;
    if (i % 25 > 18 && i % 25 < 22) {
      y = Math.random() * 30 + (i % 25 - 20) * (i % 25 - 20) * -2 + 80;
    } else {
      y = Math.random() * 5 + 20;
    }
    data.push({ name: i, uv: y });
  }
  return data;
};

interface VitalSignsMonitorProps {
    isCrisisActive: boolean;
}

const VitalSignsMonitor: React.FC<VitalSignsMonitorProps> = ({ isCrisisActive }) => {
  const [heartRate, setHeartRate] = useState(85);
  const [systolic, setSystolic] = useState(90);
  const [diastolic, setDiastolic] = useState(50);
  const [spo2, setSpo2] = useState(92);
  const [data, setData] = useState(generateEcgData());
  const audioContextRef = useRef<AudioContext | null>(null);

  // State for secondary metrics to allow fluctuation
  const [commitment, setCommitment] = useState(8);
  const [turnover, setTurnover] = useState(22);
  const [absenteeism, setAbsenteeism] = useState(12);
  
  const beep = () => {
    if (!audioContextRef.current || !isCrisisActive) return;
    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    
    gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContextRef.current.currentTime + 0.01);
    
    oscillator.frequency.setValueAtTime(1000 - (85 - heartRate) * 5, audioContextRef.current.currentTime);
    oscillator.type = 'sine';
    
    oscillator.start(audioContextRef.current.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContextRef.current.currentTime + 0.1);
    oscillator.stop(audioContextRef.current.currentTime + 0.1);
  };

  useEffect(() => {
     // Initialize AudioContext on user interaction (or component mount as fallback)
    const initAudio = () => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
    };
    initAudio();
  }, []);

  // Interval for primary vital signs
  useInterval(() => {
    if (!isCrisisActive) return;
    setHeartRate(p => (p > 60 ? p - 1 : p));
    setSystolic(p => (p > 75 ? p - 1 : p));
    setDiastolic(p => (p > 40 ? p - 0.5 : p));
    setSpo2(p => (p > 85 ? p - 1 : p));
  }, 2000);

  // Interval for secondary metrics fluctuation
  useInterval(() => {
    if (!isCrisisActive) return;
    
    const fluctuate = (base: number, range: number) => {
        const fluctuation = Math.floor(Math.random() * (range * 2 + 1)) - range;
        return Math.max(0, base + fluctuation);
    };

    setCommitment(fluctuate(8, 3));
    setTurnover(fluctuate(22, 3));
    setAbsenteeism(fluctuate(12, 3));

  }, 1800);

  useInterval(() => {
    if (!isCrisisActive) return;
    setData(prevData => {
        const newData = [...prevData.slice(1), prevData[0]];
        return newData;
    });
  }, 100);

  useInterval(beep, 60000 / heartRate);
  
  const getStatColor = (value: number, high: number, mid: number) => {
    if (value > high) return 'text-cyan-400';
    if (value > mid) return 'text-yellow-400';
    return 'text-red-500 animate-pulse';
  }

  return (
    <div className="w-full max-w-sm p-3 bg-black border-2 border-gray-700 rounded-lg shadow-2xl font-mono">
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <YAxis domain={[0, 100]} hide />
            <XAxis dataKey="name" hide />
            <Line type="monotone" dataKey="uv" stroke="#06b6d4" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2 text-lg">
        <div className="flex items-baseline">
            <span className="text-sm text-gray-400 mr-2">FC</span>
            <span className={`font-bold text-4xl ${getStatColor(heartRate, 75, 65)}`}>{heartRate}</span>
            <span className="text-sm text-gray-400 ml-1">bpm</span>
        </div>
        <div className="flex items-baseline">
            <span className="text-sm text-gray-400 mr-2">SpO2</span>
            <span className={`font-bold text-4xl ${getStatColor(spo2, 94, 90)}`}>{spo2}</span>
             <span className="text-sm text-gray-400 ml-1">%</span>
        </div>
        <div className="col-span-2 flex items-baseline">
            <span className="text-sm text-gray-400 mr-2">PA</span>
            <span className={`font-bold text-2xl ${getStatColor(systolic, 85, 80)}`}>{Math.round(systolic)}</span>
            <span className="text-gray-500 mx-1">/</span>
            <span className={`font-bold text-2xl ${getStatColor(diastolic, 45, 40)}`}>{Math.round(diastolic)}</span>
             <span className="text-sm text-gray-400 ml-1">mmHg</span>
        </div>
      </div>
      
      {/* Secondary Stats */}
      <div className="mt-4 pt-3 border-t border-gray-700 space-y-3">
        {/* Commitment Meter */}
        <div>
          <div className="flex justify-between items-baseline mb-1">
              <span className="text-sm text-gray-400 uppercase">Compromiso</span>
              <span className="font-bold text-2xl text-red-500 animate-pulse">{commitment}%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-3.5">
              <div className="bg-red-500 h-3.5 rounded-full" style={{ width: `${commitment}%` }}></div>
          </div>
        </div>
        
        {/* Turnover Rate */}
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <span className="text-sm text-gray-400 uppercase">Tasa de Rotación</span>
            <span className="font-bold text-2xl text-red-500 animate-pulse">{turnover}%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-3.5">
            <div className="bg-red-500 h-3.5 rounded-full" style={{ width: `${turnover}%` }}></div>
          </div>
        </div>

        {/* Absenteeism */}
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <span className="text-sm text-gray-400 uppercase">Absentismo</span>
            <span className="font-bold text-2xl text-yellow-400">{absenteeism}%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-3.5">
            <div className="bg-yellow-400 h-3.5 rounded-full" style={{ width: `${absenteeism}%` }}></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VitalSignsMonitor;