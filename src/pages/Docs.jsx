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
    <div className='flex flex-col md:flex-row'>
      {/* Sidebar */}
      <CommonDetailsSidebar />

      {/* Main Content */}
      <div className='w-full md:ml-80 min-h-screen'>
        <div className='max-w-4xl px-4 pb-4'>

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
  )
}

export default Docs