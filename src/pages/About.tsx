import { Helmet } from 'react-helmet-async';
import { BioSection } from '@/components/BioSection';
import { Timeline } from '@/components/Timeline';
import { SkillsGrid } from '@/components/SkillsGrid';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About Martyn Jordan-Taft</title>
        <meta name="description" content="Learn more about Martyn Jordan-Taft, his professional journey, skills, and experience as a Software Engineer." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1>About Me</h1>
        <BioSection />
        <Timeline />
        <SkillsGrid />
      </div>
    </>
  );
};

