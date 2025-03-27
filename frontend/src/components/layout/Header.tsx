import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserMenu } from '@/components/UserMenu';

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              PowerSchool Dashboard
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <UserMenu user={user} />
          </div>
        </div>
      </div>
    </header>
  );
}; 