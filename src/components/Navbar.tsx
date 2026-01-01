import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" aria-label="Home">
          Martyn JT
        </Link>
        <NavigationMenu className="hidden md:flex" aria-label="Main navigation">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/about" aria-label="About page">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/projects" aria-label="Projects page">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/contact" aria-label="Contact page">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenu>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden" aria-label="Open menu">
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
              <Link to="/about" onClick={() => setIsOpen(false)} aria-label="About page">
                About
              </Link>
              <Link to="/projects" onClick={() => setIsOpen(false)} aria-label="Projects page">
                Projects
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} aria-label="Contact page">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

