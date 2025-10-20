'use client';

export default function ContactSection() {
  return (
    <div className="mt-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Mari Berkolaborasi!</h2>
      <p className="text-gray-300 mb-6">
        Tertarik bekerja sama? Jangan ragu untuk menghubungi saya.
      </p>
      <a
        href="mailto:john@example.com"
        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
      >
        Hubungi Saya
      </a>
    </div>
  );
}
