'use client';
import SkillsSection from '../components/SkillSection';

export default function SkillsPage() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
      <SkillsSection skills={skills} />
    </div>
  );
}
