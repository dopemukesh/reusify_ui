import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Paginations = ({ routes }) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const currentIndex = routes.indexOf(location.pathname);
    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < routes.length - 1;

    return (
        <>
            {/* Pagination */}
            <div className="flex justify-between items-center mb-4">
                <button
                    className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
                    disabled={!hasPrevious}
                    onClick={() => navigate(routes[currentIndex - 1])}
                >
                    ← Previous
                </button>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                    Page {currentIndex + 1} of {routes.length}
                </div>
                <button
                    className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
                    disabled={!hasNext}
                    onClick={() => navigate(routes[currentIndex + 1])}
                >
                    Next →
                </button>
            </div>
            {/* Pagination Ends */}
        </>
    )
}

export default Paginations