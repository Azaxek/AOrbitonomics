
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Map, ShieldCheck, Globe, Activity, Zap, Layers } from 'lucide-react';
import collaborativeAnalysisImg from '../assets/collaborative-analysis.png';
import geospatialDiscussionImg from '../assets/geospatial-discussion.png';

const Home: React.FC = () => {
  const stats = [
    { label: "Regions Mapped", value: "3,000+", icon: <Map className="text-blue-400" /> },
    { label: "Safety Routes", value: "640+", icon: <ShieldCheck className="text-blue-400" /> },
    { label: "Countries Served", value: "3", icon: <Globe className="text-blue-400" /> },
  ];

  const features = [
    {
      title: "Satellite Intelligence",
      description: "Harnessing hyperspectral data from global constellations to predict disaster impact paths with 98% accuracy.",
      icon: <Activity size={24} />
    },
    {
      title: "Real-time Routing",
      description: "Dynamically updated safety routes for public buildings that adjust during active geological or climatic events.",
      icon: <Zap size={24} />
    },
    {
      title: "Geospatial Modeling",
      description: "Proprietary algorithms that process 3,000+ data points per square meter to assess building structural risks.",
      icon: <Layers size={24} />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 hero-mesh">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>New: Satellite V3.0 Impact Model is live</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Transforming Disaster Response with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Satellite Impact Maps</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Orbitonomics provides mission-critical geospatial intelligence to save lives and protect public infrastructure during global emergencies.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12">
            <div className="max-w-md">
              <img 
                src={collaborativeAnalysisImg} 
                alt="Team collaborating on satellite impact analysis" 
                className="rounded-2xl shadow-xl border border-white/10 w-full h-auto opacity-90"
              />
            </div>
            <div className="max-w-md">
              <img 
                src={geospatialDiscussionImg} 
                alt="Professional team analyzing geospatial data" 
                className="rounded-2xl shadow-xl border border-white/10 w-full h-auto opacity-90"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/impact" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              <span>Explore the Impact</span>
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/about" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold border border-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Stats Section */}
      <section className="py-20 border-y border-white/5 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-10 rounded-2xl text-center group hover:border-blue-500/30 transition-all">
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-white mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-slate-400 font-medium uppercase tracking-widest text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <div className="max-w-md">
              <img 
                src={collaborativeAnalysisImg} 
                alt="Team analysis session" 
                className="rounded-xl shadow-lg border border-white/10 w-full h-auto opacity-85"
              />
            </div>
            <div className="max-w-md">
              <img 
                src={geospatialDiscussionImg} 
                alt="Geospatial data analysis" 
                className="rounded-xl shadow-lg border border-white/10 w-full h-auto opacity-85"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pioneering Next-Gen Safety</h2>
              <p className="text-slate-400">Our technology stack combines orbital surveillance with ground-level architectural safety data.</p>
            </div>
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2">
              View Technical Specs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 transition-all">
                <div className="text-blue-500 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <div className="max-w-md">
              <img 
                src={geospatialDiscussionImg} 
                alt="Professional geospatial analysis" 
                className="rounded-xl shadow-lg border border-white/10 w-full h-auto opacity-85"
              />
            </div>
            <div className="max-w-md">
              <img 
                src={collaborativeAnalysisImg} 
                alt="Collaborative impact mapping" 
                className="rounded-xl shadow-lg border border-white/10 w-full h-auto opacity-85"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to deploy safety at scale?</h2>
          <p className="text-blue-100 mb-12 max-w-xl mx-auto opacity-90">
            Join the movement towards a more resilient future. Our platform is ready for government and NGO integration.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 max-w-4xl mx-auto">
            <div className="max-w-md">
              <img 
                src={collaborativeAnalysisImg} 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg border-2 border-white/20 w-full h-auto opacity-90"
              />
            </div>
            <div className="max-w-md">
              <img 
                src={geospatialDiscussionImg} 
                alt="Data analysis team" 
                className="rounded-xl shadow-lg border-2 border-white/20 w-full h-auto opacity-90"
              />
            </div>
          </div>
          <Link to="/contact" className="inline-block px-10 py-5 bg-white text-blue-600 hover:bg-blue-50 rounded-2xl font-bold text-lg transition-all shadow-xl">
            Start a Collaboration
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
