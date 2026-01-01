import { Helmet } from 'react-helmet-async';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Martyn Jordan-Taft - Projects</title>
        <meta name="description" content="Explore the portfolio of Martyn Jordan-Taft, showcasing various software development projects and their details." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </>
  );
};

