import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, description }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-border before:dark:bg-slate-700 before:ml-auto before:mr-auto before:w-px before:!bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent dark:before:via-slate-700 before:top-8 before:-translate-x-1/2 before:z-0">
        <div className="absolute left-2 sm:left-0 top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white sm:order-0 group-hover:before:bg-slate-900 pointer-events-none z-10">
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M12 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2Z" /></svg>
        </div>
        <time className="sm:absolute left-0 top-[2.2rem] opacity-80 text-xs sm:text-sm font-medium text-gray-500 min-w-[7rem] sm:text-right mb-1 sm:mb-0">
          {date}
        </time>
        <Card className="flex-grow w-full sm:w-auto">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  const timelineData: TimelineItemProps[] = [
    {
      title: 'Software Engineer',
      date: 'Jan 2023 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and TypeScript.',
    },
    {
      title: 'Junior Developer',
      date: 'Jul 2021 - Dec 2022',
      description: 'Assisted in the development of client-side features and bug fixes.',
    },
    {
      title: 'Intern',
      date: 'Jan 2021 - Jun 2021',
      description: 'Gained hands-on experience with various programming languages and tools.',
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

