// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import SearchData from '../API/SearchData.json';
import { FaSearch } from 'react-icons/fa';
import HomeCard from './PageComponents/HomeCard';

const Home = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    // Remove spaces and filter components
    const searchTerm = searchValue.toLowerCase().replace(/\s/g, '');
    const results = SearchData.filter(component =>
      component.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }

  const handleComponentClick = (componentName) => {
    setSearch(componentName);
    const results = SearchData.filter(component =>
      component.name.toLowerCase() === componentName.toLowerCase()
    );
    setSearchResults(results);
  }

  // Function to highlight matching text
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    // If text exactly matches search term, don't highlight
    if (text.toLowerCase() === searchTerm.toLowerCase().replace(/\s/g, '')) {
      return text;
    }

    const searchTermClean = searchTerm.toLowerCase().replace(/\s/g, '');
    const parts = text.split(new RegExp(`(${searchTermClean})`, 'gi'));

    return parts.map((part, index) =>
      part.toLowerCase() === searchTermClean ?
        <span key={index} className="glow-text-search dark:text-white">{part}</span> : part
    );
  }

  return (
    <>
      <div className='min-h-screen-minus-header py-56 w-full flex justify-center'>
        <section id='heroSection' className='grid place-content-center w-full px-4 md:px-0'>

          <h1 className='text-4xl font-bold text-brandDark-800 dark:text-white text-center mb-4 glow-text-2 sm:glow-text-3'>Explore Modern UI Components</h1>
          <div id='searchOption' className='flex gap-2 justify-center'>

            {/* Search Input */}
            <div tabIndex="0" className='relative cursor-pointer flex flex-1 max-w-80 items-center'>
              <FaSearch className="absolute left-3 z-10 text-gray-400 h-4 w-4 " />
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search components..."
                className="flex flex-1 w-full outline-none rounded-md text-sm dark:text-brandDark-400 text-brandDark-800 bg-white dark:bg-brandDark-800/50 dark:backdrop-blur-sm dark:shadow-md border dark:border-brandDark-600 focus:border-brandDark-300 dark:focus:border-brandDark-500 py-3 pl-10 pr-4"
              />
            </div>

            {/* Process Now Button */}
            <button className="bg-brandDark-900 hover:bg-brandDark-600 dark:bg-white dark:hover:bg-brandDark-200 text-sm font-medium text-white dark:text-brandDark-800 px-4 py-2 rounded-md active:scale-95 whitespace-nowrap">
              <span>Process Now</span>
            </button>
          </div>

          {/* Display search results */}
          {search && (
            <div className='flex justify-center'>
              <div id='searchResults' className="mt-4 text-center max-h-96 max-w-[446px] flex-1 overflow-scroll bg-white border border-brandDark-200 dark:border-brandDark-500 dark:bg-brandDark-900 rounded-xl p-2">
                {searchResults.length > 0 ? (
                  <ul className="space-y-1 w-full">
                    {searchResults.map(component => (
                      <li
                        key={component.id}
                        onClick={() => handleComponentClick(component.name)}
                        className="text-start text-brandDark-800 dark:text-brandDark-300 dark:hover:text-white border border-transparent dark:border-transparent hover:border-brandDark-200 dark:hover:border-brandDark-500 hover:bg-brandDark-100 dark:hover:bg-brandDark-700 rounded-md p-3 cursor-pointer active:bg-brandDark-50 dark:active:bg-brandDark-500"
                      >
                        {highlightText(component.name, search)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-brandDark-800 dark:text-white p-2">No components found</p>
                )}
              </div>
            </div>
          )}

          {/* Home Cards */}
          <HomeCard />
          {/* Home Cards Ends */}
        </section>
      </div>
    </>
  )
}

export default Home