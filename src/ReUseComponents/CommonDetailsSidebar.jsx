import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DocsSidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <aside className='w-full md:w-64 h-auto md:h-screen border-b md:border-r border-brandDark-200 dark:border-brandDark-500 overflow-y-auto md:fixed'>
            <div className='p-6'>
                <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>Getting Started</h2>

                <div className='space-y-6'>
                    {/* Getting Started Section */}
                    <div className='space-y-2'>
                        <ul className='list-none text-gray-600 dark:text-gray-400'>
                            <li>
                                <Link
                                    to="/docs/introduction"
                                    className={`hover:text-gray-900 dark:hover:text-white cursor-pointer block ${currentPath === '/docs/introduction' ? 'text-gray-900 dark:text-white font-medium' : ''
                                        }`}
                                >
                                    Introduction
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/docs/installation"
                                    className={`hover:text-gray-900 dark:hover:text-white cursor-pointer block ${currentPath === '/docs/installation' ? 'text-gray-900 dark:text-white font-medium' : ''
                                        }`}
                                >
                                    Installation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/docs/usage"
                                    className={`hover:text-gray-900 dark:hover:text-white cursor-pointer block ${currentPath === '/docs/usage' ? 'text-gray-900 dark:text-white font-medium' : ''
                                        }`}
                                >
                                    Usage
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Components Section */}
                    <div>
                        <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>Components</h3>
                        <ul className='list-none text-gray-600 dark:text-gray-400 space-y-1'>
                            <li>
                                <Link
                                    to="/components/buttons"
                                    className={`hover:text-gray-900 dark:hover:text-white cursor-pointer block ${currentPath === '/components/buttons' ? 'text-gray-900 dark:text-white font-medium' : ''
                                        }`}
                                >
                                    Buttons
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/components/forms"
                                    className={`hover:text-gray-900 dark:hover:text-white cursor-pointer block ${currentPath === '/components/forms' ? 'text-gray-900 dark:text-white font-medium' : ''
                                        }`}
                                >
                                    Forms
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/components/cards"
                                    className={`hover:text-gray-900 dark:hover:text-white cursor-pointer block ${currentPath === '/components/cards' ? 'text-gray-900 dark:text-white font-medium' : ''
                                        }`}
                                >
                                    Cards
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/components/accordions"
                                    className={`hover:text-gray-900 dark:hover:text-white cursor-pointer block ${currentPath === '/components/accordions' ? 'text-gray-900 dark:text-white font-medium' : ''
                                        }`}
                                >
                                    Accordions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customization Section */}
                    <div>
                        <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>Customization</h3>
                        <ul className='list-none text-gray-600 dark:text-gray-400 space-y-1'>
                            <li>
                                <Link
                                    to="/components/theming"
                                    className={`hover:text-gray-900 dark:hover:text-white cursor-pointer block ${currentPath === '/components/theming' ? 'text-gray-900 dark:text-white font-medium' : ''
                                        }`}
                                >
                                    Theming
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/components/styling"
                                    className={`hover:text-gray-900 dark:hover:text-white cursor-pointer block ${currentPath === '/components/styling' ? 'text-gray-900 dark:text-white font-medium' : ''
                                        }`}
                                >
                                    Styling
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default DocsSidebar;
