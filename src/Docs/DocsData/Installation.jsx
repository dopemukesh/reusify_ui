import React from 'react';
import CodeAndCopy from '../../ReUseComponents/CodeAndCopy';

const Installation = () => {
    return (
        <section id='installation'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>Installation</h3>
            
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
                You can install Reusify using npm or yarn. The package includes all the components and utilities needed to get started.
            </p>

            <h4 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>Using npm</h4>
            <CodeAndCopy codeString='npm install @reusify/components' />

            <h4 className='text-lg font-medium text-gray-900 dark:text-white mt-6 mb-2'>Using yarn</h4>
            <CodeAndCopy codeString='yarn add @reusify/components' />

            <div className='mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800'>
                <p className='text-yellow-800 dark:text-yellow-200'>
                    <span className='font-medium'>Note:</span> Make sure you have React 16.8+ installed in your project, as Reusify uses hooks internally.
                </p>
            </div>

            <h4 className='text-lg font-medium text-gray-900 dark:text-white mt-6 mb-2'>Peer Dependencies</h4>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
                Reusify requires the following peer dependencies to be installed in your project:
            </p>
            <ul className='list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 mb-4'>
                <li>React ≥16.8.0</li>
                <li>React DOM ≥16.8.0</li>
                <li>Tailwind CSS ≥3.0.0</li>
            </ul>

            <h4 className='text-lg font-medium text-gray-900 dark:text-white mt-6 mb-2'>Configuration</h4>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
                After installing Reusify, you'll need to configure your project to use it properly:
            </p>

            <h5 className='text-base font-medium text-gray-900 dark:text-white mt-4 mb-2'>1. Tailwind CSS Setup</h5>
            <p className='text-gray-600 dark:text-gray-400 mb-3'>
                Add Reusify's path to your Tailwind CSS configuration:
            </p>
            <CodeAndCopy 
                codeString={`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@reusify/components/**/*.{js,jsx}"
  ],
  // ... rest of your config
}`} 
            />

            <h5 className='text-base font-medium text-gray-900 dark:text-white mt-6 mb-2'>2. Theme Provider Setup</h5>
            <p className='text-gray-600 dark:text-gray-400 mb-3'>
                Wrap your application with ReusifyProvider:
            </p>
            <CodeAndCopy 
                codeString={`import { ReusifyProvider } from '@reusify/components';

function App() {
  return (
    <ReusifyProvider>
      {/* Your app components */}
    </ReusifyProvider>
  );
}`} 
            />

            <div className='mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800'>
                <p className='text-blue-800 dark:text-blue-200'>
                    💡 Pro tip: Check out our Usage guide next to learn how to start using Reusify components in your project.
                </p>
            </div>

            <h4 className='text-lg font-medium text-gray-900 dark:text-white mt-6 mb-2'>Troubleshooting</h4>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>
                If you encounter any issues during installation:
            </p>
            <ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-4'>
                <li>Make sure all peer dependencies are correctly installed</li>
                <li>Clear your npm/yarn cache and try reinstalling</li>
                <li>Check that your Node.js version is 14.0.0 or higher</li>
                <li>Verify your Tailwind CSS configuration includes Reusify's path</li>
            </ul>

            <div className='mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800'>
                <p className='text-green-800 dark:text-green-200'>
                    <span className='font-medium'>Need help?</span> Join our Discord community or open an issue on GitHub for support.
                </p>
            </div>
        </section>
    );
};

export default Installation;
