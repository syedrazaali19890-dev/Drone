import React from 'react';
import { Button } from '../components/buttons/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
      <h1 className="text-9xl font-heading font-black text-[var(--color-border)] mb-6">404</h1>
      <h2 className="text-3xl font-bold text-white mb-4">Signal Lost</h2>
      <p className="text-[var(--color-text-secondary)] max-w-md mx-auto mb-8">The page you are looking for has been moved or no longer exists in our database.</p>
      <Link to="/">
        <Button variant="primary" size="lg">Return to Base</Button>
      </Link>
    </div>
  );
};

export default NotFound;
