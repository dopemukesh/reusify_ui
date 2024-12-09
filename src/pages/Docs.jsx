import React from 'react'
import { useLocation } from 'react-router-dom'
import CommonDetailsSidebar from '../ReUseComponents/CommonDetailsSidebar'
import BreadCrumbs from '../ReUseComponents/BreadCrumbs'
import DocsContents from '../Docs/DocsContents'
import Paginations from '../ReUseComponents/Paginations'

const Docs = () => {
  const location = useLocation();

  const routes = [
    '/docs/introduction',
    '/docs/installation',
    '/docs/usage'
  ];

  return (
    <div className='flex flex-col md:flex-row justify-center'>
      <div className='max-w-[1440px] flex-1'>
        {/* Sidebar */}
        <CommonDetailsSidebar />

        {/* Main Content */}
        <div className='w-full md:ml-64 min-h-screen flex items-center'>
          <div className='max-w-4xl px-4 pb-4 w-full'>

            {/* Breadcrumbs */}
            <BreadCrumbs />
            {/* Breadcrumbs Ends */}

            {/* Contents */}
            <DocsContents />
            {/* Contents Ends */}

            {/* Pagination */}
            <Paginations routes={routes} />
            {/* Pagination Ends */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Docs