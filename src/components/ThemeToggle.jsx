import React from 'react'
import MoonIcon from '/moon-light.svg'
import SunIcon from '/sun-light.svg'
import { create } from 'zustand'

// Create a global theme store
const useThemeStore = create((set) => ({
    theme: "dark", // Default theme is dark
    setTheme: (newTheme) => set({ theme: newTheme }),
}))

const ThemeToggle = () => {
    const { theme, setTheme } = useThemeStore()

    // Add dark class to body on initial load
    React.useEffect(() => {
        document.body.classList.add("dark");
    }, []);

    // Theme toggle handler
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        
        if (newTheme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        
        setTheme(newTheme);
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="z-50 bg-white dark:bg-brandDark-900 hover:bg-brandDark-100 dark:hover:bg-brandDark-800 border border-brandDark-200 dark:border-brandDark-700 shadow-md text-white text-md w-11 h-11 overflow-hidden grid place-items-center rounded-xl"
        >
            {theme === "light" ? <img src={MoonIcon} alt="Moon Icon" /> : <img src={SunIcon} alt="Sun Icon" />}
        </button>
    )
}

export default ThemeToggle
