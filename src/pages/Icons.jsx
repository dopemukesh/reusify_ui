import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { AiOutlineCopy } from 'react-icons/ai'

const Icons = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Icons
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Browse our collection of beautiful icons
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search icons..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-brandDark-700 bg-white dark:bg-brandDark-900 text-gray-900 dark:text-white focus:outline-none focus:border-brandDark-300 dark:focus:border-brandDark-500"
          />
        </div>
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example Icon Cards */}
        {[...Array(12)].map((_, index) => (
          <div key={index} className="bg-white dark:bg-brandDark-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <BiCodeAlt className="text-4xl text-blue-500" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">icon-name-{index + 1}</p>
              <button className="flex items-center text-sm text-blue-500 hover:text-blue-600">
                <AiOutlineCopy className="mr-1" />
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Documentation Section */}
      <div className="mt-16 bg-white dark:bg-brandDark-900 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Usage Instructions
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            To use these icons in your project, simply copy the icon code and import it from the react-icons library.
            Make sure you have react-icons installed in your project.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Icons
