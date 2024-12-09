// HomeCard.jsx
// This is the HomeCard component that displays feature cards in a circular layout inspired by the provided design

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeCard = () => {
    const [activeTab, setActiveTab] = useState('React');

    const getCodeContent = () => {
        switch (activeTab) {
            case 'React':
                return `import React from 'react';

const Button = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click me
    </button>
  );
};
export default Button;`;

            case 'PNG':
                return <img src="vite.svg" alt="Component Preview" className='rounded-md bg-brandDark-100 dark:bg-brandDark-700 w-full h-28 p-2' />;

            case 'SVG':
                return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`;
            default:
                return '';
        }
    };

    return (
        <div className="flex flex-col mt-12 bg-gradient-to-r from-rose-500 to-orange-300 rounded-xl p-[1px]">
            <p className='px-2 py-2 text-brandDark-100 text-sm'>Use our <span className='bg-orange-300 px-1'>premium</span> components code</p>
            <div className='bg-white dark:bg-brandDark-900 border border-brandDark-200 dark:border-brandDark-600 flex flex-col gap-3 overflow-hidden rounded-xl p-4 md:p-6'>
                <div className='justify-between items-center p-2 rounded-md'>

                    <div className='flex items-start justify-between p-2 rounded-md'>
                        <div className='flex flex-col'>
                            <h2 className='text-lg font-semibold text-brandDark-800 dark:text-white'>Components Like This</h2>
                            <p className='text-sm text-brandDark-500 dark:text-brandDark-400'>by Reusify</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <button className='text-brandDark-600 dark:text-brandDark-400 hover:text-brandDark-800 dark:hover:text-white transition-colors'>Share</button>
                            <button className='text-brandDark-600 dark:text-brandDark-400 hover:text-brandDark-800 dark:hover:text-white transition-colors'>X</button>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-2 items-start py-3'>
                        <button className='text-xs text-brandDark-600 dark:text-brandDark-400 border border-brandDark-300 dark:border-brandDark-600 px-3 py-1 rounded-md hover:bg-brandDark-100 dark:hover:bg-brandDark-700 hover:text-brandDark-800 dark:hover:text-white transition-colors'>UI Components</button>
                        <button className='text-xs text-brandDark-600 dark:text-brandDark-400 border border-brandDark-300 dark:border-brandDark-600 px-3 py-1 rounded-md hover:bg-brandDark-100 dark:hover:bg-brandDark-700 hover:text-brandDark-800 dark:hover:text-white transition-colors'>React</button>
                    </div>
                </div>

                <div className='relative bg-brandDark-50 dark:bg-brandDark-800 border border-brandDark-200 dark:border-brandDark-600 p-4 rounded-xl'>
                    <div className='mb-3 gap-2 flex w-fit'>
                        <span
                            onClick={() => setActiveTab('React')}
                            className={`cursor-pointer inline-block text-xs ${activeTab === 'React' ? 'text-brandDark-50 dark:text-brandDark-800 bg-brandDark-600 dark:bg-brandDark-50' : 'text-brandDark-700 dark:text-brandDark-300 bg-brandDark-100 dark:bg-brandDark-800'} font-semibold sm:font-normal border border-brandDark-200 dark:border-brandDark-600 px-3 py-1 rounded-md`}
                        >
                            React
                        </span>
                        <span
                            onClick={() => setActiveTab('PNG')}
                            className={`cursor-pointer inline-block text-xs ${activeTab === 'PNG' ? 'text-brandDark-50 dark:text-brandDark-800 bg-brandDark-600 dark:bg-brandDark-50' : 'text-brandDark-700 dark:text-brandDark-300 bg-brandDark-100 dark:bg-brandDark-800'} font-semibold sm:font-normal border border-brandDark-200 dark:border-brandDark-600 px-3 py-1 rounded-md`}
                        >
                            PNG
                        </span>
                        <span
                            onClick={() => setActiveTab('SVG')}
                            className={`cursor-pointer inline-block text-xs ${activeTab === 'SVG' ? 'text-brandDark-50 dark:text-brandDark-800 bg-brandDark-600 dark:bg-brandDark-50' : 'text-brandDark-700 dark:text-brandDark-300 bg-brandDark-100 dark:bg-brandDark-800'} font-semibold sm:font-normal border border-brandDark-200 dark:border-brandDark-600 px-3 py-1 rounded-md`}
                        >
                            SVG
                        </span>
                    </div>
                    <pre id='componentCode' className='text-brandDark-700 dark:text-brandDark-300 text-sm md:text-base whitespace-pre-wrap'>
                        {getCodeContent()}
                    </pre>
                </div>

                <div className='flex flex-wrap gap-3 rounded-md'>
                    <button className='flex-1 min-w-[120px] px-4 py-2 bg-brandDark-100 dark:bg-brandDark-700 hover:bg-brandDark-200 dark:hover:bg-brandDark-600 text-brandDark-800 dark:text-white rounded-lg transition-colors text-sm font-medium'>Copy Code</button>
                    <button className='flex-1 min-w-[120px] px-4 py-2 bg-brandDark-800 dark:bg-white hover:bg-brandDark-700 dark:hover:bg-brandDark-100 text-white dark:text-brandDark-800 rounded-lg transition-colors text-sm font-medium'>Reuse Code</button>
                </div>

            </div>
        </div>
    );
};

export default HomeCard;
