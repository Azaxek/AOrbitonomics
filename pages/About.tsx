
import React from 'react';
import { Target, Eye, Compass, Satellite, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Intro */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-12">
            Orbitonomics was founded with a singular conviction: that satellite data should not just observe disasters, but actively mitigate their human toll. We are building the infrastructure for a safer world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl border-white/10">
            <Target className="text-blue-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">Mission</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              To provide the world's most accurate, real-time satellite impact maps, enabling rapid and effective disaster response for every community.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl border-white/10">
            <Eye className="text-blue-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">Vision</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A future where satellite-driven safety routes are as standard as fire exits, ensuring that no disaster ever catches humanity off guard.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl border-white/10">
            <Compass className="text-blue-500 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">Values</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Integrity in data, relentless innovation, and a commitment to public safety above all else. We prioritize impact over optics.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-slate-900/30 py-24 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/id/122/800/1000" 
                alt="Earth from Space" 
                className="rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">The Story of Orbitonomics</h2>
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  Founded in 2023 by <strong>Aryav Agrawal</strong>, Orbitonomics emerged from a simple observation: during natural disasters, the gap between data availability and actionable ground routes was dangerously wide.
                </p>
                <p>
                  Agrawal, serving as the sole founder and CEO, leveraged his background in geospatial analytics to bridge this gap. Starting with a pilot project in Mumbai, the company quickly scaled its operations, mapping 3,000+ regions in less than two years.
                </p>
                <p>
                  Today, Orbitonomics stands as a leader in "impact-driven mapping," specializing in public building safety and dynamic route generation that can change as fast as a flood or wildfire spreads.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-blue-400 font-bold text-2xl mb-1">2023</h4>
                  <p className="text-slate-500 text-sm">Founded</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bold text-2xl mb-1">640</h4>
                  <p className="text-slate-500 text-sm">Safety Routes Live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Focus */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proprietary Technology Stack</h2>
            <p className="text-slate-400">Advanced orbital surveillance meets ground-truth verification.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-white/5">
              <Satellite className="text-blue-500 mb-6" />
              <h4 className="text-white font-bold mb-3">Hyper-Spectral Analysis</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Using non-visible light spectrums to detect soil moisture and structural weaknesses invisible to the naked eye.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-white/5">
              <Shield className="text-blue-500 mb-6" />
              <h4 className="text-white font-bold mb-3">Dynamic Safety Protocols</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Safety routes that update via IoT-connected building signage in response to real-time satellite heatmaps.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-white/5">
              <Zap className="text-blue-500 mb-6" />
              <h4 className="text-white font-bold mb-3">Predictive AI Engine</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Neural networks trained on 50 years of global disaster data to forecast impact zones within meters of precision.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
