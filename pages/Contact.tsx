
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, logic to send the message would go here.
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h1 className="text-4xl font-bold text-white mb-6">Connect</h1>
              <p className="text-slate-400 mb-12">
                Have questions about our mapping technology or interested in a partnership? We'd love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-slate-400 text-sm">contact@orbitonomics.com</p>
                    <p className="text-slate-400 text-sm">partnership@orbitonomics.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-slate-400 text-sm">+1 (555) 012-3456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Office</h4>
                    <p className="text-slate-400 text-sm">Geospatial Hub, Suite 400</p>
                    <p className="text-slate-400 text-sm">Palo Alto, CA 94301</p>
                  </div>
                </div>
              </div>

              {/* Founder Tag */}
              <div className="mt-16 p-6 bg-slate-900 rounded-2xl border border-white/5">
                <p className="text-xs text-slate-500 italic">
                  "Every conversation is a step toward a safer world. Reach out to discuss how we can help your region."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">AA</div>
                  <div>
                    <p className="text-white text-xs font-bold">Aryav Agrawal</p>
                    <p className="text-slate-500 text-[10px]">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                {submitted ? (
                  <div className="py-12 text-center animate-in zoom-in duration-300">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-6">
                      <CheckCircle2 size={48} className="text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Message Sent</h2>
                    <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                      Thank you for reaching out to Orbitonomics. We will review your inquiry and get back to you within 24-48 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 px-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Jane Doe" 
                          className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 px-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="jane@example.com" 
                          className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400 px-1">Interest Area</label>
                      <select className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none">
                        <option>Government Partnership</option>
                        <option>NGO Collaboration</option>
                        <option>Technical Inquiry</option>
                        <option>Media/Press</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400 px-1">Message</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="How can we help you?" 
                        className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/20"
                    >
                      <span>Send Message</span>
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
