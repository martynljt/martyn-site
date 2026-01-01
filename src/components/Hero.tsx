import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="text-center py-20">
      <Avatar className="mx-auto mb-4 w-24 h-24">
        <img src="/profile.jpg" alt="Martyn" loading="lazy" />
      </Avatar>
      <h1 className="text-4xl font-bold">Martyn Jordan-Taft</h1>
      <p className="text-xl">Software Engineer</p>
      <Link to="/contact">
        <Button className="mt-4">Contact Me</Button>
      </Link>
    </section>
  );
};

