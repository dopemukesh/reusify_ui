import React from 'react'
import { useLocation } from 'react-router-dom'
import CommonDetailsSidebar from '../ReUseComponents/CommonDetailsSidebar'
import BreadCrumbs from '../ReUseComponents/BreadCrumbs'
import ComponentsContents from '../Components Data/ComponentsContents';
import Paginations from '../ReUseComponents/Paginations'

const Components = () => {
  const location = useLocation();

  const routes = [
    '/components/buttons',
    '/components/forms',
    '/components/cards',
    '/components/accordions'
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
          <ComponentsContents />
          {/* Contents Ends */}

          {/* Pagination */}
          <Paginations routes={routes} />
          {/* Pagination Ends */}

        </div>
      </div>
    </div>
  )
}

export default Components