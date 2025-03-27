import React from 'react';
import { Bell, Lock, User, Globe, Mail, Shield } from 'lucide-react';

const sections = [
  {
    id: 'profile',
    title: 'Profile Settings',
    icon: User,
    description: 'Update your personal information and preferences.',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', value: 'John Doe' },
      { name: 'email', label: 'Email', type: 'email', value: 'john@example.com' },
      { name: 'title', label: 'Job Title', type: 'text', value: 'Administrator' },
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    description: 'Configure how you receive notifications.',
    options: [
      { id: 'email-notif', label: 'Email Notifications', enabled: true },
      { id: 'push-notif', label: 'Push Notifications', enabled: false },
      { id: 'sms-notif', label: 'SMS Notifications', enabled: false },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    icon: Shield,
    description: 'Manage your security preferences and login options.',
    options: [
      { id: '2fa', label: 'Two-factor Authentication', enabled: true },
      { id: 'login-alerts', label: 'Login Alerts', enabled: true },
      { id: 'device-tracking', label: 'Device Tracking', enabled: false },
    ],
  },
];

export const Settings = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold text-secondary-900 dark:text-white">
          Settings
        </h1>
        <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-400">
          Manage your account settings and preferences.
        </p>

        <div className="mt-8 space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="bg-white dark:bg-secondary-800 shadow rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <Icon className="h-6 w-6 text-primary-500" />
                    <h2 className="ml-3 text-lg font-medium text-secondary-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-400">
                    {section.description}
                  </p>

                  <div className="mt-6 space-y-6">
                    {section.fields && (
                      <div className="space-y-6">
                        {section.fields.map((field) => (
                          <div key={field.name}>
                            <label
                              htmlFor={field.name}
                              className="block text-sm font-medium text-secondary-700 dark:text-secondary-300"
                            >
                              {field.label}
                            </label>
                            <input
                              type={field.type}
                              name={field.name}
                              id={field.name}
                              defaultValue={field.value}
                              className="mt-1 block w-full rounded-md border-secondary-300 dark:border-secondary-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm dark:bg-secondary-700 dark:text-white"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {section.options && (
                      <div className="space-y-4">
                        {section.options.map((option) => (
                          <div
                            key={option.id}
                            className="flex items-center justify-between"
                          >
                            <span className="flex-grow flex flex-col">
                              <span className="text-sm font-medium text-secondary-900 dark:text-white">
                                {option.label}
                              </span>
                            </span>
                            <button
                              type="button"
                              className={`${
                                option.enabled
                                  ? 'bg-primary-600'
                                  : 'bg-secondary-200 dark:bg-secondary-700'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                              role="switch"
                              aria-checked={option.enabled}
                            >
                              <span
                                aria-hidden="true"
                                className={`${
                                  option.enabled ? 'translate-x-5' : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {section.fields && (
                  <div className="px-6 py-4 bg-secondary-50 dark:bg-secondary-900">
                    <button className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500">
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 