
import React from 'react';
import { APP_TITLE, APP_DESCRIPTION } from '../config/config';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 mb-6 opacity-0 animate-fadeIn">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {APP_TITLE}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {APP_DESCRIPTION}
        </p>
      </div>
    </header>
  );
};

export default Header;
