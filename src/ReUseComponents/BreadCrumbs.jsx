import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  return (
    <nav className="flex mx-2 sticky top-[4.5rem] z-10 py-3 px-2 rounded-md bg-white/60 dark:bg-brandDark-950/50 backdrop-blur-md" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index}>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <Link 
                to={`/${pathSegments.slice(0, index + 1).join('/')}`}
                className={`ml-1 text-sm font-medium capitalize ${
                  index === pathSegments.length - 1
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {segment}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default BreadCrumbs
