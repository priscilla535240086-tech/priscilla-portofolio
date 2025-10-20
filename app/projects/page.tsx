'use client';
import ProjectsSection from '../components/ProjectsSection';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur keranjang, pembayaran, dan manajemen produk.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      image: '🛒',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan drag-and-drop dan kolaborasi tim real-time.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: '📋',
      link: '#'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <ProjectsSection projects={projects} />
    </div>
  );
}
