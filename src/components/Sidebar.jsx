import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

    return (
        <>
            {/* Mobile Sidebar */}
            <div className={`z-[999] fixed top-0 right-0 h-screen w-64 bg-white dark:bg-brandDark-950 border-l border-brandDark-200 dark:border-brandDark-700 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="p-4">
                    {/* Close button */}
                    <button
                        onClick={toggleSidebar}
                        className="absolute top-4 right-4 text-brandDark-800 dark:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col gap-4 mt-12 font-medium h-full">
                        <NavLink
                            to="/"
                            onClick={toggleSidebar}
                            className={({ isActive }) => `${isActive ? 'text-brandDark-800 dark:text-white glow-text' : 'text-brandDark-400 dark:text-brandDark-400'}`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/docs"
                            onClick={toggleSidebar}
                            className={({ isActive }) => `${isActive ? 'text-brandDark-800 dark:text-white glow-text' : 'text-brandDark-400 dark:text-brandDark-400'}`}
                        >
                            Docs
                        </NavLink>
                        <NavLink
                            to="/components"
                            onClick={toggleSidebar}
                            className={({ isActive }) => `${isActive ? 'text-brandDark-800 dark:text-white glow-text' : 'text-brandDark-400 dark:text-brandDark-400'}`}
                        >
                            Components
                        </NavLink>
                        <NavLink
                            to="/ui-kit"
                            onClick={toggleSidebar}
                            className={({ isActive }) => `${isActive ? 'text-brandDark-800 dark:text-white glow-text' : 'text-brandDark-400 dark:text-brandDark-400'}`}
                        >
                            UI Kit
                        </NavLink>
                        <NavLink
                            to="/icons"
                            onClick={toggleSidebar}
                            className={({ isActive }) => `${isActive ? 'text-brandDark-800 dark:text-white glow-text' : 'text-brandDark-400 dark:text-brandDark-400'}`}
                        >
                            Icons
                        </NavLink>

                        <ThemeToggle />

                    </div>
                </div>

                {/* Overlay when sidebar is open */}
                {isSidebarOpen && (
                    <div
                        className="fixed bg-red-500 md:hidden"
                        onClick={toggleSidebar}
                    />
                )}
            </div>
        </>
    )
}

export default Sidebar