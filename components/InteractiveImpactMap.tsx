
import React, { useState } from 'react';
import { ProjectImpact } from '../types';
import { Shield, Info } from 'lucide-react';

const MOCK_REGIONS: ProjectImpact[] = [
  { region: 'Mumbai Metro', coordinates: [150, 200], routes: 124, riskLevel: 'High' },
  { region: 'London District 4', coordinates: [380, 100], routes: 82, riskLevel: 'Medium' },
  { region: 'New York Coastal', coordinates: [600, 150], routes: 215, riskLevel: 'High' },
  { region: 'Dubai Urban Core', coordinates: [450, 180], routes: 98, riskLevel: 'Low' },
  { region: 'Tokyo Shinjuku', coordinates: [750, 160], routes: 121, riskLevel: 'Medium' },
];

const InteractiveImpactMap: React.FC = () => {
  const [selected, setSelected] = useState<ProjectImpact | null>(null);

  return (
    <div className="relative bg-slate-900/50 rounded-2xl border border-white/10 p-8 overflow-hidden aspect-video">
      {/* Schematic World Map SVG */}
      <svg viewBox="0 0 800 400" className="w-full h-full opacity-30">
        <path d="M50 150 Q 150 50, 300 150 T 550 150 T 750 150" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5" />
        <path d="M100 250 Q 200 350, 400 250 T 700 250" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5" />
        {/* Simplified continents */}
        <circle cx="200" cy="150" r="40" fill="#1e293b" />
        <circle cx="450" cy="200" r="60" fill="#1e293b" />
        <circle cx="700" cy="180" r="50" fill="#1e293b" />
      </svg>

      {/* Interactive Points */}
      {MOCK_REGIONS.map((item, idx) => (
        <button
          key={idx}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            selected?.region === item.region ? 'scale-150 z-10' : 'hover:scale-125'
          }`}
          style={{ left: `${(item.coordinates[0] / 800) * 100}%`, top: `${(item.coordinates[1] / 400) * 100}%` }}
          onClick={() => setSelected(item)}
        >
          <div className={`w-4 h-4 rounded-full border-2 border-white shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse ${
            item.riskLevel === 'High' ? 'bg-red-500' : item.riskLevel === 'Medium' ? 'bg-amber-500' : 'bg-blue-500'
          }`} />
        </button>
      ))}

      {/* Data Overlay */}
      <div className="absolute top-6 left-6 max-w-xs space-y-4">
        <div className="glass-card p-4 rounded-xl border border-white/10">
          <h3 className="text-white font-bold flex items-center gap-2">
            <Shield size={18} className="text-blue-400" />
            Impact Visualization
          </h3>
          <p className="text-slate-400 text-xs mt-2">
            Click on a region marker to view live satellite analysis data and safety route distribution.
          </p>
        </div>

        {selected && (
          <div className="bg-blue-600 p-4 rounded-xl shadow-2xl animate-in fade-in slide-in-from-left duration-300">
            <h4 className="text-white font-bold text-lg">{selected.region}</h4>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <span className="text-blue-100 text-[10px] uppercase font-bold tracking-wider">Safety Routes</span>
                <p className="text-white font-bold">{selected.routes}</p>
              </div>
              <div>
                <span className="text-blue-100 text-[10px] uppercase font-bold tracking-wider">Risk Level</span>
                <p className="text-white font-bold">{selected.riskLevel}</p>
              </div>
            </div>
            <button 
              className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white text-xs py-1.5 rounded-md transition-colors"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Global Stats Counter (Simplified) */}
      <div className="absolute bottom-6 right-6 text-right">
        <div className="text-3xl font-bold text-white tracking-tighter">3,421</div>
        <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Total Regions Scanned</div>
      </div>
    </div>
  );
};

export default InteractiveImpactMap;
