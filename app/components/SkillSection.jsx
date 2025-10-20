'use client';

export default function SkillsSection({ skills }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
      {skills.map((group, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-4">{group.category}</h3>
          <div className="flex flex-wrap gap-3">
            {group.items.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
