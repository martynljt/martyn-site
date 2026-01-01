import { Helmet } from 'react-helmet-async';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Martyn Jordan-Taft</title>
        <meta name="description" content="Get in touch with Martyn Jordan-Taft. Use the contact form or connect via social media." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Find me on social media:</h2>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/martynljt" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">GitHub</Button>
              </a>
              {/* Add other social links here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

