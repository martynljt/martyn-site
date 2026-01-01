import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline self-start">
          View Project
        </a>
      </CardContent>
    </Card>
  );
};

