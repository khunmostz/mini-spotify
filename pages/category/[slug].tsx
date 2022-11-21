import CategoriesPage from '@/components/CategoriesPage'
import Leftside from '@/components/Leftside'
import Topside from '@/components/Topside'
import React from 'react'

function Index() {
  return (
    <div className="max-w-full max-h-screen overflow-hidden flex flex-row">
      <div className="w-60 h-screen bg-black">
        <Leftside />
      </div>
      <div className="w-full">
        <div className="h-16 bg-neutral-900 overflow-hidden">
          <Topside />
        </div>
        <div className="w-full">
          <div className="h-screen bg-zinc-800 overflow-auto">
            <CategoriesPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index