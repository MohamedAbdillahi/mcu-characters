import React from 'react'
import Filter from './Filter'

const Layout = ({children}) => {
  return (
    <div className="w-full">
      <div className="w-full px-[20px] md:px-0 md:w-9/12 mt-4 mx-auto relative">
        <h1 className="text-left text-3xl uppercase mb-4 font-bold text-slate-600">
          MCU characters
        </h1>
        <div className='z-100'>

        <Filter />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout