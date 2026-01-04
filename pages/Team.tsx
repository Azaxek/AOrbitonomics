
import React from 'react';
import { Linkedin, Twitter, Globe, Users, Star, Satellite } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Leadership</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Founded and led by Aryav Agrawal, Orbitonomics is built on a foundation of scientific rigor and humanitarian focus.
          </p>
        </div>

        {/* Founder Bio */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="w-full md:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                {/* Replaced placeholder image with a stylized tech avatar */}
                <div className="relative rounded-2xl shadow-2xl w-full border border-white/10 aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-50 from-blue-500/20"></div>
                  <Satellite className="absolute text-blue-500/10 scale-150 rotate-12" size={180} />
                  <span className="relative text-7xl font-bold text-white/20 select-none tracking-tighter">AA</span>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 transition-colors border border-white/5">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 transition-colors border border-white/5">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 transition-colors border border-white/5">
                  <Globe size={20} />
                </a>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full mb-4">Founder & CEO</div>
              <h2 className="text-4xl font-bold text-white mb-6">Aryav Agrawal</h2>
              
              <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  Aryav Agrawal is a visionary entrepreneur and technologist dedicated to utilizing advanced satellite imagery for humanitarian impact. Since founding Orbitonomics in 2023, he has served as the architect behind the company’s core mapping algorithms.
                </p>
                <p>
                  With a deep expertise in geospatial intelligence and structural engineering, Aryav has successfully led the development of over 640 safety routes across three countries, establishing partnerships with major NGOs and municipal disaster response teams.
                </p>
                <p>
                  His mission is simple: to ensure that every public building on earth has a satellite-verified safety route, significantly reducing fatalities during unforeseen natural disasters.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold mb-1">Background</h4>
                  <p className="text-slate-400 text-sm">Geospatial Analytics & structural risk assessment expert.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Focus</h4>
                  <p className="text-slate-400 text-sm">Orbital intelligence for climate resilience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join the Team */}
        <div className="text-center py-20 border-t border-white/5">
          <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-2xl mb-8">
            <Users className="text-blue-500" size={32} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Future Growth</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-10">
            While currently founder-led, Orbitonomics is preparing for expansion. We will soon be looking for engineers, data scientists, and disaster specialists to join our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-4 bg-slate-900 rounded-xl border border-white/5 flex items-center gap-3 hover:border-blue-500/30 transition-colors group">
              <Star className="text-amber-500 group-hover:scale-110 transition-transform" size={18} />
              <span className="text-white font-medium">Engineering Openings (Q4 2025)</span>
            </div>
            <div className="px-6 py-4 bg-slate-900 rounded-xl border border-white/5 flex items-center gap-3 hover:border-blue-500/30 transition-colors group">
              <Star className="text-amber-500 group-hover:scale-110 transition-transform" size={18} />
              <span className="text-white font-medium">GIS Specialists (Q1 2026)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
