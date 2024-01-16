import React from 'react'

import {
  HomeIcon,
  ChartBarIcon,
  DocumentSearchIcon,
  MailIcon,
  CreditCardIcon,
  BellIcon,
  ArrowUpIcon,
  ExternalLinkIcon,
} from "@heroicons/react/solid"


const Sidebar = () => {
  return (
    <div className=' bg-slate-800 flex-none w-14 sm:w-20 h-screen'>
      <div className='h-20 flex items-center'>
        <HomeIcon width={40} className="t text-gray-300 left-3 sm:left-6 fixed"/>
      </div>

      <div className='fixed left-3 sm:left-6 top-[100px]'>
        <ChartBarIcon width={40} className="bg-gray-600 p-2 rounded-lg text-gray-300 mb-4"/>
        <DocumentSearchIcon width={40} className="bg-gray-600 p-2 rounded-lg text-gray-300 mb-4"/>
        <MailIcon width={40} className="bg-gray-600 p-2 rounded-lg text-gray-300 mb-4"/>
        <CreditCardIcon width={40} className="bg-gray-600 p-2 rounded-lg text-gray-300 mb-4"/>
        <BellIcon width={40} className="bg-gray-600 p-2 rounded-lg text-gray-300 mb-4"/>
      </div>
      <div className='fixed bottom-4 left-3 sm:left-6'>
      <a href="#top">
      <ArrowUpIcon width={40} className="bg-gray-600 p-2 rounded-lg text-gray-300 mb-4"/>
      </a>
      <ExternalLinkIcon width={40} className="bg-gray-600 p-2 rounded-lg text-gray-300 mb-4"/>
      </div>

    </div>

  )
}

export default Sidebar  
