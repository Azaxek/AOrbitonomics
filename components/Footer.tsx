
import React from 'react';
import { Link } from 'react-router-dom';
import { Satellite, Twitter, Linkedin, Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-1.5 bg-blue-600 rounded-md">
                <Satellite size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white font-outfit">Orbitonomics</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Revolutionizing global disaster management through satellite intelligence and geospatial analytics. Founded in 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-blue-400 transition-colors border border-white/5">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-blue-400 transition-colors border border-white/5">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-blue-400 transition-colors border border-white/5">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/team" className="text-slate-400 hover:text-white transition-colors">Founder & CEO</Link></li>
              <li><Link to="/impact" className="text-slate-400 hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/impact" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/impact" className="text-slate-400 hover:text-white transition-colors">Impact Reports</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Media Kit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Stay updated on our mapping missions.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-slate-900 border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                <Mail size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Orbitonomics. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
