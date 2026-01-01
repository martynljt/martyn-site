import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-background border-t py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2026 Martyn Jordan-Taft</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/martynljt" target="_blank" rel="noopener noreferrer" aria-label="Martyn's GitHub profile">
            <Button variant="ghost">GitHub</Button>
          </a>
          {/* Add other social links here */}
        </div>
      </div>
    </footer>
  );
};

