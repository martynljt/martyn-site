import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/Hero';
import { OverviewSection } from '@/components/OverviewSection';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Martyn Jordan-Taft - Software Engineer</title>
        <meta name="description" content="Martyn Jordan-Taft's personal portfolio website, showcasing projects, skills, and experience as a Software Engineer." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <Hero />
        <OverviewSection />
        <h1>Welcome to Martyn's Portfolio</h1>
      </div>
    </>
  );
};

