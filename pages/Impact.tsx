
import React from 'react';
import InteractiveImpactMap from '../components/InteractiveImpactMap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MapPin, Globe, Building2, TrendingUp } from 'lucide-react';

const CHART_DATA = [
  { country: 'India', routes: 310 },
  { country: 'UK', routes: 145 },
  { country: 'USA', routes: 185 },
];

const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6'];

const Impact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Global Footprint</h1>
          <p className="text-xl text-slate-400">
            Our data informs safety decisions across 3,000+ regions. We turn complex satellite telemetry into human-scale safety routes.
          </p>
        </div>

        {/* Map Visualization */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Globe className="text-blue-500" />
            Impact Distribution Explorer
          </h2>
          <InteractiveImpactMap />
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Chart Card */}
          <div className="bg-slate-900 rounded-2xl border border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="text-blue-500" />
              Safety Routes by Country
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHART_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis 
                    dataKey="country" 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="routes" radius={[4, 4, 0, 0]}>
                    {CHART_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-slate-500 text-xs mt-6 text-center">
              * Total of 640 safety routes successfully deployed across public infrastructure.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900 p-8 rounded-2xl border border-white/10 flex flex-col justify-center text-center">
              <Building2 className="text-blue-500 mx-auto mb-4" size={32} />
              <div className="text-4xl font-bold text-white mb-2">1,240</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Public Buildings</div>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-white/10 flex flex-col justify-center text-center">
              <MapPin className="text-blue-500 mx-auto mb-4" size={32} />
              <div className="text-4xl font-bold text-white mb-2">3k+</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Regions Mapped</div>
            </div>
            <div className="col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold text-white mb-4">Scaling Rapidly</h4>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Our mapping engine is currently processing an additional 150 regions per month. Our goal is to cover 10,000 critical high-risk zones by the end of 2026.
              </p>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full" style={{ width: '30%' }}></div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-blue-100 font-bold">
                <span>Current: 3k</span>
                <span>Goal: 10k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="py-16 border-t border-white/5">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Primary Impact Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Flooding Analysis', 'Wildfire Prevention', 'Seismic Activity', 'Urban Resilience'].map((item, idx) => (
              <div key={idx} className="bg-slate-900/50 p-6 rounded-xl text-center border border-white/5">
                <h4 className="text-white font-bold">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
