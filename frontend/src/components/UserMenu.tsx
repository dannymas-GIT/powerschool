import React from 'react';
import { Menu } from '@headlessui/react';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface UserMenuProps {
  user: {
    email: string;
    fullName: string;
  } | null;
}

export const UserMenu = ({ user }: UserMenuProps) => {
  const { logout } = useAuth();

  if (!user) return null;

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex items-center max-w-xs rounded-full bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
            <User className="h-5 w-5 text-primary-600 dark:text-primary-400" />
          </div>
        </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
          <div className="font-medium">{user.fullName}</div>
          <div className="text-gray-500 dark:text-gray-400 text-xs">{user.email}</div>
        </div>
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={logout}
              className={`${
                active ? 'bg-gray-100 dark:bg-gray-700' : ''
              } flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
            >
              <LogOut className="mr-3 h-4 w-4" />
              Sign out
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}; 