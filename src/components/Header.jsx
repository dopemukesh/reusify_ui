// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Function to check if the current path starts with the given path
    const isPathActive = (path) => {
        const currentPath = location.pathname;
        if (path === '/') {
            return currentPath === '/';
        }
        return currentPath.startsWith(path);
    };

    // Function to get active class based on path
    const getActiveClass = (isActive) => {
        return isActive 
            ? 'text-brandDark-800 dark:text-white glow-text' 
            : 'text-brandDark-400 dark:text-brandDark-400';
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleComponentsClick = (e) => {
        if (isPathActive('/components')) {
            e.preventDefault();
            return;
        }
        navigate('/components/buttons');
    };

    return (
        <>
            <header className="overflow-hidden sticky top-0 z-[999] w-screen flex justify-center bg-white/50 dark:bg-brandDark-950/50 backdrop-blur-xl text-sm border-b border-brandDark-200 dark:border-brandDark-800">
                <nav className="max-w-[1440px] flex-1 flex items-center justify-between py-2 px-4 lg:px-0">
                    {/* Logo */}
                    <div className='relative flex text-brandDark-800 dark:text-white text-lg font-semibold glow-text-logo'>
                        <NavLink to="/">Reusify</NavLink>
                    </div>

                    {/* Navlinks */}
                    <div id="navlinks" className="hidden md:flex items-center gap-4 font-medium">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => getActiveClass(isActive)}
                            end
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/docs" 
                            className={() => getActiveClass(isPathActive('/docs'))}
                        >
                            Docs
                        </NavLink>
                        <NavLink 
                            to="/components" 
                            className={() => getActiveClass(isPathActive('/components'))}
                            onClick={handleComponentsClick}
                        >
                            Components
                        </NavLink>
                        <NavLink 
                            to="/ui-kit" 
                            className={() => getActiveClass(isPathActive('/ui-kit'))}
                        >
                            UI Kit
                        </NavLink>
                        <NavLink 
                            to="/icons" 
                            className={() => getActiveClass(isPathActive('/icons'))}
                        >
                            Icons
                        </NavLink>
                    </div>

                    {/* Actions */}
                    <div id="nav-actions" className="flex gap-2">
                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleSidebar}
                            className={`md:hidden bg-white dark:bg-brandDark-900 hover:bg-brandDark-100 dark:hover:bg-brandDark-800 border border-brandDark-200 dark:border-brandDark-700 shadow-md text-brandDark-800 dark:text-white w-11 h-11 rounded-xl flex items-center justify-center ${isSidebarOpen ? 'hidden' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    )
}

export default Header