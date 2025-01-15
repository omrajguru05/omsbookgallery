import React from 'react';
import { Send, Twitter, Instagram, Github } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Get in Touch</h1>
          
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 mb-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 h-32"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Connect with Me</h2>
            <div className="flex justify-center gap-8">
              <a href="#" className="hover:text-gray-300 transition">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <Github className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;