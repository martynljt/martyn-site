import { Badge } from '@/components/ui/badge';

export const SkillsGrid = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js',
    'Python', 'Django', 'Flask', 'SQL', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS',
    'ShadCN UI', 'HTML', 'CSS', 'Figma', 'Jest', 'Vitest',
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {skills.map((s) => (
          <Badge key={s} className="p-2 text-center flex items-center justify-center">
            {s}
          </Badge>
        ))}
      </div>
    </section>
  );
};

