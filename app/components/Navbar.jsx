'use client';
import Link from 'next/link';
import { Code, Award, Briefcase, User } from 'lucide-react';

export default function Navbar() {
  const links = [
    { href: '/projects', label: 'Projects', icon: <Code className="w-5 h-5" /> },
    { href: '/skills', label: 'Skills', icon: <Award className="w-5 h-5" /> },
    { href: '/experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
    { href: '/about', label: 'About', icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="flex justify-center gap-4 mb-12 flex-wrap">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 bg-white/10 text-gray-300 hover:bg-white/20"
        >
          {link.icon} {link.label}
        </Link>
      ))}
    </div>
  );
}
