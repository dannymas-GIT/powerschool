import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BookOpen, 
  Settings,
  DollarSign,
  School,
  GraduationCap,
  Briefcase,
  LineChart,
  FileText,
  Truck,
  Wrench,
  Coffee,
  Monitor,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import logoImage from '@/images/rdsd-logo.png';

interface NavigationSection {
  name: string;
  icon: React.ElementType;
  items: {
    name: string;
    to: string;
    icon: React.ElementType;
  }[];
}

const navigationSections: NavigationSection[] = [
  {
    name: 'Overview',
    icon: Home,
    items: [
      { name: 'Dashboard', to: '/', icon: Home },
      { name: 'Analytics', to: '/analytics', icon: LineChart },
    ]
  },
  {
    name: 'Academics',
    icon: GraduationCap,
    items: [
      { name: 'Students', to: '/students', icon: Users },
      { name: 'Courses', to: '/courses', icon: BookOpen },
      { name: 'Assessment', to: '/assessment', icon: FileText },
      { name: 'Programs', to: '/programs', icon: GraduationCap },
    ]
  },
  {
    name: 'Administration',
    icon: Briefcase,
    items: [
      { name: 'Finance', to: '/finance', icon: DollarSign },
      { name: 'HR', to: '/hr', icon: Briefcase },
      { name: 'Schools', to: '/schools', icon: School },
      { name: 'Technology', to: '/technology', icon: Monitor },
    ]
  },
  {
    name: 'Operations',
    icon: Wrench,
    items: [
      { name: 'Facilities', to: '/facilities', icon: Wrench },
      { name: 'Transportation', to: '/transportation', icon: Truck },
      { name: 'Food Services', to: '/food-services', icon: Coffee },
    ]
  },
];

export const Sidebar = () => {
  const { user } = useAuth();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'Overview': true,
    'Academics': false,
    'Administration': false,
    'Operations': false,
  });

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  return (
    <div className="flex h-full flex-col bg-white dark:bg-gray-800">
      <div className="flex h-16 items-center justify-center border-b border-gray-200 dark:border-gray-700">
        <img 
          src={logoImage} 
          alt="PowerSchool Dashboard Logo" 
          className="h-8 w-auto" 
        />
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto pt-4 pb-4">
        <div className="flex flex-col items-center mb-6">
          <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center">
            <Users className="h-6 w-6 text-primary-600 dark:text-primary-200" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user?.fullName || 'Guest'}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email || 'Not logged in'}</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-2">
          {navigationSections.map((section) => {
            const isExpanded = expandedSections[section.name];
            
            return (
              <div key={section.name} className="mb-2">
                <button
                  className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => toggleSection(section.name)}
                >
                  <section.icon className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="flex-1 text-left">{section.name}</span>
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="mt-1 ml-4 space-y-1">
                    {section.items.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                            isActive
                              ? 'bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-200'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200'
                          }`
                        }
                      >
                        <item.icon
                          className="mr-3 h-5 w-5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-600 p-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
              isActive
                ? 'bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-200'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200'
            }`
          }
        >
          <Settings className="mr-3 h-5 w-5" />
          Settings
        </NavLink>
      </div>
    </div>
  );
}; 