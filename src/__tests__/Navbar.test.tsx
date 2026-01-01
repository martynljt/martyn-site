import { render, screen } from '@testing-library/react';
import { Navbar } from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText('Martyn JT')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /about page/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects page/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact page/i })).toBeInTheDocument();
  });

  it('renders a menu button for mobile', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });
});

