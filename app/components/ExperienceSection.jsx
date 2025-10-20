'use client';

export default function ExperienceSection({ experience }) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {experience.map((exp) => (
        <div
          key={exp.id}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
              <p className="text-purple-300 font-semibold">{exp.company}</p>
            </div>
            <span className="px-4 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm">
              {exp.period}
            </span>
          </div>
          <p className="text-gray-300">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
