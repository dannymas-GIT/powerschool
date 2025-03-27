import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserMenu } from '@/components/UserMenu';
import { useAuth } from '@/hooks/useAuth';
import logoImage from '@/images/rdsd-logo.png';

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={logoImage} 
                alt="PowerSchool Dashboard Logo" 
                className="h-10 w-auto" 
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <UserMenu user={user} />
          </div>
        </div>
      </div>
    </header>
  );
}; 