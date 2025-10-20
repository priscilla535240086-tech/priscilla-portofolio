'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="text-center mb-16">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center text-6xl">
        👨‍💻
      </div>
      <h1 className="text-5xl font-bold text-white mb-4">Priscilla Rebekah Tedja</h1>
      <p className="text-xl text-purple-200 mb-6">Full Stack Developer</p>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8">
        Passionate developer dengan 2+ tahun pengalaman dalam membangun aplikasi web modern.
        Spesialisasi dalam Node.js.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all">
          <Github className="w-6 h-6 text-white" />
        </a>
        <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all">
          <Linkedin className="w-6 h-6 text-white" />
        </a>
        <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all">
          <Mail className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
}
