'use client';
import ExperienceSection from '../components/ExperienceSection';

export default function ExperiencePage() {
  const experience = [
    {
      id: 1,
      title: 'Junior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2024 - Sekarang',
      description: 'Mengikuti pengembangan aplikasi web skala besar.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Experience</h1>
      <ExperienceSection experience={experience} />
    </div>
  );
}
